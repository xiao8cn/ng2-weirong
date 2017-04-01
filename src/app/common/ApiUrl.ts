/**
 * Created by xiao on 2017/4/1.
 */

const ApiHost = "localhost";
const ApiPort = "8080";

export const ApiUrl = {
  userRegister : "user/registerUser"
}

export class ApiUrlService{

  ApiHost:string = "localhost";
  ApiPort:string = "8080";

  setApiHost(host){
    this.ApiHost = host;
  }

  setApiPort(port){
    this.ApiPort = port;
  }

  getApiUrl(api){
    return `http://${this.ApiHost}:${this.ApiPort}/${api}`
  }

}
