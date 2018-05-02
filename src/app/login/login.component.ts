import { Component, Input} from '@angular/core';
import { NgModel} from '@angular/forms';
import {AppService} from '../app.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User('', '', '', '');
  UserLogin: any;
  GoToReg: any;
  constructor(public router: Router, public http: HttpClient, private loginService: AppService) {
    this.UserLogin = this.loginService.UserLogin;
    this.GoToReg = this.loginService.GoToReg;
  }
NgOnInit() {
}
}
