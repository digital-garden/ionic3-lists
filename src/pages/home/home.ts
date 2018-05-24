import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = "NotesPage";
  tab2Root: any = "CountriesPage";
  tab3Root: any = "ContactsPage";
  tab4Root: any = "LadderPage";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
