import {Component, Input, OnInit} from '@angular/core';
import { ProviderService } from "../../../services/provider.service";
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  @Input() providers: any[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit(): void {

    this.provider.getProviders().subscribe(res => {
      this.providers = res.data
    })
  }
}
