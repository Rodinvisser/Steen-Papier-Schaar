console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getUserChoice() {
    const validChoices = ["rock", "paper", "scissor"];
    let userInput = prompt("Please enter rock, paper, or scissor:");
    userInput = userInput.toLowerCase();
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissor.");
        return getUserChoice(); // Recursively ask for valid input
    }
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        return "Hahaaa Gewonnen!!";
    } else {
        return "L gepakt";
    }
}

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log("User Choice:", userChoice);
    console.log("Computer Choice:", computerChoice);
    console.log(playRound(userChoice, computerChoice));
}

playGame();
