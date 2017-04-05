import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

import { HighLightDirective } from './directives/my-new-directive.directive';

import { MaterialModule } from '@angular/material';
import { HeadComponentComponent } from './components/head-component/head-component.component';
import { MdIconOptionDirective } from './directives/md-icon-option.directive';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { BaseMenuComponent } from './components/base-menu/base-menu.component';
import { OrderMenuComponent } from './components/order-menu/order-menu.component';
import { SpaceLineComponent } from './components/space-line/space-line.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HighLightDirective,
    HeadComponentComponent,
    MdIconOptionDirective,
    UserComponentComponent,
    BaseMenuComponent,
    OrderMenuComponent,
    SpaceLineComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
