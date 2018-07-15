import { Component } from '@angular/core';
import { Config, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public config: Config) {
    //a linha abaixo muda a configuracao apos a aplicacao ser renderizada (mas tem que ser atualizada)
    //this.config.set('ios');

    //colocando o menu no topo
    //this.config.set('tabsPlacement', 'top');
    //colocando icones do menu no left
    //this.config.set('tabsLayout', 'icon-left');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
