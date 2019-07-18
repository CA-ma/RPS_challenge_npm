require('../spec.helper')

describe('Does the getOutcome function return proper game outcomes', () => {
  let playerChoices = ['rock', 'paper', 'scissors']
  let computerChoices = ['rock', 'paper', 'scissors']

  const getOutcome = (playerChoice, computerChoice) => {
    if (playerChoice == 'rock' && computerChoice == 'rock') {
      return 'Rock breaks rock... it is a tie.'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
      return 'Paper wraps rock.  You have lost.'
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
      return 'Rock smashes scissors.  You win!'
    }
  }

  it('Does rock tie rock?', () => {
    const outcome = getOutcome(playerChoices[0], computerChoices[0])
    expect(outcome).to.eql('Rock breaks rock... it is a tie.')
  })

  it('Does rock lose to paper?', () => {
    const outcome = getOutcome(playerChoices[0], computerChoices[1])
    expect(outcome).to.eql('Paper wraps rock.  You have lost.')
  })

  it('Does rock beat scissors?', () => {
    const outcome = getOutcome(playerChoices[0], computerChoices[2])
    expect(outcome).to.eql('Rock smashes scissors.  You win!')
  })

})

describe('Does the getComputerChoice function return the appropriate responses?', () => {

  const getComputerChoice = (arg) => {
    let computerChoices = ['rock', 'paper', 'scissors']
    let index = arg
    let computerChoice = computerChoices[index]
    return computerChoice
  }

  it('returns rock', () => {
    const computerChoice = getComputerChoice(0)
    expect(computerChoice).to.eql('rock')
  })

  it('returns paper', () => {
    const computerChoice = getComputerChoice(1)
    expect(computerChoice).to.eql('paper')
  })

  it('returns scissors', () => {
    const computerChoice = getComputerChoice(2)
    expect(computerChoice).to.eql('scissors')
  })

})

describe('Does the getComputerChoice function return the appropriate responses in a randomized fashion?', () => {

  const getComputerChoice = () => {
    let computerChoices = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * 3)
    let computerChoice = computerChoices[index]
    return computerChoice
  }

  const stats = (arg) => {
    let count = 0
    let computerChoice = arg
    for (let i = 0; i < 300; i++) {
      if (getComputerChoice() == computerChoice) {
        count = count + 1
      }
    }
    return count
  }

  it('returns rock approx 1/3 of the time (greater than 80 of 300)?', () => {
    let computerChoice = 'rock'
    let count = stats(computerChoice)
    expect(count).to.be.gt(80)
  })

  it('returns rock approx 1/3 of the time (less than 120 of 300)?', () => {
    let computerChoice = 'rock'
    let count = stats(computerChoice)
    expect(count).to.be.lt(120)
  })

  it('returns paper approx 1/3 of the time (greater than 80 of 300)?', () => {
    let computerChoice = 'paper'
    let count = stats(computerChoice)
    expect(count).to.be.gt(80)
  })

  it('returns paper approx 1/3 of the time (less than 120 of 300)?', () => {
    let computerChoice = 'paper'
    let count = stats(computerChoice)
    expect(count).to.be.lt(120)
  })

  it('returns scissors approx 1/3 of the time (greater than 80 of 300)?', () => {
    let computerChoice = 'scissors'
    let count = stats(computerChoice)
    expect(count).to.be.gt(80)
  })

  it('returns scissors approx 1/3 of the time (less than 120 of 300)?', () => {
    let computerChoice = 'scissors'
    let count = stats(computerChoice)
    expect(count).to.be.lt(120)
  })

})