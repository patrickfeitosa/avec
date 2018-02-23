import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private inAppBrowser: InAppBrowser) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  irHome() {
    this.nav.setRoot(HomePage);
  }

  irSobre() {
    this.nav.setRoot(SobrePage);
  }

  //Abertura de links externos
  openWebPage(url){
       const browser = this.inAppBrowser.create(url);
       browser.show();
  }
}
