import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void{
    this.navCtrl.push(ContactPage);
  }

  setRoot(): void{
    this.navCtrl.setRoot(ContactPage);
  }
}

