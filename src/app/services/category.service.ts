import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public catUrl = `${environment.APIBaseURL}/users/categories`;
  public oneCatUrl = `${environment.APIBaseURL}/users/providersByCat`;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.catUrl)
  }
  showCatetory(id: number) {
    return this.http.post<any>(this.oneCatUrl, { category_id: id })
  }

}
