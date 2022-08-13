import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public paymentUrl = `${environment.APIBaseURL}/users/orders/pay`;

  constructor(private http: HttpClient,) { }

  payOrder(data: any) {
    return this.http.post<any>(this.paymentUrl, data);
  }
}
