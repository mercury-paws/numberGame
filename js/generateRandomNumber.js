// function returns a random integer between 1 and 100.
// This will be the number the player has to guess.

// export function generateRandomNumber() {}

export function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}