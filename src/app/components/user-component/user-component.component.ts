import { Component, OnInit } from '@angular/core';
import { Http,Headers } from "@angular/http"
import { XfUsersDo } from "../../entity/XfUsersDo";

import { ApiService } from '../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  providers:[ApiService]
})
export class UserComponentComponent implements OnInit {

  userDo = new XfUsersDo();

  registered:boolean = false;

  login_clicked:boolean = false;

  constructor(private http:Http,private api:ApiService) { }

  ngOnInit() {

  }

  onSubmit(data) {
    this.api.userRegister(data)
      .then(res=>console.log(res),error=>console.log(error));
  }

  login_click(){
    this.login_clicked = !this.login_clicked;
  }

  newUserRegister(){
    this.registered = !this.registered;
  }

  cancel(){
    this.registered = false;
    this.login_clicked=false;
  }

}
