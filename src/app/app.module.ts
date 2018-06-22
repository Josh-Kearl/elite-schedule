import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyTeamsPage} from "../pages/my-teams/my-teams";
import {TeamDetailPage} from "../pages/team-detail/team-detail";
import {TeamsPage} from "../pages/teams/teams";
import {TournamentPage} from "../pages/tournament/tournament";
import {StandingsPage} from "../pages/standings/standings";
import {TeamHomePage} from "../pages/team-home/team-home";
import {EliteApi} from "../shared/elit-api.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentPage,
    StandingsPage,
    TeamHomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    EliteApi,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
