import { Component, OnInit } from '@angular/core';
import { ProviderService } from "../../services/provider.service";
import { FavoriteService } from "../../services/favorite.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  providers!: any[];



  constructor(
              private provider: ProviderService,
              private favorite: FavoriteService,
              private router: Router,
              private toastr: ToastrService
              ){ }

  ngOnInit(): void {

    this.provider.getProviders().subscribe(res => {
      this.providers = res.data
    })
  }


  createFav(providerId:number){
    this.favorite.create(providerId).subscribe(() => {
      // this.router.navigateByUrl('/Favorites')
      this.toastr.success('Add to favorite sucessed', ':)');
    })
  }



}
