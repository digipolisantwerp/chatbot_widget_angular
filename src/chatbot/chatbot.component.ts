import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ChatbotConversation } from './chatbot.types';
import { DUMMY_DATA } from './chatbot.dummy-data';

@Component({
  selector: 'aui-chatbot',
  styleUrls: ['./chatbot.component.scss'],
  templateUrl: './chatbot.component.html',
})
export class ChatbotComponent implements OnInit {
  @Input() title = '';
  @Input() pinned = false;
  @Input() placeholder = '';

  public data: ChatbotConversation;
  public componentName: 'ChatbotWidget';

  public ngOnInit(): void {
    this.data = DUMMY_DATA;
  }

  public sendReply(event: any): void {
    console.log('Button "' + event.message + '" was clicked!');
  }
}
