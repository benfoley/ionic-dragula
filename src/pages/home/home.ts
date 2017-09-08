import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DragulaService } from "ng2-dragula/ng2-dragula"


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
    private dragulaService: DragulaService
    ) {

    for (var i = 0; i < 5; i++) {
      this.q1.push("1...." + i )
    }


    dragulaService.drop.subscribe((value) => {
      console.log(value)
    });

    // this is to prevent 'bag already exists error'
    // https://github.com/valor-software/ng2-dragula/issues/442
    const bag: any = this.dragulaService.find('bag');
    if (bag !== undefined ) this.dragulaService.destroy('bag');

    dragulaService.setOptions('bag', {
      resetOnSpill: true
    });

  }

}
