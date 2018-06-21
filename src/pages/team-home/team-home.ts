import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamDetailPage} from "../team-detail/team-detail";
import {StandingsPage} from "../standings/standings";

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  //team = this.navParams;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
   public team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data.team;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
    console.log(this.navParams);
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
