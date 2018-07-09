import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //esse metodo o ionic chama automaticamente, no carregamento da página
  ionViewDidLoad() {
    //pegando os parametros chamado pela página
    console.log(this.navParams);
    console.log(this.navParams.get('type'));

    this.navParams.data.type;

    this.navParams.data['message']();

    console.log(this.navParams.data.ano);
    

  }

  popPage(): void{
    this.navCtrl.pop();
  }

}
