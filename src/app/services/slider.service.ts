import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public getSlidersUrl = `${environment.APIBaseURL}/users/sliders`;


  constructor(private http: HttpClient) { }

  getSlides() {
    return this.http.get<any>(this.getSlidersUrl)
  }
}
