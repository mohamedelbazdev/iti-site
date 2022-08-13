import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public getProfileUrl = `${environment.APIBaseURL}/users/profile`;
  public updateProfileUrl = `${environment.APIBaseURL}/users/profile/edit`;

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(this.getProfileUrl)
  }

  updateProfile(data: object) {
    return this.http.post<any>(this.updateProfileUrl, data)
  }

}
