import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    loginForm: FormGroup;
    myUserCount: any = [{ "name": "user1", "order_count": 0, "favourite_count": 0 }]

    constructor(private auth: AuthService, private router: Router) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }
    ngOnInit(): void {
        this.auth.getUSerCount().subscribe((res) => {
            this.myUserCount = res.data
            console.log(this.myUserCount);

        });
    }

    logout() {
        this.auth.logoutUser()
    }

    isLogin(): boolean {
        return this.auth.loggedIn()
    }


    isuser(): boolean {
      return this.auth.isUser()
  }



    onSubmit() {
        if (this.loginForm.valid) {
            this.auth.loginUser(this.loginForm.value).subscribe((res: any) => {
                this.auth.setToken(res.token)
                this.router.navigateByUrl('/')
            })
        }
    }

}
