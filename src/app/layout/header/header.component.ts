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
    userName: any = 'Guest'
    favCount: any = 0
    orderCount: any = "0"

    constructor(private auth: AuthService, private router: Router) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }
    ngOnInit(): void {
        this.userName = this.auth.getUser().name
        this.favCount = this.auth.getUser().favourite_count
        this.orderCount = this.auth.getUser().order_count
    }


    logout() {
        this.auth.logoutUser()
        // this.userName = "Guest"
        // this.favCount = 0
        // this.orderCount = "0"
    }

    isLogin(): boolean {
        return this.auth.loggedIn()
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
