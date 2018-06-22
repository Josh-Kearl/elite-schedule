import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamDetailPage} from "../team-detail/team-detail";
import {TeamHomePage} from "../team-home/team-home";
import { EliteApi } from '../../shared/elit-api.service';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi ) {

  }

  ionViewDidLoad() {

    const tourneyId = this.navParams.data.id
    console.log('ionViewDidLoad TeamsPage',);
    this.eliteApi.getTournamentData(tourneyId).subscribe(data =>{
      this.teams = data.teams;
    })
  }

  itemTapped(event, team) {
    this.navCtrl.push(TeamHomePage, {team: team});
  }

}
