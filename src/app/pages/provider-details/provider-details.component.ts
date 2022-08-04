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

  reviews = [
    {
      "id": 2,
      "created_at": "2022-08-02T09:45:02.000000Z",
      "updated_at": "2022-08-03T16:45:02.000000Z",
      "user_id": 3,
      "provider_id": 5,
      "rate": 3,
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo beatae hic consequuntempore ullam laborum cum aut",
      "user": {
        "id": 3,
        "name": "user",
        "image": null,
        "email": "user@user.com",
        "mobile": "01089812536",
        "email_verified_at": null,
        "lat": null,
        "lng": null,
        "status": 1,
        "role_id": 3,
        "created_at": "2022-08-03T16:45:02.000000Z",
        "updated_at": null
      }
    },
    {
      "id": 3,
      "created_at": "2022-08-03T11:48:49.000000Z",
      "updated_at": "2022-08-04T11:48:49.000000Z",
      "user_id": 7,
      "provider_id": 5,
      "rate": 5,
      "description": "Dolor sit amet consectetur adipisicing elit. Natus nemo beatae hic consequuntur repellat tempore ullam laborum cum aut pariatur!",
      "user": {
        "id": 7,
        "name": "mohamed1",
        "image": "http://127.0.0.1:8000/images/Usrimg/62ebb1be03b60.jpg",
        "email": "mohamed1@mohamed.com",
        "mobile": "01125784022",
        "email_verified_at": null,
        "lat": 30.038577230981588,
        "lng": 31.023860582031237,
        "status": 1,
        "role_id": 3,
        "created_at": "2022-08-04T16:45:02.000000Z",
        "updated_at": null
      }
    },
    {
      "id": 4,
      "created_at": "2022-08-04T11:49:30.000000Z",
      "updated_at": "2022-08-04T11:49:30.000000Z",
      "user_id": 8,
      "provider_id": 5,
      "rate": 4,
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo beatae hic consequuntur repellat tempore ullam laborum",
      "user": {
        "id": 8,
        "name": "mohamed2",
        "image": "http://127.0.0.1:8000/images/Usrimg/62ebb1f9a07b6.png",
        "email": "mohamed2@mohamed.com",
        "mobile": "01125784023",
        "email_verified_at": null,
        "lat": 31.083313959317653,
        "lng": 31.54708445898436,
        "status": 1,
        "role_id": 3,
        "created_at": "2022-08-04T18:45:02.000000Z",
        "updated_at": null
      }
    }
  ]

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

    // this.rate.getOneRate(this.route.snapshot.params['id']).subscribe(res => {
    //   this.rateObject = res.data
    //   console.log(this.rateObject);
    // })

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
