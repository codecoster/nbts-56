import { Nbts56Page } from './app.po';

describe('nbts-56 App', function() {
  let page: Nbts56Page;

  beforeEach(() => {
    page = new Nbts56Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
