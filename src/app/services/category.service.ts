import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 public catUrl = "http://127.0.0.1:8000/api/users/categories";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.catUrl)
  }

}
