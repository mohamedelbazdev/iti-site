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
  constructor(
    private order: OrderService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  // this.order.getOrders().subscribe(res => {
  //   this.showOrder = res.data
  // })

  this.order.showOrder(this.route.snapshot.params['id']).subscribe(res => {
    this.showOrder = res.data
  })
}
sure(){
  alert('are you sure!');
}
not_sure(){
  alert('are you sure!');
}

}
