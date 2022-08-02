import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  loginForm: FormGroup;


  constructor
  (
      private router: Router,
      private auth: AuthService
  )
  {
      this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required])
      });

      // this.registerForm = new FormGroup({
      //     name: new FormControl('', [Validators.required]),
      //     email: new FormControl('', [Validators.required, Validators.email]),
      //     password: new FormControl('', [Validators.required]),
      //     confirmedPassword: new FormControl('', [Validators.required]),
      //     lat: new FormControl(1.2558, [Validators.required]),
      //     lng: new FormControl(2.3666, [Validators.required]),
      // });
  }

  onSubmit() {
      if(this.loginForm.valid) {
          this.auth.loginUser(this._v()).subscribe(res => {
              console.log(res)
              this.auth.setToken(res.token)
              // this.router.navigate('/');
              this.router.navigateByUrl('/')
          })
      }
  }

  // register(){
  //     if(this.registerForm.valid) {
  //         this.auth.registerUser(this.registerForm.value).subscribe(res => {
  //             console.log(res)
  //             this.router.navigateByUrl('/')
  //         })
  //     }
  // }

  _v() {
      return this.loginForm.value;
  }
}
