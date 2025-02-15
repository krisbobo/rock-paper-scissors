let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  let decision = Math.floor(Math.random() * 3); //let your computer randomly generate numbers 0, 1, 2.
  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';
  if (decision === 0) {
    return rock.toLowerCase();
  }
  if (decision === 1) {
    return paper.toLowerCase();
  }
  if (decision === 2) {
    return scissors.toLowerCase();
  }
}

function getHumanChoice() {
  let choice = prompt('Enter your choice');
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    console.log('You win! Rock beats scissors!');
    humanScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    console.log('You win! Paper beats rock!');
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    console.log('You win! Scissors beats paper!');
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == ' rock') {
    console.log('You lose! Rock beats scissors!');
    computerScore++;
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    console.log('You lose! Paper beats rock!');
    computerScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    console.log('You lose! Scissors beats paper!');
    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie! Play again!");
  }
  console.log(computerScore, humanScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
