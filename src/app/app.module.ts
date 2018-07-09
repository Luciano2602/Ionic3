import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MinhaPaginaPage } from '../pages/minha-pagina/minha-pagina';
import { ListPage } from '../pages/list/list';



@NgModule({
  declarations: [
    MyApp,
    MinhaPaginaPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      //a linha a baixo é para o ionic fazer um pré loading do nosso código, ou seja
      //ele continua usando o lazy load, porem apos carregar toda aplicação ele, faz o download dos pedaços 
      //do código 
      preloadModules: true 
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinhaPaginaPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AppModule {}
