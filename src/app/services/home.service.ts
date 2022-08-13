import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public catUrl = `${environment.APIBaseURL}/users/categories`;
  public providerUrl = `${environment.APIBaseURL}/users/providers`;

  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get<any>(this.providerUrl)
  }

  getCategories() {
    return this.http.get<any>(this.catUrl)
  }
}
