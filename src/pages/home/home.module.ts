import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula"

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    DragulaModule,
    IonicPageModule.forChild(HomePage),
  ],
  providers: [DragulaService]
})
export class HomePageModule {}
