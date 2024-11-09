export function getPlayerGuess() {
  let guess;
  while (true) {
    guess = prompt("Enter your guess (1-100):");
    if (guess === null) {
      return null;
    }
    guess = parseInt(guess);
    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      return guess;
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
  }
}
