import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { parseJson } from "@angular/cli/src/utilities/json-file";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public _registerUrl = "http://127.0.0.1:8000/api/providers/register";
  public _loginUrl = "http://127.0.0.1:8000/api/auth/login";

  public userCountUrl = "http://127.0.0.1:8000/api/users/count";

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService,) { }


  getUSerCount() {
    return this.http.get<any>(this.userCountUrl)
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
    let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.role_id == 3
  }
  // isAuthenticated(): boolean {
  //   let data = localStorage.getItem('currentUser');
  //   this.token = JSON.parse(data) && JSON.parse(data).token;
  //   this.userRole = JSON.parse(data) && JSON.parse(data).role;
  //   return !!this.token;
  }

