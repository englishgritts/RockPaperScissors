let cs = document.querySelector('#computer'); //Create variable with h1 computer score element
let us = document.querySelector('#user'); //Create variable with h1 user score element

const buttons = document.querySelectorAll('button'); 
buttons.forEach((button) => { //Iterate through the buttons
    button.addEventListener('click', () => { //Click event listener
        console.log(button.id);
        playRound(button.id, getComputerChoice()); //Arguments are chosen button and running computer function
        us.textContent = userScore; //Change user score with updated number
        cs.textContent = computerScore; //Change computer score with updated number
        if (userScore + computerScore == 5 && userScore > computerScore) { //Tally up winner at the end of the game
            alert("You win! Final score... " + "You: " + userScore + " | " + "Computer: " + computerScore)
        } else if (userScore + computerScore == 5 && computerScore > userScore) {
            alert("You lose. Final score... " + "You: " + computerScore  + " | " + "Computer: " + userScore)
        } else if (userScore + computerScore == 5 && computerScore == userScore) {
            alert("Tie game. No Winner.")
        }
    })
})


let userScore = 0; //Global variable for user wins
let computerScore = 0; //Global variable for computer wins
    
//Create a function called getComputerChoice
function getComputerChoice() {  
    var answers = ["Rock", "Paper", "Scissors"]; //Return either 'Rock', 'Paper', 'Scissors' at random
    randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    return randomAnswer;
}

//This function takes two parameters playerSelection and computerSelection
//Then it returns a string that declares the winner
function playRound(playerSelection, computerSelection) { 

    if (playerSelection == "rock" && computerSelection == "Paper") {
        alert("You lose! Paper beats Rock");
                    
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {            
        alert("You lose! Rock beats Scissors");
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        alert("You lose! Scissors beats Paper");
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        alert("You win! Rock beats Scissors");
        userScore++;
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        alert("You win! Scissors beats Paper");
        userScore++;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        alert("You win! Paper beats Rock");
        userScore++;
    }  else {
        alert("Tie! The same choice was thrown. No Score")
        }
        
        alert("User Score: " + userScore + " | " + " Computer Score: " + computerScore);//Score tally ongoing
    }
    
/*//New function that calls playRound() to play a 5 round game and keeps score
function game() {
    for (i=1; i<6; i++) {
        var computerSelection = getComputerChoice(); //Randomly generated computer choice
        var playerSelection = prompt("Input Rock, Paper, or Scissors").toLowerCase() //User input choice
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection);
    }

    if (userScore > computerScore) { //Tally up winner at the end of the game
        alert("You win! Final score... " + "You: " + userScore + " | " + "Computer: " + computerScore)
    } else if (computerScore > userScore) {
        alert("You lose. Final score... " + "You: " + computerScore  + " | " + "Computer: " + userScore)
    } else {
        alert("Tie game. No Winner.")
    }
}

game();
*/