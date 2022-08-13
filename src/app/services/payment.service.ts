import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public paymentUrl = "http://127.0.0.1:8000/api/users/orders/pay";

  constructor(private http: HttpClient,) { }

  payOrder(data: any) {
    return this.http.post<any>(this.paymentUrl, data);
  }
}
