import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
@Component({
  selector: 'app-provider-order',
  templateUrl: './provider-order.component.html',
  styleUrls: ['./provider-order.component.css']
})
export class ProviderOrderComponent implements OnInit {
  featuredorders!: any[];
  constructor(private order: OrderService) { }

  ngOnInit(): void {
    this.order.getOrdersProvider().subscribe(res => {
      this.featuredorders = res.data
      console.log(this.featuredorders);
    })
  }
}
