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
        return `You Win ! ${p1} beats ${p2}`;
    }
    else if(p1==p2) return `Draw ! You both played ${p1}`;
    else return `You Lose ! ${p2} beats ${p1}`;
}
function game(){
    let playerScore=0;let computerScore=0;
    let regex1=/win/i; let regex2=/lose/;
    for(let i=1;i<=5;i++){
        console.log(`Round ${i} :`);
        let playerInput=window.prompt("Choose one of Rock , Paper ,Scissors : ");
        console.log(declareWinner(playerInput,getComputerChoice()));
        if(regex1.test(declareWinner(playerInput,getComputerChoice()))) playerScore++;
        else if(regex2.test(declareWinner(playerInput,getComputerChoice()))) computerScore++;
    }
    console.log("Player Score :"+ playerScore + " Computer Score:" + computerScore);
}
game();