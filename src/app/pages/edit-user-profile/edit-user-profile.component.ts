import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})

export class EditUserProfileComponent implements OnInit {
  profileForm: FormGroup;
  myProfile: any;
  submitted = false;

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

  move(event: google.maps.MapMouseEvent) {
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
    });
  }



  get profileFormControl() {
    return this.profileForm.controls;
  }

  ngOnInit(): void {
    this.profile.getProfile().subscribe((res) => {
      this.profileForm.patchValue({
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
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
    })
  }
  onSave() {
    this.submitted = true;
    if (this.profileForm.valid) {
        this.toastr.success(' Edit Provider Profile successfully', ':)');

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
