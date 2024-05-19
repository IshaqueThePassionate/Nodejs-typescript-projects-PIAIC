# Number Guessing Game

## Description

This is a simple command-line number guessing game written in JavaScript using Node.js. The user has three attempts to guess a randomly generated number between 0 and 10.

## Installation

1. Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. Install the required package by running:
    ```bash
    npm install inquirer
    ```

## Usage

1. Save the script to a file, for example, `guessNumber.js`.

2. Run the script using Node.js:
    ```bash
    node guessNumber.js
    ```

## Code Explanation

```javascript
#! /usr/bin/env node
import inquirer from "inquirer";

const maxGuesses = 3; // Maximum number of guesses allowed
const randomNumber: number = Math.floor(Math.random() * 10);

type numType = {
    "userGuess": number
}

async function guessNumber() {
    let guessesLeft = maxGuesses;
    let correctGuess = false; // Flag to track if the user guessed correctly

    while (guessesLeft > 0 && !correctGuess) {
        const answers: numType = await inquirer.prompt([
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
        } else {
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
```

## Step-by-Step Explanation

1. **Shebang and Importing Inquirer**
    ```javascript
    #! /usr/bin/env node
    import inquirer from "inquirer";
    ```
    - The `#!/usr/bin/env node` line allows the script to be run directly from the command line.
    - Import the `inquirer` module for interactive command-line prompts.

2. **Setting Constants**
    ```javascript
    const maxGuesses = 3; // Maximum number of guesses allowed
    const randomNumber: number = Math.floor(Math.random() * 10);
    ```
    - `maxGuesses` defines the maximum number of guesses allowed.
    - `randomNumber` stores a randomly generated number between 0 and 10.

3. **Defining Type for User Input**
    ```javascript
    type numType = {
        "userGuess": number
    }
    ```
    - Define a TypeScript type `numType` to represent the structure of the user input.

4. **Main Function: guessNumber**
    ```javascript
    async function guessNumber() {
        let guessesLeft = maxGuesses;
        let correctGuess = false; // Flag to track if the user guessed correctly

        while (guessesLeft > 0 && !correctGuess) {
            const answers: numType = await inquirer.prompt([
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
            } else {
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
    ```

    - `guessNumber` is the main function that runs the guessing game.
    - Initialize `guessesLeft` with `maxGuesses` and `correctGuess` as `false`.
    - Use a `while` loop to prompt the user to guess a number as long as there are guesses left and the user has not guessed correctly.
    - `inquirer.prompt` is used to ask the user for their guess.
    - If the user guesses correctly, set `correctGuess` to `true` and print a congratulatory message.
    - If the guess is wrong, decrement `guessesLeft` and notify the user of the remaining guesses.
    - After the loop, if the user did not guess correctly, print the correct number and a consolation message.
