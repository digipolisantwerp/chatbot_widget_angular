import {
  Component,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import {
  ChatbotComponent
} from '../../src/chatbot/chatbot.component';

@Component({
  selector: 'aui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('myExampleChatbot', { static: true }) myExampleChatbot: ChatbotComponent;

  // start new random sessions every time
  public session1: string = Math.random().toString(36).substring(7);
  public showActionButton = false;
  public actionFired = '';
  public aria = {
    send: 'Een berichtje sturen…'
  };

  public performAction(event) {
    this.showActionButton = true;
    this.actionFired = event.action;
  }

  public completeAction() {
    const result = {
      action: this.actionFired,
      message: 'success',
    };
    this.showActionButton = false;
    this.myExampleChatbot.completeAction(result);
  }

}
