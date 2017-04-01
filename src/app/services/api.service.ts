import { Injectable } from '@angular/core';

import { ResponseBody } from '../entity/ResponseBody';
import {Http,Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { ApiUrl,ApiUrlService } from '../common/ApiUrl';

@Injectable()
export class ApiService {

  private headers = new Headers({'x-requested-with': 'XMLHttpRequest'});
  private api = ApiUrl;
  private apiService = new ApiUrlService();

  constructor(private http:Http) { }

  userRegister(data): Promise<ResponseBody>{
    return this
      .http
      .post(this.apiService.getApiUrl(this.api.userRegister),data,{headers: this.headers})
      .toPromise()
      .then(res=>res.json() as ResponseBody)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
