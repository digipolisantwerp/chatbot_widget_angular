import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  of,
  throwError,
} from 'rxjs';

import { ChatbotModule } from '..';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotService } from './chatbot.service';
import {
  ChatbotMessage,
  ChatbotConversation,
} from './chatbot.types';

const mockData: ChatbotMessage = {
  message: 'Hello',
  type: 'text',
};

const mockError = {
  status: '401',
  statusText: 'Unauthorized',
  error: {
    error: 'Some error occurred',
    title: 'Please login first!',
  },
};

const mockActionReply = {
  action: 'someAction',
  message: 'success',
};

const wrongFormatMockError = {
  status: '401',
  statusText: 'Unauthorized',
  error: 'Error in the wrong format',
  title: 'Please login first!',
};

class MockChatbotService {
  public sendMessage(url: string, message: ChatbotMessage): Observable<ChatbotConversation> {
    return of([mockData, mockData]);
  }
}

describe('Chatbot widget', () => {

  let fixture, component, debugElement = null;
  let chatbotService: ChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ChatbotModule,
      ],
      providers: [
        {
          provide: ChatbotService,
          useClass: MockChatbotService,
        },
      ],
    });
    fixture = TestBed.createComponent(ChatbotComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    chatbotService = TestBed.get(ChatbotService);
  });

  afterEach(() => {
    if (fixture && fixture.nativeElement) {
      document.body.removeChild(fixture.nativeElement);
    }
    fixture = null;
  });

  it('should create an instance of ChatbotComponent', () => {
    expect(fixture).toBeTruthy();
  });

  it('should create an empty message on init', () => {
    component.session = 'TestSession';
    spyOn(component, 'addToChat');
    spyOn(component, 'sendMessage');
    component.ngOnInit();
    expect(component.message).toEqual({
      session_id: 'TestSession',
      message: 'STARTCOMMANDO',
      type: 'text',
      send: true,
    });
    expect(component.sendMessage).toHaveBeenCalled();
    expect(component.addToChat).not.toHaveBeenCalled();
  });

  describe('Private functions', () => {

    it('should add a message to the chat', () => {
      component.data = [mockData];
      component.addToChat(mockData);
      expect(component.data).toEqual([{
        message: 'Hello',
        type: 'text',
      }, {
        message: 'Hello',
        type: 'text',
      }]);
    });

    it('should add an error to the chat', () => {
      component.data = [mockData];
      component.pushError(mockError);
      expect(component.data).toEqual([{
        message: 'Hello',
        type: 'text',
      }, {
        message: 'Error 401 - Unauthorized: Please login first!',
        type: 'error',
      }]);
    });

    it('should add an error to the chat, even in the wrong format', () => {
      component.data = [mockData];
      component.pushError(wrongFormatMockError);
      expect(component.data).toEqual([{
        message: 'Hello',
        type: 'text',
      }, {
        message: 'Error 401 - Unauthorized: Please login first!',
        type: 'error',
      }]);
    });

    it('should add a fallback error to the chat, in case no error was specified', () => {
      component.data = [mockData];
      component.pushError();
      expect(component.data).toEqual([{
        message: 'Hello',
        type: 'text',
      }, {
        message: 'Error',
        type: 'error',
      }]);
    });
  });

  describe('General behaviour', () => {

    it('should send a message', () => {
      fixture.detectChanges();
      spyOn(component, 'addToChat');
      component.sendReply(mockData);
      expect(component.addToChat).toHaveBeenCalled();
    });

    it('should toggle its visibility', () => {
      component.toggleChatbot();
      fixture.detectChanges();
      expect(component.isOpen).toEqual(true);
      component.toggleChatbot();
      fixture.detectChanges();
      expect(component.isOpen).toEqual(false);
    });

    it('should send a reply when a button is clicked', () => {
      fixture.detectChanges();
      spyOn(component, 'addToChat');
      spyOn(chatbotService, 'sendMessage').and.callThrough();
      component.sendReply(mockData);
      expect(chatbotService.sendMessage).toHaveBeenCalled();
      expect(component.addToChat).toHaveBeenCalled();
    });

    it('should return an error', () => {
      fixture.detectChanges();
      spyOn(component, 'pushError');
      spyOn(chatbotService, 'sendMessage').and.returnValue(throwError(mockError));
      component.sendReply(mockData);
      expect(chatbotService.sendMessage).toHaveBeenCalled();
      expect(component.pushError).toHaveBeenCalled();
    });

    it('should do nothing when there is no message', () => {
      fixture.detectChanges();
      mockData.message = '';
      spyOn(chatbotService, 'sendMessage').and.callThrough();
      component.sendReply(mockData);
      expect(chatbotService.sendMessage).not.toHaveBeenCalled();
    });
  });

  describe('Actions', () => {

    it('should emit actionClicked event', (done) => {
      const testAction = {
        'text': 'Click my action',
        'action': 'dummyAction'
      };
      component.actionClicked.subscribe(g => {
        expect(g.action).toEqual('dummyAction');
        expect(component.disableChatbotByAction).toEqual('dummyAction');
        done();
      });
      component.performAction(testAction);
    });

    it('should send an invisible reply when an action is completed', () => {
      fixture.detectChanges();
      component.disableChatbotByAction = 'someAction';
      spyOn(component, 'completeAction').and.callThrough();
      spyOn(component, 'sendMessage');
      component.completeAction(mockActionReply);
      expect(component.completeAction).toHaveBeenCalled();
      expect(component.sendMessage).toHaveBeenCalled();
    });

    it('should do nothing when an action is completed, but a wrong action is passed', () => {
      component.disableChatbotByAction = 'someOtherAction';
      fixture.detectChanges();
      spyOn(component, 'sendMessage');
      component.completeAction(mockActionReply);
      expect(component.sendMessage).not.toHaveBeenCalled();
    });
  });
});
