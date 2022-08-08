import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

    })
   }

   get ChangePasswordFormControl() {
    return this.ChangePasswordForm.controls;
  }

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


