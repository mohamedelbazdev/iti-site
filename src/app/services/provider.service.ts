import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public providerUrl = "http://127.0.0.1:8000/api/users/providers";

  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get<any>(this.providerUrl)
  }



}
