import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TournamentPage} from "../tournament/tournament";
import {TeamsPage} from "../teams/teams";
import {TeamDetailPage} from "../team-detail/team-detail";

/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  teams = [
    { id: 1, name: 'HC Elite' },
    { id: 2, name: 'Team Takeover' },
    { id: 3, name: 'DC Thunder' }
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teams = this.navParams.data;
    console.log('**nav params:', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  goToTournaments(){
    this.navCtrl.push(TournamentPage);
  }

  itemTapped(event, team){
    this.navCtrl.push(TeamDetailPage, {team: team});
  }

}
