import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // paymentHandler: any = null;
  paymentForm!: FormGroup;
  submitted = false;
  order_id: any;
  card_number: any;
  card_exp_month: any;
  card_exp_year: any;
  card_cvc: any;


  constructor(
    private fb: FormBuilder,
    private payment: PaymentService,
    private actrouter: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.invokeStripe();
    this.paymentForm = this.fb.group({
      card_number: ['', Validators.required],
      card_exp_month: ['', Validators.required],
      card_exp_year: ['', Validators.required],
      card_cvc: ['', Validators.required],
    });

    // makePayment(amount: any) {
    //   const paymentHandler = (<any>window).StripeCheckout.configure({
    //     key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
    //     locale: 'auto',
    //     token: function (stripeToken: any) {
    //       console.log(stripeToken);
    //       // alert('Stripe token generated!');
    //       this.toastr.success('Stripe token generated!', ':)');
    //     },
    //   });
    //   paymentHandler.open({
    //     name: 'Positronx',
    //     description: '3 widgets',
    //     amount: amount * 100,
    //   });
    // }
    // invokeStripe() {
    //   if (!window.document.getElementById('stripe-script')) {
    //     const script = window.document.createElement('script');
    //     script.id = 'stripe-script';
    //     script.type = 'text/javascript';
    //     script.src = 'https://checkout.stripe.com/checkout.js';
    //     script.onload = () => {
    //       this.paymentHandler = (<any>window).StripeCheckout.configure({
    //         key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
    //         locale: 'auto',
    //         token: function (stripeToken: any) {
    //           console.log(stripeToken);
    //           // alert('Payment has been successfull!');
    //           this.toastr.success('Payment has been successfull!', ':)');
    //         },
    //       });
    //     };
    //     window.document.body.appendChild(script);
    //   }
    // }
  }
  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.valid) {
      let data = {
        'order_id': this.route.snapshot.params['orderId'],
        'card_number': this.paymentForm.controls['card_number'].value,
        'card_exp_month': this.paymentForm.controls['card_exp_month'].value,
        'card_exp_year': this.paymentForm.controls['card_exp_year'].value,
        'card_cvc': this.paymentForm.controls['card_cvc'].value,
      }
      this.payment.payOrder(data).subscribe(res => {
        this.toastr.success('Payment done successfully', ':)');
        this.router.navigateByUrl('/order')
      }, error => {
        this.toastr.error('Connection server error');
        console.log(error)
      })
    }
    else {
      this.toastr.error('There is an error, please check the data', ':(');
      console.log();

    }
  }
}
