import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  @Input() providers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.providers = [{
      "id": 2,
      "name": "provider",
      "image":  "assets/img/product-1.jpg",
      "email": "provider@provider.com",
      "mobile": "01553524888",
      "email_verified_at": null,
      "lat": null,
      "lng": null,
      "status": 1,
      "role_id": 2,
      "created_at": null,
      "updated_at": null,
      "providers": []
    }]
  }
}
