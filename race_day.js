let raceNumber = Math.random() * 1000
console.log(raceNumber)

raceNumber = Math.floor(raceNumber)
console.log(raceNumber)

let runnerRegisterEarly = true
let runnerAge = 18

if (runnerAge > 18 && runnerRegisterEarly) {
  raceNumber += 1000
}

if (runnerAge > 18 && runnerRegisterEarly) {
  // raceNumber += 1000
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`)
} else if (runnerAge > 18 && !runnerRegisterEarly) {
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm and your race number is ${raceNumber} `)
} else {
  console.log(`If you are 18, go see to registration desk.`)
}
