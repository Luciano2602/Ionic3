import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MinhaPaginaPage } from '../pages/minha-pagina/minha-pagina';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { BoxComponent } from '../components/box/box';


@NgModule({
  declarations: [    
    MyApp,
    MinhaPaginaPage,
    ListPage,
    AboutPage,
    HomePage,
    BoxComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinhaPaginaPage,
    ListPage,
    AboutPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AppModule {}
