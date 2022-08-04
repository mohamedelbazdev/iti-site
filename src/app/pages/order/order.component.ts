import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  featuredorders!: any[];
  constructor(private order :OrderService ) { }

  ngOnInit(): void {
    this.order.geTorders().subscribe(res => {
        this.featuredorders = res.data

    })

}



removed(){
  console.log("hello fevoret");
  // this.fav.removefav(id).subscribe( res=>{
  //     let index = this.featuredfavorites.findIndex(cat => cat.id === id)
  //     this.featuredfavorites.splice(index,1)
  // })
}


}
