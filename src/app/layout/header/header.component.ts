import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
    username: string = 'USer';
    loginForm: FormGroup;

    constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute,) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    ngOnInit(): void {
        this.auth.setUser(this.route.snapshot.params['id']).subscribe(res => {
            this.username = res.data
        })
    }

    logout() {
        this.auth.logoutUser()
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
function user(user: any, Object: ObjectConstructor) {
    throw new Error('Function not implemented.');
}

