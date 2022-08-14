import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  constructor(private contact: ContactService, private toastr: ToastrService,) {
    this.contactForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'subject': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required]),
    })
  }


  get contactFormControl() {
    return this.contactForm.controls;
  }


  ngOnInit(): void { }

  store() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.contact.store(this.contactForm.value).subscribe(() => {
        // alert('done')
        this.toastr.success('Message sent successfully', ':)');
        this.contactForm.reset()
        this.submitted = false;
      }, error => {
        this.toastr.error('Connection server error');
        // console.log(error)
      })
    } else {
      // alert('error')
      this.toastr.error('Please check the data and try again', ':(');
    }
  }
}
