import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  fetchOrders!: any[];
  constructor(private order: OrderService) { }

  ngOnInit(): void {

  this.fetchOrders = [
          {
                  "image":'assets/img/cat-1.jpg',
                  "name":'ali',
                  "user_id": 3,
                  "provider_id": 5,
                  "sender_id": 3,
                  "received_id": 5,
                  "description": "djelijikljndlknflklkjsslkjlk",
                  "amount": 8,
                  "total_amount": 24,
                  "hours": 3,
                  "lat": 30.071265,
                  "lng": 30.071265,
                  "executed_at": "2020-4-4",
                  "updated_at": "2022-01-05T16:33:23.000000Z",
                  "created_at": "2022-01-05T16:33:23.000000Z",
                  "id": 2
              },
          {
                  "image":'assets/img/cat-1.jpg',
                  "name":'ahmed',
                  "user_id": 6,
                  "provider_id": 6,
                  "sender_id": 1,
                  "received_id": 4,
                  "description": "kldfsdfgksgiokkjdfjsdkmj",
                  "amount": 7,
                  "total_amount": 24,
                  "hours": 5,
                  "lat": 20.071265,
                  "lng": 35.071265,
                  "executed_at": "2020-4-7",
                  "updated_at": "2022-09-04T16:33:23.000000Z",
                  "created_at": "2022-02-04T16:33:23.000000Z",
                  "id": 5
              },
          ]

    this.order.getOrders().subscribe(res => {
      this.fetchOrders = res.data
    })

  }

  removed() {
    console.log("hello fevoret");
    // this.fav.removefav(id).subscribe( res=>{
    //     let index = this.featuredfavorites.findIndex(cat => cat.id === id)
    //     this.featuredfavorites.splice(index,1)
    // })
  }


}
