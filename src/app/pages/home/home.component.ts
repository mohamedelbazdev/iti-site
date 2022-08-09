import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FavoriteService } from "../../services/favorite.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories!: any[];
  providers!: any[];

  constructor(private home: HomeService) { }

  ngOnInit(): void {
    this.home.getCategories().subscribe(res => {
      this.categories = res.data
    })
    this.home.getProviders().subscribe(res => {
      this.providers = res.data
    })
  }
}
