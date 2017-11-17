import { BookshopNgPage } from './app.po';

describe('bookshop-ng App', function() {
  let page: BookshopNgPage;

  beforeEach(() => {
    page = new BookshopNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
