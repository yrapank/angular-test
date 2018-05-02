import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, Input} from '@angular/core';
import { NgModel} from '@angular/forms';
import { User} from '../user';
import { Router } from '@angular/router';



@Injectable()
 export class LoginService {
    user: User = new User('', '', '', '');
    unser: object;
    test: any;
    constructor(public router: Router, public http: HttpClient) {}
    UserLogin(email, pass) {
        const httpHeader = new HttpHeaders().set('acept', 'application/json');
        const body = {email: email.viewModel, password: pass.viewModel};
        const option = {body: body, headers: httpHeader };
        const router: Router = this.router;
        return this.http.post('http://pusher.cpl.by/api/v1/auth/login', body).subscribe(function(data) {
           this.unser = data;
           console.log(this.unser);
          localStorage.setItem('token', this.unser.api_token);
          localStorage.setItem('avatar', this.unser.avatar);
          localStorage.setItem('created_at', this.unser.created_at);
          localStorage.setItem('email', this.unser.email);
          localStorage.setItem('id', this.unser.id);
          localStorage.setItem('name', this.unser.name);
          localStorage.setItem('updated_at', this.unser.updated_at);
          localStorage.setItem('is_admin', this.unser.is_admin);
          router.navigate(['main']);
           });
        }
        GoToReg() {
          this.router.navigate(['registration']);
        }
}

