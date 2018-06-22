import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {TeamsPage} from "../teams/teams";
import {EliteApi} from "../../shared/elit-api.service";

/**
 * Generated class for the TournamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html',
})
export class TournamentPage {
  tournaments: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public eliteApi: EliteApi,
    public loadingCtlr: LoadingController,) {
  }

  ionViewDidLoad() {
    const loader = this.loadingCtlr.create({
      content: "Getting tournaments..."
    });
    loader.present().then( () => {
      this.eliteApi.getTournaments().subscribe(data => {
        console.log(data);
        this.tournaments = data;
        loader.dismiss();
      });
    })
    console.log('ionViewDidLoad TournamentPage');
  }

  itemTapped($event, tourney){
     this.navCtrl.push(TeamsPage, tourney);
  }

}
