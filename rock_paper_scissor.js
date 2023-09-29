//declaring variable & object
let computerMove = '';
let result = '';

const scores = {
  wins : 0,
  losses : 0,
  ties : 0
};

//this function will store the result of each moves into object 'scores'
function updateScores(){
  if (result === 'You win') {
    scores.wins +=1;
  
  } else if (result === 'Computer win') {
    scores.losses +=1;
  
  } else if (result === 'Tie') {
    scores.ties +=1;
  
  }
}

//randomize the computer moves
function rockpaperscissor() {
    const randomNumber = Math.random();
    
    if (randomNumber < 0.3) {
      computerMove = 'rock';

    } else if (randomNumber > 0.3 && randomNumber < 2/3){
      computerMove = 'paper';
    
    } else {
      computerMove = 'scissor';

    }
}
 
// rockBtn, paperBtn, scissorsBtn
function rockBtn(){
    rockpaperscissor();

    if (computerMove === 'rock') {
      result = 'Tie';
    
    } else if (computerMove === 'paper') {
      result = 'Computer win';
    
    } else {
      result = 'You win';
    }
    updateScores(result);
    alert(`You picked Rock, Computer picked ${computerMove}. ${result}
    Game Result Wins: ${scores.wins} Lose: ${scores.losses} Ties: ${scores.ties}`);
}

function paperBtn(){
    rockpaperscissor();

    if (computerMove === 'rock') {
      result = 'You win';
    
    } else if (computerMove === 'paper') {
      result = 'Tie';
    
    } else {
      result = 'Computer win';
    }
    updateScores(result);
    alert(`You picked Rock, Computer picked ${computerMove}. ${result}
    Game Result Wins: ${scores.wins} Lose: ${scores.losses} Ties: ${scores.ties}`);
}

function scissorBtn(){
    rockpaperscissor();

    if (computerMove === 'rock') {
      result = 'Computer win';
    
    } else if (computerMove === 'paper') {
      result = 'You win';
    
    } else {
      result = 'Tie';
    }
    updateScores(result);
    alert(`You picked Rock, Computer picked ${computerMove}. ${result}
    Game Result Wins: ${scores.wins} Lose: ${scores.losses} Ties: ${scores.ties}`);
}

//function to reset the whole scores into zero
function resetBtn(){
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;
}

console.log(scores)
// Linking each function with id
const buttonRock = document.getElementById("rockBtn");
buttonRock.onclick = rockBtn;

const buttonPaper = document.getElementById("paperBtn");
buttonPaper.onclick = paperBtn;

const buttonScissor = document.getElementById("scissorBtn");
buttonScissor.onclick = scissorBtn;

const buttonReset = document.getElementById("resetBtn");
buttonReset.onclick = resetBtn;


