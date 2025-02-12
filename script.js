function getComputerChoice() {
  let decision = Math.floor(Math.random() * 3); //let your computer randomly generate numbers 0, 1, 2.
  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';
  if (decision === 0) {
    return rock;
  }
  if (decision === 1) {
    return paper;
  }
  if (decision === 2) {
    return scissors;
  }
}

console.log(getComputerChoice());