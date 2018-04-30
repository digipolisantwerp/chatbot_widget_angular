import { TestBed } from '@angular/core/testing';
import { ChatbotModule } from '..';
import { ChatbotComponent } from './chatbot.component';

describe('Chatbot widget', () => {

    let fixture = null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ChatbotModule]
        });
        fixture = TestBed.createComponent(ChatbotComponent);
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

});
