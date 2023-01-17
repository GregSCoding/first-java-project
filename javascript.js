function getComputerChoice(){
    let rannum = Math.floor((Math.random()*100));
    if (rannum > 66){
        return "Rock"
    }else if (rannum > 33){
        return "Paper";
    }else{
        return "Scissors";
    }
}

console.log(getComputerChoice());