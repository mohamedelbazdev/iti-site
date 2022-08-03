import { Component, OnInit } from '@angular/core';
import { ProviderService } from "../../services/provider.service";
import { FavoriteService } from "../../services/favorite.service";
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  featuredproviders!: any[];



  constructor(
              private provider: ProviderService,
              private favorite: FavoriteService
              ) { }

  ngOnInit(): void {

    this.provider.getProviders().subscribe(res => {
      this.featuredproviders = res.data
    })
  }



}
