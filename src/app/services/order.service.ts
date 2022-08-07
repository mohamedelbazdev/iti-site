import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public fetchOrderUrl = "http://127.0.0.1:8000/api/users/orders/sended";
  public createOrderUrl = "http://127.0.0.1:8000/api/users/orders/create";

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<any>(this.fetchOrderUrl)
  }

  sendOrder(data:object){
    return this.http.post<any>(this.createOrderUrl, data)
  }

}

