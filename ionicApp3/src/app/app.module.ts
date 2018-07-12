import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigPage } from '../pages/config/config';

@NgModule({
  declarations: [
    AboutPage,
    MyApp,    
    ContactPage,
    ConfigPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    //passando as configuracoes de modos
    IonicModule.forRoot(MyApp,{
      //todas as plataformas vai ser do mesmo design( a mesma aparencia ios, android e wf)

      //andriod
      //mode: 'md'

      //ios
      //mode: 'ios'

      //caso querira apenas uma plataforma igual a outra, ex : quero que o android tenha o design do ios
      platforms:{
        android:{
          mode: 'ios'
        },
        ios:{
          //configuracao ios
        },//a linha abaixo é windows Phone
        windows:{
          //colocando o menu do wf no rodapé
          tabsPlacement: 'bottom'
        }
      }

      
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    MyApp,
    ContactPage,
    ConfigPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
