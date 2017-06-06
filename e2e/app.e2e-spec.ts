import { TimelinesPage } from './app.po';

describe('timelines App', () => {
  let page: TimelinesPage;

  beforeEach(() => {
    page = new TimelinesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
