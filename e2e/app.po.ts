import { browser, by, element } from 'protractor';

export class TimelinesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kw-root h1')).getText();
  }
}
