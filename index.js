const option = ['Rock','Scissor','Paper']

function getComputerChoice(){
let randomNumber = Math.floor(Math.random()*3)
return option[randomNumber];
};

function playAround(playerSelection){
    playerSelection = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
    computerSelection = getComputerChoice();

    let playerNumber = option.indexOf(playerSelection)
    let computerNumber = option.indexOf(computerSelection)

    let difference =  playerNumber - computerNumber ;

    if(difference === -1 || difference === 2){
        return `You Win! ${option[playerNumber]} beats ${option[computerNumber]}`
    }else if(difference === -2 || difference ===1){
        return `You Lose! ${option[computerNumber]} beats ${option[playerNumber]}`
    }else{
        return `Draw! ${option[playerNumber]} and ${option[computerNumber]}`
    }
};

function game(){

    do{playerSelection = prompt("enter your choice Rock Scissor or Paper", 'Rock')
}while(!option.includes(playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())));

for(let i = 0; i <5; i++){
console.log(playAround(playerSelection))
}

}

