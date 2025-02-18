playGame();

function getComputerChoice() {
  let decision = Math.floor(Math.random() * 3); //let your computer randomly generate numbers 0, 1, 2.
  let compDecision = '';
  switch (decision) {
    case 0:
      compDecision = 'Rock';
      break;
    case 1:
      compDecision = 'Paper';
      break;
    case 2:
      compDecision = 'Scissors';
      break;
  }
  return compDecision.toLowerCase();
}

function getHumanChoice() {
  let choice = prompt('Enter your choice');
  return choice;
}

function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let humanSelection;
  let computerSelection;

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
  }

  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`human: ${humanSelection}`);
    console.log(`computer: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    console.log(`Human_Score: ${humanScore}`);
    console.log(`Computer_Score: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log('Hurray! You win..!!')
  } else if (humanScore < computerScore) {
    console.log('Oops!! You lost!');
  } else {
    console.log("It's a tie!");
  }
}
