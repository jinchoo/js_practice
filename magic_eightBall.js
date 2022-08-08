let userName = 'Trio'

userName === 'Trio' ? console.log(`Hello ${userName}!`) : console.log(`Hello!`)

let userQuestion = 'Magic ball tell something'
console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break
  case 1:
    eightBall = 'It is decidely so'
    break
  case 2:
    eightBall = 'Reply hazy try again'
    break
  case 3:
    eightBall = 'Cannot predict now'
    break
  case 4:
    eightBall = 'Do not count on it'
    break
  case 5:
    eightBall = 'My sources say so'
    break
  case 6:
    eightBall = 'Outlook not so good'
    break
  default:
    eightBall = 'Signs point to a yes'
}

console.log(eightBall)

if (randomNumber === 0) {
  eightBall = 'It is certain'
} else if (randomNumber === 1) {
  eightBall = 'It is decidely so'
} else if (randomNumber === 1) {
  eightBall = 'Reply hazy try again'
} else if (randomNumber === 1) {
  eightBall = 'Cannot predict now'
} else if (randomNumber === 1) {
  eightBall = 'Do not count on it'
} else if (randomNumber === 1) {
  eightBall = 'My sources say so'
} else if (randomNumber === 1) {
  eightBall = 'Outlook not so good'
} else {
  eightBall = 'Signs point to a yes'
}

console.log(eightBall)
