require('../spec.helper');

context('Your Description of the test scenario', () => {
  // Browser helpers
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

  // Testing for game labels
  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('RPS');
  });

  it('renders the correct game title', async () => {
    let content = await browser.getContent("div[class='title']")
    expect(content).to.contain('Scissors!');
  });

  it('renders user player tab', async () => {
    let content = await browser.getContent("div[id='player1']")
    expect(content).to.contain('Player 1');
  });

  it('renders computer player tab', async () => {
    let content = await browser.getContent("div[id='player2']")
    expect(content).to.contain('Computer');
  });

  // Testing for user player buttons
  it('click on Rock button', async () => {
    await browser.clickOnButton("button[id='button-player-rock']")
    let content = await browser.getContent("div[class='inner-left']")
    expect(content).to.contain('You chose rock.');
  });

  it('click on Paper button', async () => {
    await browser.clickOnButton("button[id='button-player-paper']")
    let content = await browser.getContent("div[class='inner-left']")
    expect(content).to.contain('You chose paper.');
  });

  it('click on Scissors button', async () => {
    await browser.clickOnButton("button[id='button-player-scissors']")
    let content = await browser.getContent("div[class='inner-left']")
    expect(content).to.contain('You chose scissors.');
  });

  // Testing for game outcomes when player chooses Rock
  it('click on Rock, computer chooses...?', async () => {
    await browser.clickOnButton("button[id='button-player-rock']")
    let contentRight = await browser.getContent("div[class='inner-right']")
    let contentCenter = await browser.getContent("div[class='inner-center']")
    if (contentRight == 'The Computer chooses rock.') {
      expect(contentCenter).to.contain('Rock breaks rock... it is a tie.');
    } else if (contentRight == 'The Computer chooses paper.') {
      expect(contentCenter).to.contain('Paper wraps rock. You have lost.');
    } else if (contentRight == 'The Computer chooses scissors.') {
      expect(contentCenter).to.contain('Rock smashes scissors. You win!');
    }
  });
  
});