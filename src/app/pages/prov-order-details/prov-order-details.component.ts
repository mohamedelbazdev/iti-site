import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-prov-order-details',
  templateUrl: './prov-order-details.component.html',
  styleUrls: ['./prov-order-details.component.css']
})
export class ProvOrderDetailsComponent implements OnInit {

  showOrder: any = {}

  lat: any = 0.00
  lng: any = 0.00

  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };

  zoom = 4;

  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };
  constructor(private order: OrderService) { }

  ngOnInit(): void {

  this.order.getOrders().subscribe(res => {
    this.showOrder = res.data
  })
}

}
