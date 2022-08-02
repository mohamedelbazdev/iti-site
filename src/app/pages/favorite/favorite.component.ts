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



  // addedToCartProducts: Product[] = [];
  // removedProducts: Product[] = [];

  addToBook() {
console.log("hello fevoret");

    // if (this.addedToCartProducts.includes(product)) {
    //     return;
    // }

    // this.addedToCartProducts.push(product);
    // this.cart.add(product, 1).subscribe({
    //     complete: () => {
    //         this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
    //     }
    // });
}


removed(){
  console.log("hello fevoret");
  // this.fav.removefav(id).subscribe( res=>{
  //     let index = this.featuredfavorites.findIndex(cat => cat.id === id)
  //     this.featuredfavorites.splice(index,1)
  // })
}

}
