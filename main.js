document.getElementById('rock').addEventListener("click", rock);
document.getElementById('paper').addEventListener("click", paper);
document.getElementById('scissors').addEventListener("click", scissors);


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
 let playerChoice;
 let computerChoice ;
 let selections;
 
 
 function computer(){
    playerChoice = ["rock", "paper", "scissors"]
        computerChoice =playerChoice[Math. floor(Math. random() * playerChoice. length)]  
         
    console.log(computerChoice);
         } 

 function compare(){        
    let tie =[["rock","rock"],
            ["paper","paper"],
            ["scissors","scissors"]];

    let win =[["rock","scissors"],
            ["paper","rock"],
            ["scissors","paper"]];

    let lose= [["rock","paper"],
            ["paper","scissors"],["scissors","rock"]];
          
            print[('You chose' + 'playerChoice') + ('Computer chose' + 'computerChoice')];
 }
         
         switch(playerChoice, computerChoice) {
            case tie  :
               print("It's a Tie!");
        break;
             case win:
               print(" You Win!");
        break;
              case lose:
               print(" You Lose!");
          
        }
    