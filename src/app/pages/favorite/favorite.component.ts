import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  featuredfavorites!: any[];
  constructor() { }

  ngOnInit(): void {
    this.featuredfavorites = [{
      "id": 1,
      "provider_id": 1,
      "user_id": 2,
      "created_at": null,
      "updated_at": null,
      "providers": {
          "id": 2,
          "name": "provider",
          "image": "assets/img/cat-1.jpg",
          "email": "provider@provider.com",
          "mobile": "01553524888",
          "email_verified_at": null,
          "lat": null,
          "lng": null,
          "status": 1,
          "role_id": 2,
          "created_at": null,
          "updated_at": null
      }
  }]


}
}
