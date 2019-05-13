import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

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

const mockResponse1 = {
  data: [{
    message: 'Hello from chatbot',
    type: 'text',
  }],
};

const mockResponse2 = {
  data: [{
    message: 'Hello again from chatbot',
    type: 'text',
  }],
  quickReplies: [
    {
      text: 'some text',
      action: 'some action',
    }
  ]
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
      expect(result).toEqual(mockResponse1['data']);
      expect(result.length).toEqual(1);
      done();
    });
    httpMock.expectOne('/mockUrl').flush(mockResponse1);
    httpMock.verify();
  });

  it('should reformat the data when quick replies are present', (done) => {
    chatbotService.sendMessage('/mockUrl', mockData).subscribe((result: any) => {
      expect(result).toEqual(mockResponse2['data']);
      expect(result.length).toEqual(2);
      expect(result[1]['type']).toEqual('quickReply');
      expect(result[1]['elements']['replyText']).toEqual(mockResponse2['quickReplies']['some action']);
      done();
    });
    httpMock.expectOne('/mockUrl').flush(mockResponse2);
    httpMock.verify();
  });

  it('should throw error', (done) => {
    chatbotService.sendMessage('/mockErrorUrl', mockData).subscribe(
      (result: any) => {
      },
      (error: any) => {
        expect(of(error)).toBeTruthy();
        expect(error).toBeTruthy();
        done();
      },
    );
    httpMock.expectOne('/mockErrorUrl').error(new ErrorEvent('Dummy error'));
    httpMock.verify();
  });
});
