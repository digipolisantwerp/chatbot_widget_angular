import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  ChatbotMessage,
  ChatbotMessageButton,
} from '../../chatbot/chatbot.types';

@Component({
  selector: 'message',
  styleUrls:  ['./message.component.scss'],
  templateUrl: './message.component.html',
})

export class MessageComponent {
  @Input() data: ChatbotMessage;
  @Output() replyClicked = new EventEmitter<any>();

  public sendReply(message: ChatbotMessageButton): void {
    this.replyClicked.emit({ message });
  }
}
