import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from "../../services/category.service";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: any[] = [];
  constructor(private categorie: CategoryService) { }

  ngOnInit(): void {

    this.categorie.getCategories().subscribe(res => {
      this.categories = res.data
    })
  }

}
