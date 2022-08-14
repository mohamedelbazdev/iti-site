import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/utils/validation';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  ChangePasswordForm: FormGroup;
  submitted = false;

  constructor( private toastr: ToastrService, private auth: AuthService,) {
    this.ChangePasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      repeatnewPassword: new FormControl('', [Validators.required]),
     },
     {
      validators: [Validation.match('newPassword', 'repeatnewPassword')]
    });

   }

   get ChangePasswordFormControl() {
    return this.ChangePasswordForm.controls;
  }


  // mustmatch(newPassword:any,repeatnewPassword:any) {
  //   return (formGroup:FormGroup) => {
  //     const passwordcontrol=formGroup.controls[newPassword];
  //     const conpasswordcontrol=formGroup.controls[repeatnewPassword];

  //     if(conpasswordcontrol.errors && !conpasswordcontrol.errors['mustmatch'] ){
  //       return;
  //     }
  //     if( passwordcontrol.value!==conpasswordcontrol.value){
  //       conpasswordcontrol.setErrors({ mustmatch:true});
  //     }
  //     else{
  //       conpasswordcontrol.setErrors(null);
  //     }

  //   };
  // }

  ngOnInit(): void {}

  onSave() {
    this.submitted = true;
    if (this.ChangePasswordForm.valid) {
      let data = {
        current_password: this.ChangePasswordForm.controls['password'].value,
        password: this.ChangePasswordForm.controls['newPassword'].value,
        password_confirmation: this.ChangePasswordForm.controls['repeatnewPassword'].value,
      }
      this.auth.changePassword(data).subscribe(res => {
        this.toastr.success(' Change Password successfully', ':)');
      }, (error) => {
        this.toastr.error(error.error.errors, ':(');
      })
      }
     else {
      // alert('error')
      this.toastr.error('Please check the password and try again', ':(');
    }
  }

}


