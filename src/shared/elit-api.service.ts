import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

@Injectable()

export class EliteApi {
  constructor(private http: HttpClient) {}
  private currentTourney: any = {};

  private baseUrl = "https://eliteschedule-13207.firebaseio.com";

  getTournaments(): Observable<any>{
    return this.http.get(`${this.baseUrl}/tournaments.json`);
  }

  getTournamentData(tourneId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneId}.json`).pipe(
      map((response: Response) => {
        this.currentTourney = response;
        return response;
      })
    )
  }

  getCurrentTourney(){
    return this.currentTourney;
  }
}
