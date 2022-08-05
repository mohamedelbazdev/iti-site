import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {

  favorites!: any[];

  /**
   *
   * @param favorite
   */
  constructor(private favorite : FavoriteService) { }

  ngOnInit(): void {
    this.favorite.getAll().subscribe(res => {
        this.favorites = res.data
    })
  }

  /**
   *
   * @param providerId
   */
  remove(providerId:number){
    this.favorite.remove(providerId).subscribe(() => {
      let index = this.favorites.findIndex(data => data.provider_id == providerId)
      this.favorites.splice(index, 1)
      // alert('done')
    })
  }

}
