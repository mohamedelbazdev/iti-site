import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from "../../../services/category.service";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories: any[] = [];
  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    // this.category.getCategories().subscribe(res => {
    //   this.categories = res.data
    // })
  }
}
