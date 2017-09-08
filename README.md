# Demo project for Ionic with Dragula

Just working out how to import Dragula when using lazy-loaded page modules.

To test, download and run `npm install`

To set it up in a new project, create a project and install the dragula and ng-dragula libraries.

    ionic start myProject blank
    npm install ng2-dragula dragula --save


Delete the HomePage import from app.module.ts and app.component.ts.

`src/app/app.component.ts`
```typescript
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "HomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
```


Also include the Dragula imports in app.module

`src/app/app.module.ts`
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula"

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DragulaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```


Create a new home page module and import the Dragula module and service.

`pages/home/home.module.ts`
```typescript
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
```


Import DragulaService in the home page.

`pages/home/home.ts`
```typescript
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
  constructor(private dragulaService: DragulaService) {
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
```



I think that's it.. have I missed anything?


Versions

- ionic-angular 3.6.0
- dragula ^3.7.2
- ng2-dragula ^1.5.0