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

@Component({
  selector: 'aui-chatbot',
  styleUrls: ['./chatbot.component.scss'],
  templateUrl: './chatbot.component.html',
})
export class ChatbotComponent implements OnInit {
  @ViewChild('messageInput') messageInput: ElementRef;

  // BFF URL
  @Input() url: string;

  // Required session ID to easily retrieve the chat history if necessary
  @Input() session: string;

  // Title above the chat window
  @Input() title = '';

  // Whether the chatbot is inline or pinned to the bottom of the application
  @Input() pinned = false;

  // Placeholder string in the chat input field
  @Input() placeholder = '';

  // Delay between multiple messages received from the chatbot engine
  @Input() delay = 400;

  // Height of the chatbot in pixels
  @Input() height = 400;

  public data: ChatbotConversation = [];
  public message: ChatbotMessage;
  public isLoading = false;
  public isOpen = false;

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
    this.isLoading = true;

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
          this.isLoading = false;
        },
        error => {
          this.pushError(error);
          this.isLoading = false;
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
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
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

  private pushError(error): void {
    const errorMessage: ChatbotMessage = {
      message: 'Error ' + error.status + ' - ' + error.statusText + ': ' + error.error.title,
      type: 'error',
    };
    this.addToChat(errorMessage);
  }
}
