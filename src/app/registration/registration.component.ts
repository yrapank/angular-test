import { Component, OnInit, Input } from '@angular/core';
import { NgModel} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../user';
import {Router} from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService],
})
export class RegistrationComponent implements OnInit {
  user: User = new User('', '', '', '');
  UserReg: any;
  constructor(private http: HttpClient, private router: Router, private regService: RegistrationService) {}
  ngOnInit() {
    this.UserReg = this.regService.UserReg;
  }
}
