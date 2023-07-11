function getComputerChoice(){
    let choice=Math.ceil(Math.random()*3);
    switch(choice){
        case 1 : return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
        default : return getComputerChoice();
    }
}
function declareWinner(playerSelection,computerSelection){
    let p1=playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase();
    let p2=computerSelection;
    if((p1=="Rock" && p2=="Scissor") || (p1=="Paper" && p2=="Rock") || (p1=="Scissor" && p2=="Paper")){
        return 1;
    }
    else if(p1==p2) return 0;
    else return -1;
}
function game(){
    document.getElementById("startGame").parentElement.removeChild(document.getElementById("startGame"));   
    let playerScore=0; let computerScore=0;let nbRounds=0;
    let rockButton=document.createElement("button");
    let scissorButton=document.createElement("button");
    let paperButton=document.createElement("button");
    let gameContainer=document.getElementById("gameContainer");
    let chooseMove=document.createElement("h1");
    let playerScoreText=document.createElement("h1");
    let computerScoreText=document.createElement("h1");
    let resultOfRound=document.createElement("h1");
    chooseMove.textContent="Choose Move";
    gameContainer.appendChild(chooseMove);
    gameContainer.appendChild(rockButton);
    gameContainer.appendChild(paperButton);
    gameContainer.appendChild(scissorButton);
    rockButton.textContent="Rock";
    paperButton.textContent="Paper";
    scissorButton.textContent="Scissor";
    gameContainer.appendChild(playerScoreText);
    gameContainer.appendChild(computerScoreText);
    gameContainer.appendChild(resultOfRound);
    function rockEvent (){
        playRound("Rock");
        checkEndGame();
        }
    function paperEvent(){
            playRound("Paper");
            checkEndGame();
        }
    function scissorEvent(){
            playRound("scissor");
            checkEndGame();
        }
    rockButton.addEventListener("click",rockEvent);
    paperButton.addEventListener("click",paperEvent);
    scissorButton.addEventListener("click",scissorEvent);
    function playRound(str){
        if(declareWinner(str,getComputerChoice())==1){
            playerScore++;
            resultOfRound.textContent="You Win this round";
        }
        else if(declareWinner(str,getComputerChoice())==-1){
            computerScore++;
            resultOfRound.textContent="You Lost this round";
        }
        else { resultOfRound.textContent="You Drew this round";}
        playerScoreText.textContent=`Player Score : ${playerScore}`;
        computerScoreText.textContent=`Computer Score : ${computerScore}`;
        nbRounds++;
}
function checkEndGame(){
    if(nbRounds==5){
        rockButton.removeEventListener("click",rockEvent);
        paperButton.removeEventListener("click",paperEvent);
        scissorButton.removeEventListener("click",scissorEvent);
        resultOfRound.textContent=playerScore>computerScore?"You Won The Game":
        playerScore<computerScore?"You Lost The Game":"You drew the game";
    }
}
}
document.getElementById("startGame").addEventListener("click",game);