require('../spec.helper');

context('Your Description of the test scenario', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('RPS');
  });

  it('renders the correct game title', async () => {
    let content = await browser.getContent("div[class='title']")
    expect(content).to.contain('Scissors!');
  });
});