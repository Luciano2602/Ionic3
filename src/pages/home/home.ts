import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


//para chamar o home.module.ts na aplicação
//@IonicPage({  <- aqui é o lazy loading
//})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  /**
   
    onAbout(): void{
    this.navCtrl.push('AboutPage', {
      id: 10
    });
  } 
   */
  
}
