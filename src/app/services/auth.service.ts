import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    public _registerUrl = "http://127.0.0.1:8000/api/providers/register";
    public _loginUrl = "http://127.0.0.1:8000/api/auth/login";

  constructor(private http: HttpClient, private router:Router) { }

    loginUser(user:any){
        return this.http.post<any>(this._loginUrl, user)
    }

    registerUser(user:any) {
      return this.http.post<any>(this._registerUrl, user)
    }

    setToken(token:string) {
        return localStorage.setItem('token', token)
    }

    setUser(user:object) {
        return localStorage.setItem('user', JSON.stringify(user))
    }

    getUser() {
      return JSON.parse(localStorage.getItem('user') ?? '')
    }

    logoutUser() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.router.navigateByUrl('/login')
    }

    getToken() {
      return localStorage.getItem('token')
    }

    loggedIn() {
      return !!localStorage.getItem('token')
    }

}
