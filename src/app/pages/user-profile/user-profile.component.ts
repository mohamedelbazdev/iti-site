import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
    draggable: false
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };

  constructor(private profile: ProfileService) {
    // this.profileForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required]),
    //   confirmedPassword: new FormControl('', [Validators.required]),
    //   lat: new FormControl(1.2558, [Validators.required]),
    //   lng: new FormControl(2.3666, [Validators.required]),
    // });
  }

  ngOnInit(): void {
    this.profile.getProfile().subscribe((res) => {
      this.myProfile = res.data
      this.lat = this.myProfile.lat
      this.lat = this.myProfile.lng
    })
  }

}
