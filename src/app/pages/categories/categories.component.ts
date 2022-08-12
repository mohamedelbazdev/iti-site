import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import { ProviderService } from "../../services/provider.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: any[] = [];
  providers!: any[];
  id: any;
  categoryObject: any;
  constructor(
    private category: CategoryService,
    private provider: ProviderService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.category.showCatetory(this.route.snapshot.params['id']).subscribe(res => {
      this.categoryObject = res.data
      this.providers = res.data.providers
      console.log(this.categoryObject);

    })

    // this.category.getCategories().subscribe(res => {
    //   this.categories = res.data
    // });
    // this.provider.getProviders().subscribe(res => {
    //   this.providers = res.data
    // })
  }
}
