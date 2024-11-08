export function checkGuess(playerNumber, generatedNumber) {
  if (playerNumber < generatedNumber) {
    return "Too Low";
  } else if (playerNumber > generatedNumber) {
    return "Too High";
  } else {
    return "Correct";
  }
}
