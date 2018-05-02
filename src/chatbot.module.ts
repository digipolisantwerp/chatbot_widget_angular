import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ChatbotComponent,
    MessageComponent,
  ],
  declarations: [
    ChatbotComponent,
    MessageComponent,
  ],
  providers: [],
})
export class ChatbotModule { }
