let playerScore = 0;
let computerScore = 0;
let draw = 0;
let rounds = 0;

    function computerPlay(){
        let action = Math.floor(Math.random()*3);
        if (action === 0){
            return "Rock";
        } else if (action === 1){
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    
    function playRound(playerSelection, computerSelection){
        const gameResult = document.createElement("div");
        gameResult.classList.add("gameResult");

        if (playerSelection === computerSelection) {
            gameResult.textContent = "It's a tie.";
            resultsContainer.appendChild(gameResult);

        } else if (playerSelection === "paper" && computerSelection === "rock"
            || playerSelection === "rock" && computerSelection === "scissors"
            || playerSelection === "scissors" && computerSelection === "paper"){
            gameResult.textContent = "Your won!";
            resultsContainer.appendChild(gameResult);
            playerScore +=1;
            document.getElementById("playerScoreContainer").textContent="Your score: " + playerWins;   
        } else {
            gameResult.textContent = "Computer won!";
            resultsContainer.appendChild(gameResult);
            computerScore +=1;
            document.getElementById("computerScoreContainer").textContent="Computer score: " + computerWins; 
        }
    }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playerSelection = button.value;
            computerSelection = computerPlay();
            playRound();
            rounds +=1;
        });
    });
