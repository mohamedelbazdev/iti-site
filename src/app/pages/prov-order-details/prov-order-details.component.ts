import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  // this.order.getOrders().subscribe(res => {
  //   this.showOrder = res.data
  // })

  this.order.showOrder(this.route.snapshot.params['id']).subscribe(res => {
    this.showOrder = res.data
    console.log(res.data)
    console.log(res.data?.lat)

    this.lat = res.data?.lat
    this.lng = res.data?.lng

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
    let data = {
      order_id: this.route.snapshot.params['id'],
      status: 1
    }

    this.order.statusOrder(data).subscribe(res => {
      this.router.navigateByUrl('/provider-order')
      this.toastr.success('Accept order successfully', ':)');
      }, error => {
      this.toastr.error('Error in Accept order', ':(');
    })

}
rejectOrder() {
    let data = {
      order_id: this.route.snapshot.params['id'],
      status: 2
    }
    this.order.statusOrder(data).subscribe(res => {
      this.router.navigateByUrl('/provider-order')
      this.toastr.success('Reject order successfully', ':)');
      }, error => {
      this.toastr.error('Error in Reject order', ':(');
    })

}
}
