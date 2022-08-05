import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public updateContactUrl = "http://127.0.0.1:8000/api/users/contact";

  constructor(private http: HttpClient) { }

  /**
   *
   * @param data
   */
  store(data:object) {
    return this.http.post<any>(this.updateContactUrl, data)
  }}
