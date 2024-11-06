// takes two parameters - the player's guess and the correct number.
// It should return a string indicating whether the guess is too low,
// too high, or correct.


export function checkGuess(playerNumber, generatedNumber) {
    if (playerNumber < generatedNumber) {
        return "Too Low";
    } else if (playerNumber > generatedNumber) {
        return "Too High";
    } else {
        return "Correct";
    }
}
