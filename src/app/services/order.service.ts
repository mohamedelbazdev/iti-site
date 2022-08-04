import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orderUrl = "http://127.0.0.1:8000/api/users/orders";

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<any>(this.orderUrl)
  }

}

