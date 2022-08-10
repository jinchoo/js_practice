const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput
  }
  console.log('error')
}

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3)
  if (randomChoice === 0) {
    return 'rock'
  } else if (randomChoice === 1) {
    return 'paper'
  } else if (randomChoice === 2) {
    return 'scissors'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'the game is a tie'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won'
    } else {
      return 'You won'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The Computer won'
    } else {
      return 'You won'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won'
    } else {
      return 'You Won'
    }
  }
  if (userChoice === 'bomb') {
    return 'You won!!!'
  }
}

//console.log(determineWinner('paper','rock'))

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}
playGame()
