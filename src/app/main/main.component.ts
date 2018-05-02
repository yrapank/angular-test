import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient} from '@angular/common/http';
import { NgModel} from '@angular/forms';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ MainService]
})
export class MainComponent implements OnInit {
  privatePushs = [];
  publicPushs = [];
  token = localStorage.getItem('token');
  userName = localStorage.getItem('name');
  deleteComment: any;
  id = localStorage.getItem('id');
  admin = localStorage.getItem('is_admin');
  titleComment: string;
  addComment: any;
  getAnswer: any;
  unserAddValue: string;
  addAnswer: any;
  deleteAnswer: any;
 constructor(private mainService: MainService, private http: HttpClient, private socket: SocketService) {
  this.socket.privatePush.subscribe(res => {
    this.privatePushs.unshift();
  });
  this.socket.publicPush.subscribe(res => {
    this.publicPushs.unshift();
  });
  }
  ngOnInit() {
    this.mainService.getMain(this.token).subscribe((data: object) => {console.log(this.publicPushs)});
    this.deleteComment = this.mainService.deleteComment;
    this.addComment = this.mainService.addComment;
    this.getAnswer = this.mainService.getAnswer;
    this.addAnswer = this.mainService.addAnswer;
    this.deleteAnswer = this.mainService.deleteAnswer;
  }

}
