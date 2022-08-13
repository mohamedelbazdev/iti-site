import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  public fetchOrderUrl = `${environment.APIBaseURL}/users/orders/sended`;
  public ProviderFetchOrderUrl = `${environment.APIBaseURL}/users/orders/received`;
  public createOrderUrl = `${environment.APIBaseURL}/users/orders/create`;
  public showOrderUrl = `${environment.APIBaseURL}/users/orders/details`;
  public updateStatusOrderUrl = `${environment.APIBaseURL}/users/orders/update`;

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

