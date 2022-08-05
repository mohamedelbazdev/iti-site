import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favUrl = "http://127.0.0.1:8000/api/users/favorites";
  public createFavUrl = "http://127.0.0.1:8000/api/users/favorites/create";
  public removeUrl = "http://127.0.0.1:8000/api/users/favorites/destroy";

  constructor(private http:HttpClient) { }

    getAll() {
        return this.http.get<any>(this.favUrl)
    }

  /**
   *
   * @param providerId
   */
    create(providerId:number) {
      return this.http.post<any>(this.createFavUrl, {provider_id: providerId})
    }

  /**
   *
   * @param providerId
   */
   remove(providerId:number){
     return this.http.post<any>(this.removeUrl,{provider_id:providerId});
   }


}
