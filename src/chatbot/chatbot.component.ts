import { Component, Input } from '@angular/core';

@Component({
  selector: 'aui-chatbot',
  styleUrls: ['./chatbot.component.scss'],
  templateUrl: './chatbot.component.html'
})
export class ChatbotComponent {
  @Input() title = "";
  @Input() pinned = false;
  @Input() placeholder = "";

  public componentName: 'ChatbotWidget';
}
