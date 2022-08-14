import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FavoriteService } from '../../services/favorite.service'
import { NgxSpinnerService } from "ngx-spinner";

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
   * @param toastr
   */
  constructor(private favorite: FavoriteService,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.favorite.getAll().subscribe(res => {
      this.favorites = res.data
    })
  }

  /**
   *
   * @param providerId
   */
  remove(providerId: number) {
    this.favorite.remove(providerId).subscribe(() => {
      this.spinner.show();
      let index = this.favorites.findIndex(data => data.provider_id == providerId)
      this.favorites.splice(index, 1)
      // alert('done')
      this.toastr.success('Remove Favorite Successed', ':(');
      this.spinner.hide();
    })
  }
}
