/**
 * Created by xiao on 2017/4/1.
 */
export class ResponseBody{

  header:object;
  ok:boolean;
  status:number;
  statusText:string;
  type:number;
  url:string;
  _body:string;

  error:string;
  exception:string;
  message:string;
  path:string;
  timestamp:number;

  jsessionid:string;
  success:boolean;

  constructor(){}

}
