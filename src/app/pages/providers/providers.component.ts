import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  featuredproviders!: any[];
  constructor() { }

  ngOnInit(): void {
    this.featuredproviders = [{
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
