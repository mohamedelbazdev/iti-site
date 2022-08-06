import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public providerUrl = "http://127.0.0.1:8000/api/users/providers";
  public showProviderUrl = "http://127.0.0.1:8000/api/users/providers/details";
  public setRateUrl = "http://127.0.0.1:8000/api/users/rateprovider";


  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get<any>(this.providerUrl)
  }

  /**
   *
   * @param id
   */
  showProvider(id: number) {
    return this.http.post<any>(this.showProviderUrl, { user_id: id })
  }

  /**
   *
   * @param data
   */
  setRate(data: object) {
    return this.http.post<any>(this.setRateUrl, data)
  }
}
