import { EventManagerFrontPage } from './app.po';

describe('event-manager-front App', () => {
  let page: EventManagerFrontPage;

  beforeEach(() => {
    page = new EventManagerFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
