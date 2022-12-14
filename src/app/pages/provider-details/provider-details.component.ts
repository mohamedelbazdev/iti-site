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
import { NgxSpinnerService } from "ngx-spinner";

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

  // moveMap(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.center = (event.latLng.toJSON());
  //   if (event.latLng != null) {
  //     this.orderForm.patchValue({
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng(),
  //     });
  //   }
  // }

  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
  dragged(event: any) {
    if (event.latLng != null) {
      this.orderForm.patchValue({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }
  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) {
  //     this.orderForm.patchValue({
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng(),
  //     });
  //   }
  // }

  // end google map

  currentRate = 1;
  description = '';
  // lat: number = 12;
  // lng: number = 15;
  providerObject: any = {}
  // rateObject: any = {}
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
    private spinner: NgxSpinnerService
  ) {
    this.rateForm = new FormGroup({
      description: new FormControl('', [Validators.required])
    });

    this.orderForm = new FormGroup({
      hours: new FormControl(1, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      lat: new FormControl(12, [Validators.required]),
      lng: new FormControl(15, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.spinner.show();

    this.provider.showProvider(this.route.snapshot.params['id']).subscribe(res => {
      this.providerObject = res.data
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    })

    this.rate.getOneRate(this.route.snapshot.params['id']).subscribe((res: any) => {
      this.reviews = res.data.rate
      this.spinner.hide();
      console.log(this.reviews);
    }, ()=> {
      this.spinner.hide();
    })
  }

  get orderFormControl() {
    return this.orderForm.controls;
  }

  setRate() {
    this.spinner.show();
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
      this.spinner.hide();
    }, () => {
      this.toastr.error('Rated before or something went wrong');
      this.spinner.hide();
    })
  }

  createBooking() {
    this.submitted = true;
    if (this.orderForm.valid) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
      let data = {
        // user_id: this.auth.getUser()?.id,
        provider_id: this.route.snapshot.params['id'],
        // sender_id: this.auth.getUser()?.id,
        received_id: this.route.snapshot.params['id'],
        hours: this.orderForm.controls['hours'].value,
        description: this.orderForm.controls['description'].value,
        // description: this.description,
        // lat: '1.2555',  // eng. ahmed
        // lng: '0.2555',  // eng. ahmed
        lat: this.orderForm.controls['lat'].value,
        lng: this.orderForm.controls['lng'].value,
        executed_at: '2022-2-12'
      }
      console.log('lat')
      console.log(this.orderForm.controls['lat'].value)
      console.log('lng')
      console.log(this.orderForm.controls['lng'].value)
      console.log(data)
      console.log('lat marker')
      console.log(this.markerPosition.lat)
      console.log('lng marker')
      console.log(this.markerPosition.lng)
      this.order.sendOrder(data).subscribe((res: any) => {
        this.reviews = res.data.rate
        this.toastr.success('Order has been created successfully', ':)');
        this.router.navigateByUrl('/order')
      }, () => {
        this.toastr.error('The order was not completed successfully');
      })
    } else {
      this.toastr.error('Please check the data and try again', ':(');
    }
  }

  createFav() {
    this.spinner.show();
    this.favorite.create(this.route.snapshot.params['id']).subscribe(() => {
      // this.router.navigateByUrl('/Favorites')
      this.providerObject.users.is_favorite_count = 1
      this.spinner.hide();
      this.toastr.success('Add to favorite sucessed', ':)');
    }, () => {
      this.providerObject.users.is_favorite_count = 0
      this.toastr.success('Remove favorite has been sucessefully');
      this.spinner.hide();
    })
  }
}
