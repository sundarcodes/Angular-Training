import { DOITPage } from './app.po';

describe('doit App', () => {
  let page: DOITPage;

  beforeEach(() => {
    page = new DOITPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
