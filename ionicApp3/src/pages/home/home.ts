import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigPage } from '../config/config';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onConfig(): void{
    this.navCtrl.push(ConfigPage);
  }

  onPushAbout(): void{
    this.navCtrl.push(AboutPage);
  }
}
