import {BrowserModule, Title} from '@angular/platform-browser';
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

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/home/search/search.component';
import { HomeCarouselComponent } from './components/home/home-carousel/home-carousel.component';
import { HomeGoodsComponent } from './components/home/home-goods/home-goods.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'personPage',
    component: UserComponentComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'homePage',
    component:HomeComponent,
  },
  {
    path: '',
    redirectTo: '/personPage',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

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
    SpaceLineComponent,
    HomeComponent,
    SearchComponent,
    HomeCarouselComponent,
    HomeGoodsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
