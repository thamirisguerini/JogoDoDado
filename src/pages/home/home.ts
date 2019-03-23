import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myrand:number;
  num:string;
  constructor(public navCtrl: NavController) {
  }

  jogar(){
   this.myrand = this.random();

  }
  random(): number {
    let rand = Math.floor(Math.random()*6)+1;
    return rand;
  }

}
