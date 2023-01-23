rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playRound);
rockButton.figure = "Rock";
paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playRound);
paperButton.figure = "Paper";
scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playRound);
scissorsButton.figure = "scissors";
playerScore = document.querySelector("#playerscore");
computerScore = document.querySelector("#computerscore");
computerChoiceTxt = document.querySelector("#compchoice");
playerChoiceTxt = document.querySelector("#playerchoice");
resultTxt = document.querySelector("#result");
computerScore.score = 0;
playerScore.score = 0;


function getComputerChoice(){
    let rannum = Math.floor((Math.random()*100));
    let result = "";
    if (rannum > 66){
        result = "Rock";
    }else if (rannum > 33){
        result = "Paper";
    }else{
        result = "Scissors";
    }
    return result;
}
function playRound(e){
    playeChoice = e.currentTarget.figure;
    computerChoice = getComputerChoice();
    resultTxt.textContent = "";
    computerChoiceTxt.textContent = "Computer chose " + computerChoice + ".";
    playerChoiceTxt.textContent = "You chose " + playeChoice + ".";
    e.stopPropagation();
    let msg;
    declarePlayerWin = () => {
        playerScore.score++;
        return "You win. " + playeChoice + " beats " + computerChoice + ".";
    };
    declareCompWin = () => {
        computerScore.score++;
        return "You lose. " + computerChoice + " beats " + playeChoice + ".";
    };
        if (playeChoice === computerChoice){
        msg = "It's a draw"
    }else if (playeChoice === "Rock" && computerChoice === "Scissors"){
        msg = declarePlayerWin();
    }else if (playeChoice === "Paper" && computerChoice === "Rock"){
        msg = declarePlayerWin();
    }else if (playeChoice === "Scissors" && computerChoice === "Paper"){
        msg = declarePlayerWin();
    }else{
        msg = declareCompWin();
    }
    updateUi(msg);
}

function updateUi(msg){
    setTimeout(() => {
        computerChoiceTxt.textContent = "";
        playerChoiceTxt.textContent = "";
        resultTxt.textContent = msg;
        console.log(msg);
    }, 2000);
}

function playGame(){
    for (let i = 0; i < 5; i++){
        let playerChoice;
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