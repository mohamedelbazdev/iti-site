import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  public getOneRateUrl = "http://127.0.0.1:8000/api/rateprovider/";

  constructor(private http: HttpClient) { }


  getOnrRate(id: any) {
    return this.http.get<any>(this.getOneRateUrl + id);
  }
}
