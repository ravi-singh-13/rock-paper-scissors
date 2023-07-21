const option = ['Rock','Scissor','Paper'];
let you = 0;
let computer = 0;
let state = "home"

let home = document.querySelector(".home")
let single = document.querySelector(".single");
let series = document.querySelector(".series");
let fullBodyOutput = document.querySelector('.fullBodyOutput');
let userOutput = document.querySelector("#userOutput p ");
let computerOutput = document.querySelector("#computerOutput p ");
let output = document.querySelectorAll(".output2 ");


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
        return [`You Win! ${option[playerNumber]} beats ${option[computerNumber]}`, 'win']
    }else if(difference === -2 || difference ===1){
        return [`You Lose! ${option[computerNumber]} beats ${option[playerNumber]}`,'lose']
    }else{
        return [`Draw! ${option[playerNumber]} and ${option[computerNumber]}`, 'draw']
    }
};


// for single game
const buttons = document.querySelectorAll(".singleGame button");
buttons.forEach(button => {
    button.onclick = () => {
        output[0].textContent = playAround(option[button.value])[0];  
    }
})



// for series

function game(x){
    let fullBodyOutputText = document.querySelector(" #output-text");   
    let result = playAround(x);   
    output[1].textContent = result[0];

    if( result[1] === "win"){
        you++;
        

            }else if (result[1] === "lose"){
                computer++;
               
    }

    if(you < 5 && computer < 5){
        userOutput.textContent=`${you}`;
        computerOutput.textContent=`${computer}`;
    console.log(`${you} ${computer}`)
    }else{
        
    if(you == 5){

       
        home.style.display= "none";
        single.style.display= "none";
        series.style.display= "none";
        fullBodyOutput.style.display= "block";

    fullBodyOutputText.textContent="you win"
    console.log("you win")
    }else{
        home.style.display= "none";
        single.style.display= "none";
        series.style.display= "none";
        fullBodyOutput.style.display= "block";
        
        fullBodyOutputText.textContent="computer win"
        console.log("computer win")
    }
}
    }

const buttons2 = document.querySelectorAll(".series button");
buttons2.forEach(button => {
    button.onclick = () => {
       game(option[button.value]);
        
       
    }
})

const refreshButton = document.querySelector(".refresh");
refreshButton.onclick=()=>{
    you = 0;
    computer =0;
    
    userOutput.textContent=`${you}`;
    computerOutput.textContent=`${computer}`

     output[1].textContent = "";
     output[0].textContent = "";
}
// for display div

let homeButton = document.querySelectorAll('.homeButton');
    homeButton.forEach(button => {
        button.onclick = () => {
            state = button.value;
            console.log(state);
            if(state==="home"){
                home.style.display= "flex";
                single.style.display= "none";
                series.style.display= "none";
                fullBodyOutput.style.display= "none";
                console.log(1)
                }else if(state==="single"){
                    home.style.display= "none";
                    single.style.display= "block";
                    series.style.display= "none";
                    fullBodyOutput.style.display= "none";
                    console.log(2)
                    }else if(state==="series"){
                        home.style.display= "none";
                    single.style.display= "none";
                    series.style.display= "block";
                    fullBodyOutput.style.display= "none";
                    you=0;
                    computer=0;
                    console.log(3)
                    }
            
        }
    })

    let goHomeButton = document.querySelectorAll('.goHomeButton');
    goHomeButton.forEach(button =>{
        button.onclick =()=>{
         output[1].textContent = "";
         output[0].textContent = "";
        home.style.display= "flex";
        single.style.display= "none";
        series.style.display= "none";
        fullBodyOutput.style.display= "none";
    }
    })
 
    let playAgainButton = document.querySelector(".playAgainButton");
    playAgainButton.onclick=()=>{
        home.style.display= "none";
        single.style.display= "none";
        series.style.display= "block";
        fullBodyOutput.style.display= "none";
        you = 0;
        computer=0;
        userOutput.textContent=`${you}`;
        computerOutput.textContent=`${computer}`;
        output[1].textContent = "";
        output[0].textContent = "";
    }

   
    