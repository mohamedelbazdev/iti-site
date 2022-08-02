import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {
  currentRate = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
