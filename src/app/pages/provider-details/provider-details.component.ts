import { Component, OnInit } from '@angular/core';
import { ProviderService } from "../../services/provider.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
  providers: [NgbRatingConfig]
})

export class ProviderDetailsComponent implements OnInit {
  rateForm: FormGroup;

  currentRate = 0;
  providerObject: any = {}
  rateObject: any = {}
  id: any;

  constructor(private provider: ProviderService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private rate: RateService,) {
    this.rateForm = new FormGroup({
      description: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.provider.showProvider(this.route.snapshot.params['id']).subscribe(res => {
      this.providerObject = res.data
    })

    this.rate.getOnrRate(this.route.snapshot.params['id']).subscribe(res => {
      console.log(res);
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
}
