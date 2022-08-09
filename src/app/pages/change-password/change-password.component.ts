import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  ChangePasswordForm: FormGroup;
  submitted = false;

  constructor( private toastr: ToastrService) {
    this.ChangePasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      repeatnewPassword: new FormControl('', [Validators.required]),

     },
     {
      validators: [Validation.match('0newPassword', 'repeatnewPassword')]
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

  ngOnInit(): void {
  }

  onSave() {
    this.submitted = true;
    if (this.ChangePasswordForm.valid) {
        this.toastr.success(' Change Password successfully', ':)');

      }
     else {
      // alert('error')
      this.toastr.error('Please check the password and try again', ':(');
    }
  }

}


