import { AgendaContactosPage } from './app.po';

describe('agenda-contactos App', function() {
  let page: AgendaContactosPage;

  beforeEach(() => {
    page = new AgendaContactosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
