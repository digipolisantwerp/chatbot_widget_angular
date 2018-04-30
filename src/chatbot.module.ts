import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ChatbotComponent,
  ],
  declarations: [
    ChatbotComponent,
  ],
  providers: [],
})
export class ChatbotModule { }
