import { ExcellaEventsPage } from './app.po';

describe('excella-events App', function() {
  let page: ExcellaEventsPage;

  beforeEach(() => {
    page = new ExcellaEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
