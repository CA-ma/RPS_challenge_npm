document.getElementById("button-player-rock").addEventListener("click", playerClickRock)
document.getElementById("button-player-paper").addEventListener("click", playerClickPaper)
document.getElementById("button-player-scissors").addEventListener("click", playerClickScissors)
let innerLeft = document.querySelector('.inner-left')
let innerCenter = document.querySelector('.inner-center')
let innerRight = document.querySelector('.inner-right')

function playerClickRock() {
    let playerChoice = 'rock'
    getComputerChoice(playerChoice)
}

function playerClickPaper() {
    let playerChoice = 'paper'
    getComputerChoice(playerChoice)
}

function playerClickScissors() {
    let playerChoice = 'scissors'
    getComputerChoice(playerChoice)
}

const getComputerChoice = (playerChoice) => {
    innerLeft.innerHTML = `<h3>You chose ${playerChoice}.</h3>`

    let computerChoices = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * 3)
    let computerChoice = computerChoices[index]
    innerRight.innerHTML = `<h3>The Computer chooses ${computerChoice}.</h3>`

    let outcome = getOutcome(playerChoice, computerChoice)
    innerCenter.innerHTML = `<h3>${outcome}</h3>`
}

const getOutcome = (playerChoice, computerChoice) => {
    if (playerChoice == 'rock' && computerChoice == 'rock') {
        return 'Rock breaks rock... it is a tie.'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return 'Paper wraps rock.  You have lost.'
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return 'Rock smashes scissors.  You win!'
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'Paper wraps rock.  You win!'
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        return 'Paper slaps paper... it is a tie.'
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 'Scissors slice paper.  You have lost.'
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 'Rock smashes scissors.  You have lost'
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'Scissors slice paper.  You win!'
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        return 'Scissors jam scissors... it is a tie.'
    }
}