import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from './user';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
    privatePushs = [];
    publicPushs = [];
      token = localStorage.getItem('token');
      user: User = new User('', '', '', '');
      unser: object;
      test: any;

constructor(private http: HttpClient, private router: Router) { }
getMain(token) {
    return this.http.get(`http://pusher.cpl.by/api/v1/comment/?api_token=${this.token}`);
   }
deleteComment(token) {
return this.http.delete(`http://pusher.cpl.by/api/v1/comment/${token}/?api_token=${this.token}`).subscribe((data) => {
const test = token - this.publicPushs[0].id;
if (test > 0) {
  let n = 0;
 while (this.publicPushs[n].id !== token) {n++; }
 console.log(n);
 this.publicPushs.splice(n, 1); } else if (test < 0) {
   let n = -test;
   while (this.publicPushs[n].id !== token) {n--; }
   console.log(n); } else {
     this.publicPushs.splice(0, 1);
   }
});
}
addComment(titleUser, userCom) {
  const body = {title: titleUser.viewModel, message: userCom.viewModel, api_token: this.token};
  return this.http.post('http://pusher.cpl.by/api/v1/comment', body).subscribe((data) => {
      this.publicPushs.push(data); console.log(this.publicPushs); });
}
getAnswer(token) {
  return this.http.get(`http://pusher.cpl.by/api/v1/comment/${token}/answer/?api_token=${this.token}`).subscribe((data: any[]) => {
      this.privatePushs = data; console.log(this.privatePushs); });
}
addAnswer(unserAddValue, id) {
  const body = {message: unserAddValue, api_token: this.token};
  return this.http.post(`http://pusher.cpl.by/api/v1/comment/${id}/answer/`, body).subscribe((data) => {
      this.privatePushs.push(data); console.log(this.privatePushs); });
}
deleteAnswer(item, ans) {
  return this.http.delete(`http://pusher.cpl.by/api/v1/comment/${item}/answer/${ans}/?api_token=${this.token}`).subscribe((data) =>  {
    const test = ans - this.privatePushs[0].id;
    if (test > 0) {
      let n = 0;
     while (this.privatePushs[n].id !== ans) {n++; }
     console.log(n);
     this.privatePushs.splice(n, 1); } else if (test < 0) {
       let n = -test;
       while (this.privatePushs[n].id !== ans) {n--; }
       console.log(n); } else {
         this.privatePushs.splice(0, 1);
       }
    });
}
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