import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public getMessages = () => {
    return Observable.create(observer => {
      this.socket.on('sendMessage', data => {
        console.log(data);
        observer.next(data);
      });
    });
  }

  public envioInfo = data => {
    this.socket.emit('sendMessage', data);
  }
}
