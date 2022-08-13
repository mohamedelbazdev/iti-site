import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favUrl = `${environment.APIBaseURL}/users/favorites`;
  public createFavUrl = `${environment.APIBaseURL}/users/favorites/create`;
  public removeUrl = `${environment.APIBaseURL}/users/favorites/destroy`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.favUrl)
  }

  /**
   *
   * @param providerId
   */
  create(providerId: number) {
    return this.http.post<any>(this.createFavUrl, { provider_id: providerId })
  }

  /**
   *
   * @param providerId
   */
  remove(providerId: number) {
    return this.http.post<any>(this.removeUrl, { provider_id: providerId });
  }


}
