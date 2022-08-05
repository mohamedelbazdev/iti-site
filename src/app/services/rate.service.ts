import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  public getOneRateUrl = "http://127.0.0.1:8000/api/users/viewers";

  constructor(private http: HttpClient) { }

  getOneRate(id: number) {
    return this.http.post<any>(this.getOneRateUrl, {provider_id: id});
  }
}
