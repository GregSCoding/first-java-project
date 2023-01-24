const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playRound);
rockButton.figure = "Rock";
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playRound);
paperButton.figure = "Paper";
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playRound);
scissorsButton.figure = "scissors";
const playerScore = document.querySelector("#playerscore");
const computerScore = document.querySelector("#computerscore");
const computerChoiceTxt = document.querySelector("#compchoice");
const playerChoiceTxt = document.querySelector("#playerchoice");
const resultTxt = document.querySelector("#result");
computerScore.score = 0;
playerScore.score = 0;
const buttons = document.querySelectorAll("button");
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
    disableButtons();
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
function disableButtons(){
    buttons.forEach(function(elem){
        elem.disabled = true;
    });
}
function enableButtons(){
    buttons.forEach(function(elem){
        elem.disabled = false;
    });
}

function updateUi(msg){
    setTimeout(() => {
        computerChoiceTxt.textContent = "";
        playerChoiceTxt.textContent = "";
        resultTxt.textContent = msg;
        computerScore.textContent = "Computer " + computerScore.score;
        playerScore.textContent = "Human " + playerScore.score;
    }, 1000);
    setTimeout(() =>{
    if (computerScore.score == 5){
        computerChoiceTxt.textContent = "";
        playerChoiceTxt.textContent = "";
        resultTxt.textContent = "Too bad. Computer won.";
    }else if (playerScore.score == 5){
        computerChoiceTxt.textContent = "";
        playerChoiceTxt.textContent = "";
        resultTxt.textContent  = "You won! Congratulations.";
    }else{
        enableButtons();
    }
    }, 2500);
}