import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-prov-order-details',
  templateUrl: './prov-order-details.component.html',
  styleUrls: ['./prov-order-details.component.css']
})
export class ProvOrderDetailsComponent implements OnInit {

  id: any;
  showOrder: any = {}

  lat: number = 0
  lng: number = 0

  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };

  zoom = 4;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };

  constructor(
    private order: OrderService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

  // this.order.getOrders().subscribe(res => {
  //   this.showOrder = res.data
  // })

  this.order.showOrder(this.route.snapshot.params['id']).subscribe(res => {
    this.showOrder = res.data
    console.log(res.data)
    console.log(res.data?.lat)
    this.markerPosition = {
      lat: res.data?.lat,
      lng: res.data?.lng
    }
    this.center = {
      lat: res.data?.lat,
      lng: res.data?.lng
    }
  })
}

acceptOrder() {
  if(confirm("Are you sure  ")) {
    console.log("Implement delete functionality here");
    let data = {
      order_id: this.route.snapshot.params['id'],
      status: 1
    }
    this.order.statusOrder(data).subscribe(res => {
      alert('done accept')
    }, error => {
      alert('error')
    })
  }
}
rejectOrder() {
  if(confirm("Are you sure to delete ")) {
    console.log("Implement delete functionality here");
    let data = {
      order_id: this.route.snapshot.params['id'],
      status: 2
    }
    this.order.statusOrder(data).subscribe(res => {
      alert('done refuse')
    }, error => {
      alert('error')
    })
  }
}
}
