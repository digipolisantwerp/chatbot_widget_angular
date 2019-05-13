import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  ChatbotMessage,
  ChatbotMessageElement,
} from '../../chatbot/chatbot.types';

@Component({
  selector: 'aui-chatbot-message',
  styleUrls:  ['./message.component.scss'],
  templateUrl: './message.component.html',
})

export class MessageComponent {
  @Input() data: ChatbotMessage;
  @Output() replyClicked = new EventEmitter<any>();
  @Output() actionClicked = new EventEmitter<any>();

  public sendReply(message: string): void {
    this.replyClicked.emit({ message });
    this.data.hide = true;
  }

  public performAction(message: ChatbotMessageElement): void {
    this.actionClicked.emit(message);
    this.data.disable = true;
  }
}
