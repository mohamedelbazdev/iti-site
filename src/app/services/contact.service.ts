import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public updateContactUrl = `${environment.APIBaseURL}/users/contacts`;

  constructor(private http: HttpClient) { }

  /**
   *
   * @param data
   */
  store(data: object) {
    return this.http.post<any>(this.updateContactUrl, data)
  }
}
