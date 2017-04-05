mui.init();
//获得slider插件对象---图片轮播
var gallery = mui('#banner');
gallery.slider({
    interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
});
/*轮播图片接口调用*/
var app = angular.module('findApp', []);
app.service("param", function () {
    this.getWay = function () {
        var way = $(".way").val();
        return way;
    }
    this.getSess = function () {
        var sess = $(".sess").val();
        return sess;
    }
})
app.controller('bannerCtrl', function ($http, $scope, param) {
    $http({
        methods: "GET",
        url: param.getWay() + "/mobile/news/activitiesList/1",
        params: {
            sessionToken: param.getSess(),
            page: 1,
            size: 3
        }
    }).success(function (response) {
        $scope.last = response.data.data[2];
        $scope.first = response.data.data[0];
        $scope.list = response.data.data[1];

    })
});
app.controller('ttCtrl', function ($http, $scope, param) {
    $http({
        methods: "GET",
        url: param.getWay() + "/mobile/news/queryAllNewsArticle",
        params: {
            sessionToken: param.getSess()
        }
    }).success(function (response) {
        console.log("这是共青头条");
        console.log(response);
        $scope.list = response.data;
    })
});
app.controller('activeCtrl', function ($http, $scope, param) {
    $http({
        methods: "GET",
        url: param.getWay() + "/mobile/news/activitiesList/2",
        params: {
            sessionToken: param.getSess(),
            page: 1,
            size: 3
        }
    }).success(function (response) {
        console.log("这是共青活动");
           console.log(response)
    })
});
/*新闻滚动公告*/
var textDiv = document.getElementById("rollText");
var textList = textDiv.getElementsByTagName("a");
console.log(textList);
console.log(textList.length);
if (textList.length > 2) {
    var textDat = textDiv.innerHTML;
    var br = textDat.toLowerCase().indexOf("<br", textDat.toLowerCase().indexOf("<br") + 3);
    //var textUp2 = textDat.substr(0,br);
    textDiv.innerHTML = textDat + textDat + textDat.substr(0, br);
    textDiv.style.cssText = "position:absolute; top:0";
    var textDatH = textDiv.offsetHeight;
    MaxRoll();
}
var minTime, maxTime, divTop, newTop = 0;
var divRoll = document.getElementById("rollAD");

function MinRoll() {
    newTop = newTop + 0.01;
    if (newTop <= divTop + 0.45) {
        textDiv.style.top = "-" + newTop + "rem";
    } else {
        clearInterval(minTime);
        maxTime = setTimeout(MaxRoll, 2000);
    }
}

function MaxRoll() {
    var top = textDiv.style.top;
    var s = top.substring(0, top.length - 3);
    divTop = Math.abs(s);
    var textDath = textDatH / 100;
    if (divTop >= 0 && divTop < textDath - 0.45) {
        minTime = setInterval(MinRoll, 10);
    } else {
        textDiv.style.top = 0;
        divTop = 0;
        newTop = 0;
        MaxRoll();
    }
}
