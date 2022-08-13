import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public providerUrl = `${environment.APIBaseURL}/users/providers`;
  public showProviderUrl = `${environment.APIBaseURL}/users/providers/details`;
  public setRateUrl = `${environment.APIBaseURL}/users/rateprovider`;

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
