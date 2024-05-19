# ATM Machine Simulation

## Description

This is a simple command-line ATM machine simulation written in JavaScript using Node.js. It allows users to check their balance or withdraw money after entering the correct PIN code.

## Installation

1. Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. Install the required package by running:
    ```bash
    npm install inquirer
    ```

## Usage

1. Save the script to a file, for example, `atm.js`.

2. Run the script using Node.js:
    ```bash
    node atm.js
    ```

## Code Explanation

```javascript
import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 55555;

// Print welcome message 
console.log("\n\tWelcome to the ATM - MACHINE\n");

// Prompt user to enter PIN
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);

// Check if the entered PIN is correct
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, login Successfully!");
    console.log(`Current Account balance is ${myBalance}`);

    // Prompt user to select an operation
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);

    // Handle the selected operation
    if (operationAns.operation === "Withdraw Amount") {
        // Prompt user to enter withdrawal amount
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        // Check if the balance is sufficient for the withdrawal
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        } else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdrawn Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    } else if (operationAns.operation === "Check Balance") {
        // Display the current balance
        console.log(`Your Account Balance is: ${myBalance}`);
    }
} else {
    // Handle incorrect PIN entry
    console.log("Pin is Incorrect, Try Again!");
}
```

## Step-by-Step Explanation

1. **Importing Inquirer**
    ```javascript
    import inquirer from "inquirer";
    ```
    - Import the `inquirer` module for interactive command-line prompts.

2. **Initializing Variables**
    ```javascript
    let myBalance = 5000;
    let myPin = 55555;
    ```
    - `myBalance` holds the user's initial balance.
    - `myPin` holds the user's PIN code.

3. **Printing Welcome Message**
    ```javascript
    console.log("\n\tWelcome to the ATM - MACHINE\n");
    ```
    - Print a welcome message to the console.

4. **Prompting for PIN Code**
    ```javascript
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin code:"
        }
    ]);
    ```
    - Prompt the user to enter their PIN code.
    - Store the entered PIN in `pinAnswer`.

5. **Verifying PIN Code**
    ```javascript
    if (pinAnswer.pin === myPin) {
        console.log("Pin is Correct, login Successfully!");
        console.log(`Current Account balance is ${myBalance}`);
    ```
    - Check if the entered PIN matches `myPin`.
    - If correct, print a success message and the current balance.

6. **Prompting for Operation**
    ```javascript
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Select an operation:",
                choices: ["Withdraw Amount", "Check Balance"]
            }
        ]);
    ```
    - Prompt the user to select an operation: "Withdraw Amount" or "Check Balance".
    - Store the selected operation in `operationAns`.

7. **Handling Withdraw Amount Operation**
    ```javascript
        if (operationAns.operation === "Withdraw Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
    ```
    - If the user selects "Withdraw Amount", prompt them to enter the amount to withdraw.
    - Store the entered amount in `amountAns`.

    ```javascript
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            } else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdrawn Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
    ```
    - Check if the entered amount is greater than the current balance.
    - If insufficient balance, print an error message.
    - Otherwise, deduct the amount from `myBalance`, print a success message, and display the remaining balance.

8. **Handling Check Balance Operation**
    ```javascript
        else if (operationAns.operation === "Check Balance") {
            console.log(`Your Account Balance is: ${myBalance}`);
        }
    ```
    - If the user selects "Check Balance", display the current balance.

9. **Handling Incorrect PIN Entry**
    ```javascript
    } else {
        console.log("Pin is Incorrect, Try Again!");
    }
    ```
    - If the entered PIN is incorrect, print an error message.
