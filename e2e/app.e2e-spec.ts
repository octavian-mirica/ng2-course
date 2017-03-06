import { Ng2CoursePage } from './app.po';

describe('ng2-course App', () => {
  let page: Ng2CoursePage;

  beforeEach(() => {
    page = new Ng2CoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
