import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

import { AlertModule } from 'ng2-bootstrap';
import { HighLightDirective } from './directives/my-new-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HighLightDirective
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
