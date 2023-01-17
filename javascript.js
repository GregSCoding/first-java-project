function isValid(choice){
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors"){
        return true
    }else{
        return false
    }
}


function getComputerChoice(){
    let rannum = Math.floor((Math.random()*100));
    console.log(rannum);
    if (rannum > 66){
        return "Rock"
    }else if (rannum > 33){
        return "Paper";
    }else{
        return "Scissors";
    }
}
function playRound(p1choice, p2choice){
    declarePlayerWin = (p1, p2) => console.log("You win. " + p1 + " beats " + p2);
    declareCompWin = (p1,p2) => console.log("You lose. " + p2 + " beats " + p1);
    if (p1choice === p2choice){
        console.log("Draw");
        return "Draw";
    }else if (p1choice === "Rock" && p2choice === "Scissors"){
        declarePlayerWin(p1choice, p2choice);
        return "Human";
    }else if (p1choice === "Paper" && p2choice === "Rock"){
        declarePlayerWin(p1choice,p2choice);
        return "Human";
    }else if (p1choice === "Scissors" && p2choice === "Paper"){
        declarePlayerWin(p1choice,p2choice);
        return "Human";
    }else{
        declareCompWin(p1choice, p2choice);
        return "Computer";
    }
}

function playGame(){
    console.log("It is a console game of rock paper and scissors, have fun!");
    let humanScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++){
        let playerChoice;
        while(true){
            playerChoice = prompt("Enter your choice.");
            playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
            if (isValid(playerChoice)){
                break;
            }
            console.log("Please enter a valid choice (rock, paper or scissors capitaliation does not matter)");
        }
        let result = playRound(playerChoice, getComputerChoice());
        if (result === "Human"){
            humanScore++;
        }else if (result === "Computer"){
            compScore++;
        }
    }
    if (humanScore > compScore){
        console.log("You won! Congratulations. " + compScore + " to " + humanScore);
    }else if (compScore > humanScore){
        console.log("Too bad. Computer won. " + compScore + " to " + humanScore);
    }else{
        console.log("It's a draw. Very unlikely!")
    }
 }
 playGame();