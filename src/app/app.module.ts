import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

import { HighLightDirective } from './directives/my-new-directive.directive';

import { MaterialModule } from '@angular/material';
import { HeadComponentComponent } from './components/head-component/head-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HighLightDirective,
    HeadComponentComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
