import { PropListingsPage } from './app.po';

describe('prop-listings App', () => {
  let page: PropListingsPage;

  beforeEach(() => {
    page = new PropListingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
