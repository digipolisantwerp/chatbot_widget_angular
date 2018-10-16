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
      .map(result => {
        /**
         * Quick replies used to be part of the result['data'] array (chatbot engine v1)
         * The following code makes sure our widget gets the data (chatbot engine v2) in the same format as before
         */
        if (result['quickReplies']) {
          result['data'].push({
            type: 'radio',
            message: '',
            elements: result['quickReplies'].map((item) => {
              return {
                text: item.text,
                replyText: item.action
              };
            }),
          });
        }
        return result['data'];
      })
      .catch((error: any) => Observable.throw(error));
  }

}
