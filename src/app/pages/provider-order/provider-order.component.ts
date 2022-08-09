import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
@Component({
  selector: 'app-provider-order',
  templateUrl: './provider-order.component.html',
  styleUrls: ['./provider-order.component.css']
})
export class ProviderOrderComponent implements OnInit {
  featuredorders!: any[];
  constructor(private order: OrderService) { }

  ngOnInit(): void {
  //   this.featuredorders = [{
  //               "image":'assets/img/cat-1.jpg',
  //                 "name":'ali',
  //                 "user_id": 3,
  //                 "provider_id": 5,
  //                 "sender_id": 3,
  //                 "received_id": 5,
  //                 "description": "kldfsdfgfffffffffffffffffffffffffffffffffffgksgiokkjdfjsdkmj",
  //                 "amount": 8,
  //                 "total_amount": 24,
  //                 "hours": 3,
  //                 "lat": 30.071265,
  //                 "lng": 30.071265,
  //                 "executed_at": "2020-4-4",
  //                 "updated_at": "2022-01-05T16:33:23.000000Z",
  //                 "created_at": "2022-01-05T16:33:23.000000Z",
  //                 "id": 2
  // }]
  this.order.getOrders().subscribe(res => {
    this.featuredorders = res.data
  })
}

}
