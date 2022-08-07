import { Component, OnInit } from '@angular/core';
import { ProviderService } from "../../services/provider.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RateService } from 'src/app/services/rate.service';
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
  providers: [NgbRatingConfig]
})

export class ProviderDetailsComponent implements OnInit {
  rateForm: FormGroup;
  orderForm: FormGroup;

  currentRate = 1;
  providerObject: any = {}
  rateObject: any = {}
  id: any;
  hours:number = 1

  reviews = []

  constructor(
      private provider: ProviderService,
      private route: ActivatedRoute,
      private auth: AuthService,
      private rate: RateService,
      private order: OrderService,
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

    this.rate.getOneRate(this.route.snapshot.params['id']).subscribe(res => {
      this.reviews = res.data.rate
      console.log(this.rateObject);
    })
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
      alert('send rating done....')
    })
  }

  createBooking(){
    let data = {
      // user_id: this.auth.getUser()?.id,
      provider_id: this.route.snapshot.params['id'],
      // sender_id: this.auth.getUser()?.id,
      received_id: this.route.snapshot.params['id'],
      hours: this.orderForm.controls['hours'].value,
      description: this.orderForm.controls['description'].value,
      lat: '1.2555',  // eng. aya
      lng: '0.2555',  // eng. aya
      executed_at: '2022-2-12'
    }
    this.order.sendOrder(data).subscribe(res => {
      this.reviews = res.data.rate
      console.log(this.rateObject);
    })
  }
}
