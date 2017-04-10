import {Component , OnInit} from '@angular/core';
import { Http, Headers } from '@angular/http';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})

export class FooterComponentComponent implements OnInit {

  private headers = new Headers({'x-requested-with': 'XMLHttpRequest'});

  constructor(private http: Http,private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
        'home-wr',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgImg/home_page.svg'))
      .addSvgIcon(
        'person-wr',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgImg/me.svg'))
      .addSvgIcon(
        'shop-cart-wr',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgImg/shopping_cart.svg'));
  }

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
