
// * As a user, I want to see how many times I chose each option after I have finished playing.

const errorText = `The input in valid. Please type in either "R", "P", or "S".`;
const gameMsg = `Rock(r), Paper(p), OR Scissor(s). Chose your choice wisely XD`;
const playagainText = `Do you want to play again?`

const validChoice = ['R','P','S','ROCK','PAPER','SCISSOR'];
const options = ['R','P','S']
let userChoice, gameChoice;
let gameRounds = 1, numberTie = 0, numberWin = 0, numberLose = 0;
let rChose = 0, pChose = 0, sChose = 0;

//Make sure input is valid
function validInput(){
    userChoice = window.prompt(gameMsg).toUpperCase();
    if (!validChoice.includes(userChoice)){
        window.alert(errorText);
        validInput();
    }
}

//change input to one letter
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

//Count the user's choice
function countChoice(index){
    switch(index){
        case 'R':
            return rChose ++
        case 'P':
            return pChose ++   
        case 'S':
            return sChose ++
    }
}

//Play again function
function playAgain(){
    return window.confirm(playagainText)
}

function gameStart(){
    //Display game rounds
    console.log(`Game Round: ${gameRounds}`)
    gameRounds ++;

    //get user's input and game's input
    validInput();
    gameChoice = validChoice[Math.floor(Math.random()*validChoice.length)]
    gameChoice = choiceOne(gameChoice)
    userChoice = choiceOne(userChoice)

    console.log(`Your choice: ${userChoice} \ngame choice: ${gameChoice}`)

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

    //Display number of Win, Lose, and Tie
    console.log(`Number of Wins: ${numberWin} \nNumber of Lose: ${numberLose} \nNumber of Tie: ${numberTie}`)

    //Display number of ROCK, PAPER, SCISSOR user choice
    countChoice(userChoice)
    console.log(`User's choice:\nNumber of Rock: ${rChose}\nNumber of Paper: ${pChose}\nNumber of Scissor: ${sChose}`)

    console.log(`-------------------------------------------------------------`)

    //Play Again
    if(playAgain()){
        gameStart()
    }
}

gameStart();
