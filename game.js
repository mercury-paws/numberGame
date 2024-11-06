import { checkGuess } from "./js/checkGuess.js";
import { generateRandomNumber } from "./js/generateRandomNumber.js";
import { getPlayerGuess } from "./js/getPlayerGuess.js";

function game() {
    // Step 1: Initialize the game
    const generatedNumber = generateRandomNumber(1, 100);
    let attempts = 0;
    const maxAttempts = 10;
    let score = 100;

    alert("👹 The evil AI Branko has taken over the world. Elon was right 😱!");
    alert("😶‍🌫️ You are our last hope. Hack the AI network, its passcode is between 1 to 100.");
    alert("🤖 You have 10 attempts to hack the AI network. Good luck! 🤖");
    console.log("👹 The evil AI Branko has taken over the world. Elon was right 😱!");
    console.log("😶‍🌫️ You are our last hope. Hack the AI network, its passcode is between 1 to 100.");
    console.log("🤖 You have 10 attempts to hack the AI network. Good luck! 🤖");

    while (attempts < maxAttempts) {
      
        const playerNumber = getPlayerGuess();

        if (isNaN(playerNumber)) {
            alert("Enter the passcode quickly, the terminators are coming!");
            continue;
        }

       
        attempts += 1;

        
        const result = checkGuess(playerNumber, generatedNumber);
        if (result === "Too Low") {
            alert(`Too Low! The AI is still secure.👾hurry up he's coming. Attempts left until he gets our location: ${maxAttempts - attempts}`);
            score -= 10;
        } else if (result === "Too High") {
            alert(`Too High! The AI is still secure.😹Hurrrrrryyyyyyyyyy😹 Attempts left until he gets our location: ${maxAttempts - attempts}`);
            score -= 10;
        } else {
            alert(`Correct! You've hacked the AI network in ${attempts} attempts.`);
            alert(`Your score is: ${score}`);
            return;
        }
       
        if (attempts === maxAttempts) {
            alert("Game Over! You've reached the maximum number of attempts.");
            alert(`The correct passcode was: ${generatedNumber}`);
            return;
        }
    }
}

game();