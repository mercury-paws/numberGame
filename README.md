# numberGame Algorithm

ReviewLink: https://mercury-paws.github.io/numberGame/

1. game is initialized with the generating the random number between 1 and 100(once), attempts counter and max number of attemts - 10.
2. game requests the player to enter the number
3. the player's number is received. The number of attempts is increased by adding 1 to the existing number of attempts. The player's number is compared with the generated number. The result can be "Too Low", "Too High", "Correct"
4. If the result is "Too Low" - show the player the result, request him to pick up another number. repeat the step 3.
5. If the result is "Too High" - show the player the result, request him to pick up another number. repeat the step 3.
6. If the result is "Correct" - show the player he is correct, show him the total number of attempts he used and exit the program
7. if the number of attemts is 10 - show the player that the game is over, he has reached the max number of attemts and exit the program

- bonus: in 1 step initialize the score (integer). decrease it in case of "Too Low" or "Too High" result.

# Storyline
- The evil AI Branko has taken over the world. Elon was right!
- You are our last hope. Hack the AI network, its passcode is between 1 to 100.
- You have 10 attempts to hack the AI network. Good luck!
