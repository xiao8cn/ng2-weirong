import {Component , OnInit} from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})

export class FooterComponentComponent implements OnInit {

  private headers = new Headers({'x-requested-with': 'XMLHttpRequest'});


  constructor(private http: Http ) { }

  ngOnInit() {
  }

  login() {

    this.http.post('http://localhost:8080/security/doLogin', {username : '13512106395' , password : 'MDAwMDAwMDAwMLC3gZKCiHmusHu8qoGKh20'}, {headers: this.headers})
      .subscribe(res => {
        console.log(res);
      }, error2 => {
        console.log(error2);
      });


  }

  gotoUserPage(){
    console.log(123);
  }


}
