<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?cs=srgb&dl=pexels-francesco-ungaro-396547.jpg&fm=jpg');
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: rgba(255, 255, 255, 0.6);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            text-align: center;
            max-width: 300px;
            width: 100%;
            transition: all 0.3s ease; /* Smooth transition for shake */
        }
        .shake {
            animation: shake 0.3s; /* Shake animation duration */
            animation-timing-function: ease-in-out;
        }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
        h1 {
            margin-bottom: 20px;
            color: #333;
        }
        input {
            padding: 10px;
            font-size: 16px;
            margin-bottom: 20px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            border: none;
            color: #333;
            border-radius: 4px;
            outline: none;
        }
        input::placeholder {
            color: #777;
        }
        button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
            color: #333;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: rgba(255, 255, 255, 1);
        }
        .feedback {
            margin-top: 20px;
            font-size: 18px;
            color: #00b300;
        }
        .error {
            color: #cc0000;
        }
    </style>
</head>
<body>

<div class="container" id="gameContainer">
    <h1>Number Guessing Game</h1>
    <input type="number" id="userGuess" min="1" max="100" placeholder="Enter your guess here">
    <button onclick="makeGuess()">Submit Guess</button>

    <div class="feedback" id="feedback"></div>
</div>

<script>
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Initialize the number of chances
    let chances = 5;

    // Function to handle the user's guess
    function makeGuess() {
        const userGuess = parseInt(document.getElementById("userGuess").value);
        const feedback = document.getElementById("feedback");
        const gameContainer = document.getElementById("gameContainer");

        // Validate user input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.innerHTML = "Please enter a valid number between 1 and 100.";
            feedback.className = "error"; // Error styling
            gameContainer.classList.add('shake'); // Add shake animation
            setTimeout(() => gameContainer.classList.remove('shake'), 300); // Remove after animation completes
            return;
        }

        // Decrement chances
        chances--;

        // Check if the guess is correct
        if (userGuess === randomNumber) {
            feedback.innerHTML = `🎉 Congratulations! You guessed the correct number ${randomNumber} in ${5 - chances} attempt(s).`;
            feedback.className = "feedback"; // Success styling
            document.getElementById("userGuess").disabled = true; // Disable input
            return;
        } else if (userGuess < randomNumber) {
            feedback.innerHTML = `🔽 Too low! Try guessing a higher number. Chances left: ${chances}`;
            feedback.className = "error"; // Error styling
            gameContainer.classList.add('shake'); // Add shake animation
            setTimeout(() => gameContainer.classList.remove('shake'), 300); // Remove after animation completes
        } else {
            feedback.innerHTML = `🔼 Too high! Try guessing a lower number. Chances left: ${chances}`;
            feedback.className = "error"; // Error styling
            gameContainer.classList.add('shake'); // Add shake animation
            setTimeout(() => gameContainer.classList.remove('shake'), 300); // Remove after animation completes
        }

        // If all chances are used and the number is not guessed
        if (chances === 0) {
            feedback.innerHTML = `😢 Sorry, you've used all your chances. The correct number was ${randomNumber}.`;
            feedback.className = "error"; // Error styling
            document.getElementById("userGuess").disabled = true; // Disable input
        }
    }
</script>

</body>
</html>
