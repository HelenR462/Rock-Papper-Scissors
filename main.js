document.getElementById('rock').addEventListener("click", ()=>compare('rock'));
document.getElementById('paper').addEventListener("click", ()=>compare('paper'));
document.getElementById('scissors').addEventListener("click", ()=>compare('scissors'));

const playerScoreDisplay = document.getElementById('player');
const computerScoreDisplay = document.getElementById('computer');
const resultDisplay = document.getElementById('result');

 function rock(){
 document.getElementById('rock'). innerHTML = 'rock';
  }

 function paper(){
 document.getElementById('paper').innerHTML = 'paper'; 
}

 function scissors(){
 document.getElementById('scissors').innerHTML = 'sissors'; 
 }

 let playerScore = 0;
 let computerScore = 0;
  
 
 function computer(){
 const choices = ["rock", "paper", "scissors"]
 const computerChoice =choices[Math. floor(Math. random() * choices. length)]  
         
    console.log('computerChoice in computer()' , computerChoice);
    return computerChoice;
         } 

 function compare(userChoice){    
     const computerChoice = computer();      
        console.log('computerChoice in compare(): ' , computerChoice);
        console.log('userChoice: ', userChoice);

        console.log(userChoice + computerChoice);
        switch(userChoice + computerChoice){

    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        playerScore++;
playerScoreDisplay.textContent = 'player: ' + playerScore;
resultDisplay.textContent = 'You chose ' + userChoice + '. The computer chose ' + computerChoice + '. You Won!'
   break;     
      
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':        
            
playerScore==computerScore;
playerScoreDisplay.textContent = 'player: ' + playerScore;
resultDisplay.textContent = 'You chose ' + userChoice + '. The computer chose ' + computerChoice + '. A Tie!' 
   break;     

    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
          
computerScore++;
computerScoreDisplay.textContent = 'computer: ' + computerScore;
resultDisplay.textContent = 'The computer chose ' + computerChoice + '. You chose ' + userChoice + '. You Lose!'
   break;     
 }
         
} 
 
 
    