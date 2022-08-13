import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { parseJson } from "@angular/cli/src/utilities/json-file";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public _registerUrl = `${environment.APIBaseURL}/providers/register`;
  public _loginUrl = `${environment.APIBaseURL}/auth/login`;

  public userCountUrl = `${environment.APIBaseURL}/users/count`;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService,) { }


  getUSerCount() {
    return this.http.get<any>(this.userCountUrl).subscribe(res => {
      localStorage.setItem('count', JSON.stringify(res.data))
    })
  }


  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  setToken(token: string) {
    return localStorage.setItem('token', token)
  }

  setUser(user: object) {
    return localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') ?? 'dfsfsdf')
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigateByUrl('/login')
    this.toastr.success('You are logged out successfully', ':)');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  isUser() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role_id == 3
  }

}

