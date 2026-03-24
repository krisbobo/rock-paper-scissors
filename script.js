let humanScore = 0;
let computerScore = 0;

document.addEventListener('DOMContentLoaded', playGame);

function playRound(humanChoice, computerChoice) {
  let resultText = '';
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    resultText = 'You win! Rock beats scissors!';
    humanScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    resultText = 'You win! Paper beats rock!';
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    resultText = 'You win! Scissors beats paper!';
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == ' rock') {
    resultText = 'You lose! Rock beats scissors!';
    computerScore++;
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    resultText = 'You lose! Paper beats rock!';
    computerScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    resultText = 'You lose! Scissors beats paper!';
    computerScore++;
  } else if (humanChoice === computerChoice) {
    resultText = "It's a tie! Play again!";
  }
  return resultText;
}

function playGame () {
  const btnRock = document.querySelector('#rock');
  const btnPaper = document.querySelector('#paper');
  const btnScissors = document.querySelector('#scissors');
  const runningScore = document.querySelector('#runningScore');
  const winner = document.querySelector('#score');
  const refresh = document.querySelector('#refresh');

  refresh.addEventListener('click', () => resetGame());

  btnRock.addEventListener('click', () => handleClick('rock'));

  btnPaper.addEventListener('click', () => handleClick('paper'));

  btnScissors.addEventListener('click', () => handleClick('scissors'));

  function handleClick(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    runningScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    winner.textContent = result;
    if (humanScore === 5 || computerScore === 5) {
      winner.textContent +=
        humanScore > computerScore
        ? ' 🎉 You won the game!'
        : ' 💀 You lost the game!';
    }
  }

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

  function resetGame() {
    humanScore = 0;
    computerScore = 0;

    runningScore.textContent = 'Game reset! Play again.';
    winner.textContent = `You: 0 | Computer: 0`;
  }
}
