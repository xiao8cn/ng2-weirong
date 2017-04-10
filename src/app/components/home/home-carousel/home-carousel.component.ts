import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CarouseImg} from "../../../entity/CarouseImg";

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  screenWidth:string;

  CarouseImages:CarouseImg[];

  constructor() {

    let width = this.screenWidth = screen.width+"px";

    this.CarouseImages = [
        {"width":`${width}`,"height":"10rem","transition":"all 500ms ease","transform":"translate3d(0px, 0px, 0px)","src":"assets/img/new_const03.png"},
        {"width":`${width}`,"height":"10rem","transition":"all 500ms ease","transform":`translate3d(${width}, 0px, 0px)`,"src":"assets/img/detail05_03.png"},
        {"width":`${width}`,"height":"10rem","transition":"all 500ms ease","transform":`translate3d(${width}, 0px, 0px)`,"src":"assets/img/detail05_04.png"},
      ]
  }

  ngOnInit() {

    let img_interval = Observable.interval(3000),
        imgSize = this.CarouseImages.length;

    console.log(imgSize);

    img_interval.subscribe(x=>{
      if(x!=0&&(x+1)%3 === 0){
        this.CarouseImages.map((carouseimg,index)=>{
          if(index === 2){
            carouseimg.transform = `translate3d(-375px, 0px, 0px)`;
          }else{
            carouseimg.transform = `translate3d(${index*375}px, 0px, 0px)`;
          }
          if(index === 2 || index ===0){
            carouseimg.transition = "all 500ms ease";
          }else{
            carouseimg.transition = "all 0ms ease";
          }
        })
      }else{
        this.CarouseImages.map((carouseimg,index)=>{
          if(x%3-index+1 === 2){
            carouseimg.transition = "all 0ms ease";
            carouseimg.transform = `translate3d(375px, 0px, 0px)`;
          }else{
            carouseimg.transition = "all 500ms ease";
            carouseimg.transform = `translate3d(${(x%3-index+1)*screen.width*-1}px, 0px, 0px)`;
          }

          if(x%3==0&&index==2){
            carouseimg.transition = "all 0ms ease";
          }
        })
      }
    },e=>console.log(e),()=>console.log("completed"));

  }

}
