import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  throwError,
} from 'rxjs';

import {
  map,
  catchError,
  delay,
} from 'rxjs/operators';

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
      .pipe(
        map(result => {
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
        }),
        catchError((error: any) => Observable.throw(error))
      );
  }

}
