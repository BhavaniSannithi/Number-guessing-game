// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of chances
let chances = 5;

// Function to start the game
function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("You have 5 chances to guess a number between 1 and 100.");

    // Loop to allow up to 5 guesses
    for (let i = 1; i <= 5; i++) {
        // Prompt the user for a guess
        const userGuess = parseInt(prompt(`Guess the number (Chances left: ${chances}):`));

        // Validate the user's input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            continue; // Skip this iteration and prompt again
        }

        // Decrement chances
        chances--;

        // Check if the guess is correct
        if (userGuess === randomNumber) {
            console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${i} attempt(s).`);
            return; // End the game
        } else if (userGuess < randomNumber) {
            console.log("Too low! Try guessing a higher number.");
        } else {
            console.log("Too high! Try guessing a lower number.");
        }
    }

    // If all chances are used and the number is not guessed
    console.log(`Sorry, you've used all your chances. The correct number was ${randomNumber}.`);
}

// Start the game
startGame();
