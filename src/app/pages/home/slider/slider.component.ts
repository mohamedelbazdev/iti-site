import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides: any[] = []
  constructor(private slide: SliderService,) { }

  ngOnInit(): void {

    this.slide.getSlides().subscribe(res => {
      this.slides = res.data
      console.log(this.slides[0]?.image);

    })
  }

}
