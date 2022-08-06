import { Component, OnInit } from '@angular/core';
import { ProviderService } from "../../services/provider.service";
import { FavoriteService } from "../../services/favorite.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  featuredproviders!: any[];



  constructor(
              private provider: ProviderService,
              private favorite: FavoriteService,
              private router: Router
              ) { }

  ngOnInit(): void {

    this.provider.getProviders().subscribe(res => {
      this.featuredproviders = res.data
    })
  }


  createFav(providerId:number){
    this.favorite.create(providerId).subscribe(() => {
      this.router.navigateByUrl('/Favorites')
    })
  }



}
