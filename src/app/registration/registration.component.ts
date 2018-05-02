import { Component, OnInit, Input } from '@angular/core';
import { NgModel} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../user';
import {Router} from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = new User('', '', '', '');
  UserReg: any;
  constructor(private http: HttpClient, private router: Router, private regService: AppService) {}
  ngOnInit() {
    this.UserReg = this.regService.UserReg;
  }
}
