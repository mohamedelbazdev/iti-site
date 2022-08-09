import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-edit-provider-profile',
  templateUrl: './edit-provider-profile.component.html',
  styleUrls: ['./edit-provider-profile.component.css']
})
export class EditProviderProfileComponent implements OnInit {

  editProviderForm: FormGroup;
  submitted = false;

  constructor(private toastr: ToastrService) {
    this.editProviderForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      newpassword: new FormControl('', [Validators.required]),
      confirmednewPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      // lat: new FormControl(1.2558, [Validators.required]),
      // lng: new FormControl(2.3666, [Validators.required]),
    },
    {
      validators: [Validation.match('newpassword', 'confirmedPassword')]
    }
    );
  }


  get editProviderFormControl() {
    return this.editProviderForm.controls;
  }


  ngOnInit(): void {
  }

  onSave() {
    this.submitted = true;
    if (this.editProviderForm.valid) {
        this.toastr.success(' Edit Provider Profile successfully', ':)');

      }
     else {
      // alert('error')
      this.toastr.error('Please check the data and try again', ':(');
    }
  }


}
