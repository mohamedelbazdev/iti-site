import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public catUrl = "http://127.0.0.1:8000/api/users/categories";
  public oneCatUrl = "http://127.0.0.1:8000/api/users/providersByCat";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.catUrl)
  }
  showCatetory(id: number) {
    return this.http.post<any>(this.oneCatUrl, { category_id: id })
  }

}
