import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public getSlidersUrl = "http://127.0.0.1:8000/api/users/sliders";


  constructor(private http: HttpClient) { }

  getSlides() {
    return this.http.get<any>(this.getSlidersUrl)
  }
}
