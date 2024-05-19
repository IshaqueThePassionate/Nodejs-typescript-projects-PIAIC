#! /usr/bin/env node
import inquirer from "inquirer";
const maxGuesses = 3; // Maximum number of guesses allowed
const randomNumber = Math.floor(Math.random() * 10);
async function guessNumber() {
    let guessesLeft = maxGuesses;
    let correctGuess = false; // Flag to track if the user guessed correctly
    while (guessesLeft > 0 && !correctGuess) {
        const answers = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: `Guess a number between 0 to 10 and write it (You have ${guessesLeft} guesses left):`,
            },
        ]);
        const { userGuess } = answers;
        console.log(`Guessed No: ${userGuess}, Correct answer is: ${randomNumber}`);
        if (userGuess === randomNumber) {
            console.log("Correct Answer! Congratulations, you won!");
            correctGuess = true; // Set the flag to true if the guess is correct
        }
        else {
            console.log("Wrong Answer!");
            guessesLeft--; // Decrement the number of guesses left
            if (guessesLeft > 0) {
                console.log(`You have ${guessesLeft} guesses left.`);
            }
        }
    }
    if (!correctGuess) {
        console.log(`Out of guesses. The correct number was ${randomNumber}. Better luck next time!`);
    }
}
guessNumber();
