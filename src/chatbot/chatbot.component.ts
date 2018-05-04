import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChatbotService } from './chatbot.service';
import {
  ChatbotMessage,
  ChatbotConversation,
} from './chatbot.types';
import { DUMMY_DATA } from './chatbot.dummy-data';

@Component({
  selector: 'aui-chatbot',
  styleUrls: ['./chatbot.component.scss'],
  templateUrl: './chatbot.component.html',
})
export class ChatbotComponent implements OnInit {
  @ViewChild('messageInput') messageInput: ElementRef;

  @Input() url: string;
  @Input() session: string;
  @Input() title = '';
  @Input() pinned = false;
  @Input() placeholder = '';
  @Input() delay = 400;
  @Input() height = 400;

  public data: ChatbotConversation = [];
  public message: ChatbotMessage;

  public loading = false;
  public open = false;

  constructor(
    private chatbotService: ChatbotService,
  ) {}

  public ngOnInit(): void {
    this.message = {
      session_id: this.session,
      message: '',
      type: 'text',
      send: true,
    };
    // In a later stage, you may want to retrieve the conversation history here.
  }

  public sendMessage(): void {
    if (!this.message.message) { return; }

    // Start loader
    this.loading = true;

    // Add to data
    this.addToChat(this.message);


    // Send new data
    this.chatbotService.sendMessage(this.url, this.message)
      .subscribe(
        (result: ChatbotConversation) => {
          result.forEach((item: ChatbotMessage, index) => {
            setTimeout(() => {
              this.addToChat(item);
            }, index * this.delay);
          });
          this.loading = false;
        },
        error => {
          this.pushError(error);
          this.loading = false;
        }
      );

    // Clean
    this.message.message = '';

    // Focus
    this.messageInput.nativeElement.focus();
  }

  public sendReply(event: any): void {
    this.message.message = event.message;
    this.sendMessage();
  }

  public toggleChatbot(): void {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => {
        this.messageInput.nativeElement.focus();
      }, 0);
    }
  }

  private addToChat(message): void {
    const newData = [
      ...this.data,
      Object.assign({}, message),
    ];
    this.data = newData;
  }

  private pushError(error) {
    const errorMessage: ChatbotMessage = {
      message: 'Error ' + error.status + ' - ' + error.statusText + ': ' + error.error.title,
      type: 'error',
    };
    this.addToChat(errorMessage);
  }
}
