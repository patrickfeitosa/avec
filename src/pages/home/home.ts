import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceProvider} from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  	gallery: any[];

  	constructor(public navCtrl: NavController, public service: ServiceProvider) {
  		this.getData();
  	}	

  	//Tratativa dos Dados
  	getData(){
  		this.service.getData().subscribe(
  			data => this.gallery = data.data.gallery,
  			err => console.log(err)
  		);
  	}
}
