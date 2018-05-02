import { Component, Input} from '@angular/core';
import { NgModel} from '@angular/forms';
import {LoginService} from './login.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  user: User = new User('', '', '', '');
  UserLogin: any;
  GoToReg: any;
  constructor(public router: Router, public http: HttpClient, private loginService: LoginService) {
    this.UserLogin = this.loginService.UserLogin;
    this.GoToReg = this.loginService.GoToReg;
  }
NgOnInit() {
}
}
