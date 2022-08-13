import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FavoriteService } from "../../services/favorite.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories!: any[];
  providers!: any[];

  constructor(private home: HomeService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.home.getCategories().subscribe(res => {
      this.categories = res.data
    })
    this.home.getProviders().subscribe(res => {
      this.providers = res.data
    })
  }
}
