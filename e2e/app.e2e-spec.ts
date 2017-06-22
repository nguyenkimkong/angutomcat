import { AngutomcatPage } from './app.po';

describe('angutomcat App', () => {
  let page: AngutomcatPage;

  beforeEach(() => {
    page = new AngutomcatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
