import { DoItPage } from './app.po';

describe('do-it App', () => {
  let page: DoItPage;

  beforeEach(() => {
    page = new DoItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
