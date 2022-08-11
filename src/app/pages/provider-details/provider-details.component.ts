import { Component, OnInit } from '@angular/core';
import { ProviderService } from "../../services/provider.service";
import { FavoriteService } from "../../services/favorite.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RateService } from 'src/app/services/rate.service';
import { OrderService } from "../../services/order.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
  providers: [NgbRatingConfig]
})

export class ProviderDetailsComponent implements OnInit {
  rateForm: FormGroup;
  orderForm: FormGroup;
  submitted = false;


  // start google map
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };

  zoom = 4;

  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.orderForm.patchValue({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }
  // end google map



  currentRate = 1;
  description = '';
  lat: number = 12;
  lng: number = 15;
  providerObject: any = {}
  rateObject: any = {}
  id: any;
  hours: number = 1

  reviews = []

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private rate: RateService,
    private order: OrderService,
    private toastr: ToastrService,
    private favorite: FavoriteService,
    private router: Router,

  ) {
    this.rateForm = new FormGroup({
      description: new FormControl('', [Validators.required])
    });

    this.orderForm = new FormGroup({
      hours: new FormControl(1, [Validators.required]),
      description: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.provider.showProvider(this.route.snapshot.params['id']).subscribe(res => {
      this.providerObject = res.data
    })

    this.rate.getOneRate(this.route.snapshot.params['id']).subscribe((res:any) => {
      this.reviews = res.data.rate
      console.log(this.reviews);
    })
  }


  get orderFormControl() {
    return this.orderForm.controls;
  }

  setRate() {
    console.log(this.auth.getUser()?.id)
    console.log(this.auth.getUser())
    // @ts-ignore
    let data = {
      user_id: this.auth.getUser()?.id,
      provider_id: this.route.snapshot.params['id'],
      rate: this.currentRate,
      description: this.rateForm.controls['description'].value
    }
    this.provider.setRate(data).subscribe(() => {
      this.toastr.success('send rating done', ':)');
    }, error => {
      this.toastr.error('Rated before or something went wrong');
      // console.log(error)
    })
  }

  createBooking() {

    this.submitted = true;
    if (this.orderForm.valid) {
        this.toastr.success('  your order successfully', ':)');
      }
     else {

      this.toastr.error('Please check the data and try again', ':(');
    }


    let data = {
      // user_id: this.auth.getUser()?.id,
      provider_id: this.route.snapshot.params['id'],
      // sender_id: this.auth.getUser()?.id,
      received_id: this.route.snapshot.params['id'],
      hours: this.orderForm.controls['hours'].value,
      //description: this.orderForm.controls['description'].value,
      description: this.description,
      // lat: '1.2555',  // eng. ahmed
      // lng: '0.2555',  // eng. ahmed
      lat: this.lat,
      lng: this.lng,
      executed_at: '2022-2-12'

    }
    this.order.sendOrder(data).subscribe((res:any) => {
      this.reviews = res.data.rate

      this.toastr.success('Order has been created successfully', ':)');
      this.router.navigateByUrl('/order')
      // console.log(this.rateObject);
    }, (error:any) => {
      this.toastr.error('The order was not completed successfully');
      // console.log(error)
    })
  }
  createFav() {
    this.favorite.create(this.route.snapshot.params['id']).subscribe(() => {
      // this.router.navigateByUrl('/Favorites')
      this.toastr.success('Add to favorite sucessed', ':)');
    }, (error:any) => {
      this.toastr.success('Remove favorite has been sucessefully');
      // console.log(error)
    })
  }

}
