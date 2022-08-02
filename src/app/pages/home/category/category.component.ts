import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  featuredcategories!: any[];
  constructor() { }

  ngOnInit(): void {
    this.featuredcategories = [{

        "id": 1,
        "name": "Carpenter",
        "created_at": "2022-08-01T09:38:03.000000Z",
        "updated_at": "2022-08-01T09:38:03.000000Z",
        "image": "assets/img/cat-1.jpg"

  }]
  }

}
