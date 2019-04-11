import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat-service/chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {
  currentRoom= "sala";
  message: string;
  messages= [];
  newMessage: string;
  author="-"
  idSala : string = "_20194884698";

  constructor(private chatService: ChatService, private auth: AuthService) { }

  ngOnInit() {
    this.author= this.auth.userData.displayName;
    this.inicioSesion()
    this.chatService.getMessages()
      .subscribe((data) => {
        this.messages.push({"Author": data.Author, "Text": data.Text});
      });
  }

  envio(){
    this.chatService.envioInfo({"idSala":this.idSala, "Author":this.author, "Text":this.newMessage})
    this.newMessage= ""
  }

  inicioSesion(){
    this.chatService.entrarSesion({"idSala":this.idSala})
  }

}
