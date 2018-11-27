import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: any[] = [];
  constructor() { }

   addMessage(message: any): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages =  [];
  }
}
