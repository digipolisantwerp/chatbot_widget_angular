import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ChatbotModule } from '..';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotService } from './chatbot.service';
import {
  ChatbotMessage,
  ChatbotConversation,
} from './chatbot.types';

const mockData = {
  message: 'Hello',
  type: 'text',
};

const mockResponse = {
  message: 'Hello from chatbot',
  type: 'text',
};

class MockChatbotService {
  public sendMessage(url: string, message: ChatbotMessage): Observable<ChatbotConversation> {
    return Observable.of([mockData]);
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
    component.ngOnInit();
    expect(component.message).toEqual({
      session_id: 'TestSession',
      message: '',
      type: 'text',
      send: true,
    });
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
      const mockError = {
        status: '401',
        statusText: 'Unauthorized',
        error: {
          title: 'Please login first!'
        }
      };
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
  });

  describe('General workings', () => {

    it('should send a message', () => {
      fixture.detectChanges();
      component.message = mockData;
      component.sendMessage();
    });

    it('should toggle its visibility', () => {
      component.toggleChatbot();
      fixture.detectChanges();
      expect(component.state.open).toEqual(true);
      component.toggleChatbot();
      fixture.detectChanges();
      expect(component.state.open).toEqual(false);
    });

    it('should send a reply when a button is clicked', () => {
      const mockEvent = {
        status: '401',
        statusText: 'Unauthorized',
        error: {
          title: 'Please login first!'
        }
      };
      fixture.detectChanges();
      spyOn(component, 'sendMessage').and.callThrough();
      component.sendReply(mockEvent);
      expect(component.sendMessage).toHaveBeenCalled();
    });
  });

});
