# Ishaque Calculator

## Description

The Ishaque Calculator is a simple command-line calculator built using Node.js. It prompts the user to input two numbers and select a mathematical operation (Addition, Subtraction, Multiplication, or Division), then performs the selected operation and displays the result.

## Installation

1. Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. Install the required package by running:
    ```bash
    npm install inquirer
    ```

## Usage

1. Save the script to a file, for example, `calculator.js`.

2. Run the script using Node.js:
    ```bash
    node calculator.js
    ```

## Code Explanation

```javascript
#!/usr/bin/env node

console.log("welcome to Ishaque Calculator");

// Import the inquirer module
import inquirer from "inquirer";

// Prompt the user for input
const answer = await inquirer.prompt([

    {
        message: "Enter the first number",
        type: "number",
        name: "firstNumber"
    },
    
    {
        message: "Enter the second number",
        type: "number",
        name: "secondNumber"
    },

    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
  
]);

// Log the answers to the console
console.log(answer);

// Perform the selected operation and display the result
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select a valid operator");
}
```

## Step-by-Step Explanation

1. **Shebang and Welcome Message**
    ```javascript
    #!/usr/bin/env node
    console.log("welcome to Ishaque Calculator");
    ```
    - The `#!/usr/bin/env node` line allows the script to be run directly from the command line.
    - `console.log("welcome to Ishaque Calculator");` prints a welcome message.

2. **Importing Inquirer**
    ```javascript
    import inquirer from "inquirer";
    ```
    - Import the `inquirer` module, which is used for interactive command-line prompts.

3. **Prompting User Input**
    ```javascript
    const answer = await inquirer.prompt([
        {
            message: "Enter the first number",
            type: "number",
            name: "firstNumber"
        },
        {
            message: "Enter the second number",
            type: "number",
            name: "secondNumber"
        },
        {
            message: "Select one of the operators to perform action",
            type: "list",
            name: "operators",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
    ]);
    ```
    - `inquirer.prompt` is used to ask the user for two numbers and an operation to perform.
    - The user's inputs are stored in the `answer` object.

4. **Logging the User's Answers**
    ```javascript
    console.log(answer);
    ```
    - Print the user's inputs to the console for verification.

5. **Performing the Calculation**
    ```javascript
    if (answer.operators === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    } else if (answer.operators === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    } else if (answer.operators === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    } else if (answer.operators === "Division") {
        console.log(answer.firstNumber / answer.secondNumber);
    } else {
        console.log("Please select a valid operator");
    }
    ```
    - Based on the selected operator, the corresponding calculation is performed.
    - The result is printed to the console.
    - If an invalid operator is selected (though not possible with the current choices), an error message is printed.
