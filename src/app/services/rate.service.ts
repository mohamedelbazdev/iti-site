import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  public getOneRateUrl = `${environment.APIBaseURL}/users/viewers`;

  constructor(private http: HttpClient) { }

  getOneRate(id: number) {
    return this.http.post<any>(this.getOneRateUrl, { provider_id: id });
  }
}
