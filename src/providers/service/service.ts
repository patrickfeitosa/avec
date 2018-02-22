import { HttpClient } from '@angular/common/http';
import { Http ,HttpModule} from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServiceProvider {


    api:string = 'http://api.salaovip.com.br/salao/66/galeria';

  	constructor(public http: Http) {}

    getData(){
  		return this.http.get(this.api).map(res => res.json());
   	}

}
