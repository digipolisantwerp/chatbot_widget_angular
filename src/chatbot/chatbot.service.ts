import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import {
  ChatbotMessage,
  ChatbotConversation,
} from './chatbot.types';

@Injectable()
export class ChatbotService {

  constructor(
    private http: HttpClient,
  ) {}

  public sendMessage(url: string, message: ChatbotMessage): Observable<ChatbotConversation> {

    return this.http.post(url, message)
      .map(result => result['data'])
      .catch((error: any) => Observable.throw(error));
  }

}
