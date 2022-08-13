import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/utils/validation';
import { ProfileService } from "../../services/profile.service";


@Component({
  selector: 'app-edit-provider-profile',
  templateUrl: './edit-provider-profile.component.html',
  styleUrls: ['./edit-provider-profile.component.css']
})
export class EditProviderProfileComponent implements OnInit {

  submitted = false;
  profileForm: FormGroup;
  myProfile: any;

  // start google map
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };

  zoom = 4;

  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  dragged(event: any) {
    if (event.latLng != null) {
      this.profileForm.patchValue({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }


  constructor(private profile: ProfileService, private toastr: ToastrService) {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // mobile: new FormControl('', [Validators.required]),
      // password: new FormControl('', [Validators.required]),
      // confirmedPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),

      lat: new FormControl('', [Validators.required]),
      lng: new FormControl('', [Validators.required]),
    }
    );
  }


  get profileFormControl() {
    return this.profileForm.controls;
  }


  ngOnInit(): void {
    this.profile.getProfile().subscribe((res) => {
      this.profileForm.patchValue({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        lat: res.data.lat,
        lng: res.data.lng,
      });
      this.markerPosition.lat = res.data.lat
      this.markerPosition.lng = res.data.lng
      this.center.lat = res.data.lat
      this.center.lng = res.data.lng
      this.myProfile = res.data
      // this.lat = this.myProfile.lat
      // this.lat = this.myProfile.lng
      console.log(this.profileForm);

    })
  }
  onSave() {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.toastr.success(' Edit provider profile successfully', ':)');

    }
    else {
      // alert('error')
      this.toastr.error('Please check the data and try again', ':(');
    }
  }


  updateProfile() {
    this.submitted = true;
    if (this.profileForm.valid) {
      // this.profile.updateProfile(this.profileForm.value).subscribe(() => {
      // alert('done')
      this.toastr.success('Edit done successfully', ':)');
    }
    else {
      this.toastr.error('There is an error, please check the data', ':(');
    }
  }


}
