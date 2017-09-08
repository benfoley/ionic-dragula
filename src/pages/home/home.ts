import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  q1 = [];
  q2 = [];

  constructor(
    navCtrl: NavController,
    ) {

    for (var i = 0; i < 5; i++) {
      this.q1.push("1...." + i )
    }

  }

}
