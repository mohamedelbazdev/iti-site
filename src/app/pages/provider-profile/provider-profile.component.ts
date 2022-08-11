import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {

  myProfile: any
  lat: any = 0.00
  lng: any = 0.00
  // start google map
  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };

  zoom = 4;

  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };

  constructor(private profile: ProfileService) { }

  ngOnInit(): void {
    this.profile.getProfile().subscribe((res) => {
      this.myProfile = res.data
      this.lat = this.myProfile.lat
      this.lat = this.myProfile.lng
    })
  }

}
