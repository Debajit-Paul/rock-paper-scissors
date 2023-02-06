/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const handSigns = document.querySelectorAll(".rpsButton")
const playerScore = document.getElementById("player-score")
const hands = document.getElementById("hands")
const result = document.getElementById("result")

let totalScore = { computerScore: 0, playerScore: 0 };
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const randomSign = Math.floor(Math.random() * handSigns.length)
  return (handSigns[randomSign].value)
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0
  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) score = 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice === "Rock" && computerChoice === "Scissors") score = 1
  else if (playerChoice === "Scissors" && computerChoice === "Paper") score = 1
  else if (playerChoice === "Paper" && computerChoice === "Rock") score = 1
  // Otherwise human loses (aka set score to -1)
  else score = -1

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  if (score === -1) {
    result.innerText = "You Lose!"
  } else if (score === 0) {
    result.innerText = "You Tie!"
  } else {
    result.innerText = "You Won!"
  }
  playerScore.innerText = `Your Score:  ${totalScore['playerScore']}`
  hands.innerText = `🧑${playerChoice} vs 🤖${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const computerChoice = getComputerChoice()
  console.log({ computerChoice })
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  showResult(score, playerChoice, computerChoice)
  console.log({ score })
  console.log(totalScore)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  handSigns.forEach(handSign => {
    handSign.onclick = () => {
      onClickRPS(handSign.value)
    }
  })
  // Add a click listener to the end game button that runs the endGame() function on click
  let reset = document.getElementById("endGameButton")
  reset.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  console.log("Game Over")
  playerScore.innerText = ""
  hands.innerText = ""
  result.innerText = ""
}

playGame()