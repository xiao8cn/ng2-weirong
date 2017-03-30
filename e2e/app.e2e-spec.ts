import { Ng2WeirongPage } from './app.po';

describe('ng2-weirong App', () => {
  let page: Ng2WeirongPage;

  beforeEach(() => {
    page = new Ng2WeirongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
