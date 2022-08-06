import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent {
    loginForm: FormGroup;
    submitted = false;

    constructor
        (
            private router: Router,
            private auth: AuthService,
            private toastr: ToastrService
        ) {
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

    get loginFormControl() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.auth.loginUser(this._v()).subscribe(res => {
                console.log(res)
                this.auth.setToken(res.token)
                this.auth.setUser(res.data)
                // this.router.navigate('/');
                this.router.navigateByUrl('/')
                this.toastr.success('You are logged in successfully', ':)');
            })
        } else {
            this.toastr.error('Please check your email or password', ':(');
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