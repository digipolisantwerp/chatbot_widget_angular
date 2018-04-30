import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Smart Widget Starter Kit>"', () => {
    expect(page.getTitleText()).toContain('Smart Widget Starter Kit');
  });
});
