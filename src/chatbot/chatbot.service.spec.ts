import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
    title: 'Please login first!'
  }
};

const mockResponse = {
  data: [{
    message: 'Hello from chatbot',
    type: 'text',
  }],
};

describe('ChatbotService', () => {

  let chatbotService: ChatbotService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ChatbotService
      ]
    });
    chatbotService = TestBed.get(ChatbotService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get response via http request', (done) => {
    chatbotService.sendMessage('/mockUrl', mockData).subscribe((result: any) => {
      expect(result).toEqual(mockResponse['data']);
      done();
    });
    httpMock.expectOne('/mockUrl').flush(mockResponse);
    httpMock.verify();
  });

  it('should throw error', (done) => {
    chatbotService.sendMessage('/mockErrorUrl', mockData).subscribe(
      (result: any) => {
      },
      (error: any) => {
        expect(Observable.of(error)).toBeTruthy();
        expect(error).toBeTruthy();
        done();
      },
    );
    httpMock.expectOne('/mockErrorUrl').error(new ErrorEvent('Dummy error'));
    httpMock.verify();
  });
});
