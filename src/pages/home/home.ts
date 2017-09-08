import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DragulaService } from "../../../node_modules/ng2-dragula/ng2-dragula"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  q1 = [];
  q2 = [];

  constructor(
    navCtrl: NavController,
    private dragulaService: DragulaService
    ) {

    for (var i = 0; i < 5; i++) {
      this.q1.push("1...." + i )
    }

    dragulaService.drop.subscribe((value) => {
      console.log(value)
    });
    dragulaService.setOptions('bag', {
      resetOnSpill: true
    });

  }

}
