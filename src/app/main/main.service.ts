import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class MainService {
  privatePushs = [];
  publicPushs = [];
    token = localStorage.getItem('token');
    constructor(private http: HttpClient) {}
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
      return this.http.post('http://pusher.cpl.by/api/v1/comment', body).subscribe((data) => {this.publicPushs.push(data); console.log(this.publicPushs)});
    }
    getAnswer(token) {
      return this.http.get(`http://pusher.cpl.by/api/v1/comment/${token}/answer/?api_token=${this.token}`).subscribe((data) => {this.privatePushs = data; console.log(this.privatePushs)});
    }
    addAnswer(unserAddValue, id) {
      const body = {message: unserAddValue, api_token: this.token};
      return this.http.post(`http://pusher.cpl.by/api/v1/comment/${id}/answer/`, body).subscribe((data) => {this.privatePushs.push(data); console.log(this.privatePushs)});
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
}
