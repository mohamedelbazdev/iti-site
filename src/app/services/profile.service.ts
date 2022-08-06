import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public getProfileUrl = "http://127.0.0.1:8000/api/users/profile";
  public updateProfileUrl = "http://127.0.0.1:8000/api/users/profile/edit";

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(this.getProfileUrl)
  }

  updateProfile(data: object) {
    return this.http.post<any>(this.updateProfileUrl, data)
  }

}
