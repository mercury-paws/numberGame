import { checkGuess } from "./js/checkGuess.js";
import { generateRandomNumber } from "./js/generateRandomNumber.js";
import { getPlayerGuess } from "./js/getPlayerGuess.js";

function game() {

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


        if (playerNumber === null) {
            alert("You canceled the game. Goodbye!\nPlease Refresh the Page to Play Again.");
            console.log("Game canceled by the player.");
            return;
        }

        if (isNaN(playerNumber)) {
            alert("Enter the passcode quickly, the terminators are coming!");
            console.log("Enter the passcode quickly, the terminators are coming!");
            continue;
        }

       
        attempts += 1;

        
        const result = checkGuess(playerNumber, generatedNumber);
        if (result === "Too Low") {
            alert(`Too Low! The AI is still secure.👾hurry up he's coming. Attempts left until he gets our location: ${maxAttempts - attempts}`);
            console.log(`Too Low! The AI is still secure.👾hurry up he's coming. Attempts left until he gets our location: ${maxAttempts - attempts}`);
            score -= 10;
        } else if (result === "Too High") {
            alert(`Too High! The AI is still secure.😹Hurrrrrryyyyyyyyyy😹 Attempts left until he gets our location: ${maxAttempts - attempts}`);
            console.log(`Too High! The AI is still secure.😹Hurrrrrryyyyyyyyyy😹 Attempts left until he gets our location: ${maxAttempts - attempts}`);
            score -= 10;
        } else {
            alert(`Correct! You've hacked the AI network in ${attempts} attempts.`);
            alert(`Your score is: ${score}`);
            console.log(`Correct! You've hacked the AI network in ${attempts} attempts.`);
            console.log(`Your score is: ${score}`);
            return;
        }
       
        if (attempts === maxAttempts) {
            alert("☠️Game Over! The terminator got you. we are doomed☠️.");
            alert(`The correct passcode was: ${generatedNumber}`);
            console.log("Game Over! he terminator got you. we are doomed.");
            console.log(`The correct passcode was: ${generatedNumber}`);
            return;
        }
    }
}

game();
