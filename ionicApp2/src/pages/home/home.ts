import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ContactPage } from '../contact/contact';
import { LifecycleEventsPage } from '../lifecycle-events/lifecycle-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void{
    this.navCtrl.push(ContactPage, {
      type: 'push',
      curso: 'Ionic 2',
      ano: 2018,
      message:() => {
        console.log('Bem vindo ao curso de Ionic 2');
      }
    });
    //push().then <- quando finaliza o push, vc pode fazer mais alguma coisa
  }

  setRoot(): void{
    this.navCtrl.setRoot(ContactPage,{
      type: 'setRoot'
    });
  }

  lifecycle(): void{
    this.navCtrl.push(LifecycleEventsPage)
      //quando terminar de fazer o push da página
      .then(() => {
        console.log('Page pushd!');        
      }).catch(error =>{
          console.log('Acesso não autorizado!', error);               
      });     
    
  }
}


