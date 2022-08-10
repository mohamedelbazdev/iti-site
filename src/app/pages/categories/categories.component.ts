import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import { ProviderService } from "../../services/provider.service";
import { FavoriteService } from "../../services/favorite.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: any[] = [];
  providers!: any[];
  constructor(
    private category: CategoryService,
    private provider: ProviderService,
    private favorite: FavoriteService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.category.getCategories().subscribe(res => {
      this.categories = res.data
    });
    this.provider.getProviders().subscribe(res => {
      this.providers = res.data
    })
  }

  createFav(providerId: number) {
    this.favorite.create(providerId).subscribe(() => {
      // this.router.navigateByUrl('/Favorites')
      this.toastr.success('Add to favorite sucessed', ':)');
    })
  }
}
