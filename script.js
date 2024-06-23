// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.
// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// * As a user, I expect the computer to choose R, P, or S in return.
// * As a user, I want to be prompted when I enter an invalid choice.
// * As a user, I want the option to play again whether I win or lose.
// * As a user, I want to see my total wins, ties, and losses after I have finished playing.
// * As a user, I want to see how many times I chose each option after I have finished playing.

const errorText = `The input in valid. Please type in either "R", "P", or "S".`;
const gameMsg = `Rock(r), Paper(p), OR Scissor(s). Chose your choice wisely XD`;
const playagainText = `Do you want to play again?`

const validChoice = ['R','P','S','ROCK','PAPER','SCISSOR'];
const options = ['R','P','S']
let userChoice, gameChoice;
let numberTie = 0, numberWin = 0, numberLose = 0;

// window.confirm(playagainText)

function validInput(){
    userChoice = window.prompt(gameMsg).toUpperCase();
    if (!validChoice.includes(userChoice)){
        window.alert(errorText);
        validInput();
    }
}

function choiceOne(choiceString){
    switch(choiceString){
        case 'ROCK':
            return 'R'
        case 'PAPER':
            return 'P'
        case 'SCISSOR':
            return 'S'
        default:
            return choiceString
    }
}

function playAgain(){
    
}

function gameStart(){
    validInput();
    gameChoice = validChoice[Math.floor(Math.random()*validChoice.length)]
    
    gameChoice = choiceOne(gameChoice)
    userChoice = choiceOne(userChoice)

    if (userChoice === gameChoice) {
        console.log(`tie`);
        numberTie ++
    }
    //Rock beats Scissor
    else if (userChoice == 'R' && gameChoice == 'S'){
        console.log(`you win`)
        numberWin ++
    }
    //Paper beats Rock
    else if (userChoice == 'P' && gameChoice == 'R'){
        console.log(`you win`)
        numberWin ++
    }
    //Scissor beats Papper
    else if (userChoice == 'S' && gameChoice == 'P'){
        console.log(`you win`)
        numberWin ++
    }
    else {
        console.log(`you lose`)
        numberLose ++
    }
    console.log(`Number of Wins: ${numberWin} \nNumber of Lose: ${numberLose} \nNumber of Tie: ${numberTie}`)
}


gameStart();
