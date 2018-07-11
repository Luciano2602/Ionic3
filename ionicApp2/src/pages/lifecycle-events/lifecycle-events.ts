import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // //aguarda a entrada da página
  // ionViewCanEnter(): boolean {
  //   console.log('01 ionViewCanEnter called');     
  //   //se retornar false, ele não deixa entrar na página 
  //   return true;
  // }


  //vai retornar uma promises<any> (significa de qlq tipo)
  ionViewCanEnter(): Promise<any> {
    
    return new Promise((resolve, reject) => {
        console.log('Aguardando 2 segundos..');

        //simulando uma requisição assincrona, caso seja PAR ele mostra a página caso contrario não
        setTimeout(() => {
          let number = Math.round(Math.random() * 100);

          if(number % 2 == 0){
            resolve();
            console.log(`${number} - Autorizado!`);            
          }else{
            reject();
            console.log(`${number} - Não Autorizado!`);
          }
        }, 2000);
        
    });
  }

  //como se tivessse carregada em cache mas não foi exibida
  ionViewDidLoad(){
    console.log('02 ionViewDidLoad called');    
  }

  //a página ainda não entrou 
  ionViewWillEnter(){
    console.log('03 ionViewWillEnter called');
    
  }

  //aqui a página já carregou - e exibida
  ionViewDidEnter(){
    console.log('04 ionViewDidEnter called');
    
  }
 
  // esse são os da saída da página
  
  // //verifica se pode sair
  // ionViewCanLeave():boolean{
  //   console.log('05 ionViewCanLeave called');
  //   //se retornar false, não consegue sair da página
  //   return true;
  // }

  ionViewCanLeave(): Promise<any> {
    
    return new Promise((resolve, reject) => {
        console.log('Aguardando 2 segundos..');

        //simulando uma requisição assincrona, caso seja PAR ele sai da página caso contrario não
        setTimeout(() => {
          let number = Math.round(Math.random() * 100);

          if(number % 2 == 0){
            resolve();
            console.log(`${number} - Autorizado!`);            
          }else{
            reject();
            console.log(`${number} - Não Autorizado!`);
          }
        }, 2000);
        
    });
  }

  //preste a sair mas não saiu
  ionViewWillLeave(){
    console.log('06 ionViewWillLeave called');
  
  }
  //já saiu da página
  ionViewDidLeave(){
    console.log('07 ionViewDidLeave called');
    
  }
  //quando a página é destruida e seus elementos
  ionViewWillUnload(){
    console.log('08 ionViewWillUnload called');
    
  }

  onPop():void{
    this.navCtrl.pop()
    .then(() =>{
      console.log('Page popped!');      
    }).catch(error => {
        console.log('Saída não autorizada!', error);
        
      }
    );
  }


}
