import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../user';
import {Router} from '@angular/router';

@Injectable()
export class RegistrationService {

constructor(private http: HttpClient, private router: Router) { }
UserReg(email, pass, name, avatar) {
    const httpHeader = new HttpHeaders().set('acept', 'application/json');
    const body = {email: email.viewModel, password: pass.viewModel, name: name.viewModel, avatar: avatar.viewModel};
    const option = {body: body, headers: httpHeader };
    const router = this.router;
    return this.http.post('http://pusher.cpl.by/api/v1/auth/register', body).subscribe(function(data) {
      this.unser = data;
      console.log(this.unser);
      localStorage.setItem('token', this.unser.api_token);
      localStorage.setItem('avatar', this.unser.avatar);
      localStorage.setItem('created_at', this.unser.created_at);
      localStorage.setItem('email', this.unser.email);
      localStorage.setItem('id', this.unser.id);
      localStorage.setItem('name', this.unser.name);
      localStorage.setItem('updated_at', this.unser.updated_at);
        router.navigate(['']);
       });
  }
}
