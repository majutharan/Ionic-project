import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HelloIonicComponent} from "../pages/sample/hello-ionic.component";
import {LoginComponent} from "../pages/login/login.component";
import {ItemdetailsComponent} from "../pages/itemdetails/itemdetails.component";
import {ActionComponent} from "../pages/action_sheet/action.component";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelloIonicComponent,
    LoginComponent,
    ItemdetailsComponent,
    ActionComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelloIonicComponent,
    LoginComponent,
    ItemdetailsComponent,
    ActionComponent,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
