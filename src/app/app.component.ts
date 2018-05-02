import { Component, Input} from '@angular/core';
import { SocketService } from './services/socket.service';
@Component({
    selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  privatePushs = [];
  publicPushs = [];
  constructor(private socket: SocketService) {
    this.socket.privatePush.subscribe(res => {
      this.privatePushs.unshift({ date: new Date(), data: res });
    });
    this.socket.publicPush.subscribe(res => {
      this.publicPushs.unshift({ date: new Date(), data: res });
    });
  }
 }