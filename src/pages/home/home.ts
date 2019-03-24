import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero:string;

  constructor(public navCtrl: NavController, public alertCrtl: AlertController) {}

    gerandojogo(){

      var sorteando = Math.floor(Math.random() * 6 + 1);

      switch(sorteando){

        case 1:{
          var lado1 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado1.png";
          break;
        }
          case 2:{
          var lado2 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado2.png";
          break;
          }
          case 3:{
          var lado3 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado3.png";
          break;
          }
          case 4:{
          var lado4 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado4.png";
          break;
          }
          case 5:{
          var lado5 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado5.png";
          break;
          }
          case 6:{
          var lado6 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado6.png";
          break;
          }
          default:{
            alert("Escolha um número!");
          break;
          }
      }

      let resultado = parseInt(this.numero)

      if(resultado == sorteando)
      {
        this.Ganhou(resultado.toString());
      }
      else{
        this.Perdeu(resultado.toString());
      }

    }

    Ganhou(valor: String){

      let alert = this.alertCrtl.create({
      title: 'Você Acertou!',
      subTitle: `Parabéns: ${valor}`,
      buttons:['Jogue Novamente']
      });

    alert.present();
  }

  Perdeu(valor: String){

    let alert = this.alertCrtl.create({
    title: 'Você Errou!',
    subTitle: `Tente Novamente: ${valor}`,
    buttons:['Jogue Novamente']
    });

  alert.present();
  }



}

