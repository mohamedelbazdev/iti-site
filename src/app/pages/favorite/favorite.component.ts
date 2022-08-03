import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  featuredfavorites!: any[];
  constructor(private favorite : FavoriteService) { }

  ngOnInit(): void {
    this.favorite.getfavorites().subscribe(res => {
        this.featuredfavorites = res.data
       
    })
}





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
