import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  public fetchOrderUrl = "http://127.0.0.1:8000/api/users/orders/sended";
  public ProviderFetchOrderUrl = "http://127.0.0.1:8000/api/users/orders/received";
  public createOrderUrl = "http://127.0.0.1:8000/api/users/orders/create";
  public showOrderUrl = "http://127.0.0.1:8000/api/users/orders/details";
  public updateStatusOrderUrl = "http://127.0.0.1:8000/api/users/orders/update";

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<any>(this.fetchOrderUrl)
  }

  getOrdersProvider() {
    return this.http.get<any>(this.ProviderFetchOrderUrl)
  }

  sendOrder(data: object) {
    return this.http.post<any>(this.createOrderUrl, data)
  }

  showOrder(orderId: number) {
    return this.http.post<any>(this.showOrderUrl, { order_id: orderId })
  }

  statusOrder(data: object) {
    return this.http.post<any>(this.updateStatusOrderUrl, data)
  }

}

