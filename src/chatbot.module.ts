import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotService } from './chatbot/chatbot.service';
import { Components } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    ChatbotComponent,
    ...Components,
  ],
  declarations: [
    ChatbotComponent,
    ...Components,
  ],
  providers: [
    ChatbotService,
  ],
})
export class ChatbotModule { }
