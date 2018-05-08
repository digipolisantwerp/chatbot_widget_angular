import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { MessageComponent } from './message.component';

@Component({
    selector: 'aui-test',
    template: '<aui-chatbot-message [data]="data"></aui-chatbot-message>',
})
export class TestComponent {
    @Input() data: any;
}

describe('MessageComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  describe('Rendering types', () => {

    it('should render a text message', () => {
      component.data = {
        'message': 'Hello',
        'type': 'text',
      };
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.m-message__text').innerText).toEqual('Hello');
    });

    it('should render a url', () => {
      component.data = {
        'message': 'Digipolis',
        'type': 'url',
        'url': 'https://www.digipolis.be',
      };
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.m-message__url a').getAttribute('href')).toEqual('https://www.digipolis.be');
      expect(fixture.nativeElement.querySelector('.m-message__url a').innerText).toEqual('Digipolis');
    });

    it('should render an image', () => {
      component.data = {
        'message': '',
        'type': 'image',
        'image': 'https://www.digipolis.be/image.jpg',
      };
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.m-message__image img').getAttribute('src')).toEqual(component.data.image);
    });

    it('should render buttons', () => {
      component.data = {
        'message': '',
        'type': 'radio',
        'elements': [
          {
            'text': 'Click me',
            'replyText': 'Click me',
          },
          {
            'text': 'No, me!',
            'replyText': 'No, me!',
          },
        ],
      };
      fixture.detectChanges();
      const allButtons = fixture.nativeElement.querySelector('.m-message__radio').querySelectorAll('button');
      expect(allButtons.length === component.data.elements.length).toBeTruthy();

      for (let i = 0; i < allButtons.length; i++) {
        expect(allButtons[i].innerText).toEqual(component.data.elements[i].text);
      }
    });

    it('should render an error', () => {
      component.data = {
        'message': 'Error',
        'type': 'error',
      };
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.m-message__error').innerText).toEqual('Error');
    });
  });
});
