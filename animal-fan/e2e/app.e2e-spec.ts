import { AnimalFanPage } from './app.po';

describe('animal-fan App', () => {
  let page: AnimalFanPage;

  beforeEach(() => {
    page = new AnimalFanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
