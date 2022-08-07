import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerForm: FormGroup;
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

  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.registerForm.patchValue({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }
  // end google map


  // markerPositions: google.maps.LatLngLiteral[] = [];
  // addMarker(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  // }

  constructor
    (
      private router: Router,
      private auth: AuthService,
      private toastr: ToastrService
    ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmedPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      lat: new FormControl(1.2558, [Validators.required]),
      lng: new FormControl(2.3666, [Validators.required]),
    });
  }


  get registerFormControl() {
    return this.registerForm.controls;
  }



  onSubmit() {
    this.submitted = true;
  }

  register() {
    if (this.registerForm.valid) {
      // let register = {
      //   name: this.registerForm.controls['name'].value,
      //   email: this.registerForm.controls['email'].value,
      //   password: this.registerForm.controls['password'].value,
      //   name: this.registerForm.controls['name'].value,
      //   name: this.registerForm.controls['name'].value,
      // }
      this.auth.registerUser(this.registerForm.value).subscribe(res => {
        console.log(res)
        this.router.navigateByUrl('/login')
        this.toastr.success('New account has been registered successfully', ':)');
      })
    } else {
      this.toastr.error('Please check the information and try again', ':(');

    }
  }
  //   _v() {
  //     return this.loginForm.value;
  // }
}
