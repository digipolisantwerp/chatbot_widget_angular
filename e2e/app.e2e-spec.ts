import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Chatbot Smart Widget Playground"', () => {
    expect(page.getTitleText()).toContain('Chatbot Smart Widget Playground');
  });
});
