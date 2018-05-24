import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { DatBProvider } from '../../providers/dat-b/dat-b';
/**
 * Generated class for the CountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html',
})
export class CountriesPage {

		countries: string[];
		errorMessage: string;
		descending: boolean = false;
    order: number;
		column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: DatBProvider) {}
 ionViewDidLoad() {
    this.getCountries();
  }
    getCountries() {
    this.rest.getCountries()
      .subscribe(
				countries => this.countries = countries,
				error => this.errorMessage = <any>error);
  }

 sort(){
		this.descending = !this.descending;
		this.order = this.descending ? 1: -1;
	}

}
