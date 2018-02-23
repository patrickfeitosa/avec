import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ServiceProvider} from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  	gallery: any[];

    url:string;

  	constructor(public navCtrl: NavController, public service: ServiceProvider, private inAppBrowser: InAppBrowser) {
  		this.getData();
  	}	

  	//Tratativa dos Dados
  	getData(){
  		this.service.getData().subscribe(
  			data => this.gallery = data.data.gallery,
  			err => console.log(err)
  		);
  	}

    //Abertura de links externos
    openWebPage(url){
        const browser = this.inAppBrowser.create(url);
        browser.show();
    }
}
