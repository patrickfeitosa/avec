import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { ServiceProvider} from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild(Slides) slides: Slides;

  	gallery: any[];

  	constructor(public navCtrl: NavController, public service: ServiceProvider) {
  		this.getData();
  	}

  	//Tratativa do Slide
  	goToSlide() {
    	this.slides.slideTo(2, 500);
  	}

  	slideChanged() {
    	let currentIndex = this.slides.getActiveIndex();
    	console.log('Current index is', currentIndex);
  	}
	

  	//Tratativa dos Dados
  	getData(){
  		this.service.getData().subscribe(
  			data => this.gallery = data.data.gallery,
  			err => console.log(err)
  		);
  	}
}
