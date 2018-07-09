import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 
 
 

 lazy load
 
 @IonicPage({
  /*o propriedade name, ele será o namo da app, ou seja 
    no método push temos que passar o nome que foi setado aqui
  /
 name: 'AboutPage',
 /*segment é a url que será mostrada, podemos passar parametros, 
 para se usar no navParam esse id é passado na pg home
 segment : 'custom-about/:id',
 //utiliza o historico do momento(só vai usar caso não tenha historico (tipo f5)
 //,a linha abaixo indica qual pagina é para carregar ao apertar na seta de voltar
 defaultHistory : ['HomePage']
})
 
*/

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Register id: ', this.navParams.get('id'));
  }

}
