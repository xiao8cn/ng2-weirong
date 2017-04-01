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

  constructor(private http:Http,private api:ApiService) { }

  ngOnInit() {

  }

  onSubmit(data) {

    this.api.userRegister(data)
      .then(res=>console.log(res),error=>console.log(error));


  }

}
