# Currency Converter Application

## Description

This is a command-line currency converter application written in JavaScript using Node.js. It allows users to convert amounts between different currencies interactively.

## Installation

1. Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. Install the required packages by running:
    ```bash
    npm install inquirer chalk
    ```

## Usage

1. Save the script to a file, for example, `currencyConverter.js`.

2. Run the script using Node.js:
    ```bash
    node currencyConverter.js
    ```

## Code Explanation

```javascript
#!/usr/bin/env node
// HashBang

import inquirer from "inquirer";
import chalk from "chalk";

interface ConversionRates {
    [key: string]: {
        [key: string]: number;
    };
}

interface ConversionAnswer {
    from: "PKR" | "GBP" | "USD" | "EURO" | "QAR";
    to: "GBP" | "PKR" | "USD" | "EURO" | "QAR";
    amount: number;
}

let conversion: ConversionRates = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "QAR": 0.013,
        "EURO": 0.0033,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 349.23,
        "QAR": 4.58,
        "EURO": 1.17,
        "GBP": 1
    },
    "USD": {
        "PKR": 277.83,
        "GBP": 0.80,
        "QAR": 3.64,
        "EURO": 0.93,
        "USD": 1
    },
    "QAR": {
        "PKR": 76.29,
        "USD": 0.27,
        "GBP": 0.21,
        "EURO": 0.26,
        "QAR": 1
    },
    "EURO": {
        "PKR": 299.12,
        "GBP": 0.86,
        "USD": 1.08,
        "QAR": 3.92,
        "EURO": 1
    }
}

async function startLoop() {
    let again: { cont: "Yes" | "No" };
    do {
        const answer: ConversionAnswer = await inquirer.prompt([
            {
                type: "list",
                name: "from",
                choices: ["PKR", "USD", "GBP", "QAR", "EURO"],
                message: "Select your currency :"
            },
            {
                type: "list",
                name: "to",
                choices: ["PKR", "USD", "GBP", "QAR", "EURO"],
                message: "Select your conversion currency :"
            },
            {
                type: "number",
                name: "amount",
                message: "Enter your conversion amount:"
            }
        ]);
        await convertAmount(answer);
        again = await inquirer.prompt([
            {
                type: "list",
                name: "cont",
                choices: ["Yes", "No"],
                message: "Do you want to continue?"
            }
        ]);
    } while (again.cont === "Yes");
}

async function convertAmount(answer: ConversionAnswer) {
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(chalk.green(`The converted amount of ${amount} ${from} in ${to} is ${result}`));
    } else {
        console.log(chalk.red(`Invalid Inputs.`));
    }
}

startLoop();
```

## Step-by-Step Explanation

1. **Shebang and Importing Modules**
    ```javascript
    #!/usr/bin/env node
    import inquirer from "inquirer";
    import chalk from "chalk";
    ```
    - The `#!/usr/bin/env node` line allows the script to be run directly from the command line.
    - Import the `inquirer` module for interactive command-line prompts.
    - Import the `chalk` module for colored console output.

2. **Type Definitions**
    ```javascript
    interface ConversionRates {
        [key: string]: {
            [key: string]: number;
        };
    }

    interface ConversionAnswer {
        from: "PKR" | "GBP" | "USD" | "EURO" | "QAR";
        to: "GBP" | "PKR" | "USD" | "EURO" | "QAR";
        amount: number;
    }
    ```
    - Define `ConversionRates` to structure the conversion rates data.
    - Define `ConversionAnswer` to type the user's input.

3. **Conversion Rates Data**
    ```javascript
    let conversion: ConversionRates = {
        "PKR": {
            "USD": 0.0036,
            "GBP": 0.0029,
            "QAR": 0.013,
            "EURO": 0.0033,
            "PKR": 1
        },
        "GBP": {
            "USD": 1.26,
            "PKR": 349.23,
            "QAR": 4.58,
            "EURO": 1.17,
            "GBP": 1
        },
        "USD": {
            "PKR": 277.83,
            "GBP": 0.80,
            "QAR": 3.64,
            "EURO": 0.93,
            "USD": 1
        },
        "QAR": {
            "PKR": 76.29,
            "USD": 0.27,
            "GBP": 0.21,
            "EURO": 0.26,
            "QAR": 1
        },
        "EURO": {
            "PKR": 299.12,
            "GBP": 0.86,
            "USD": 1.08,
            "QAR": 3.92,
            "EURO": 1
        }
    }
    ```
    - Store the conversion rates for different currencies.

4. **Main Function: startLoop**
    ```javascript
    async function startLoop() {
        let again: { cont: "Yes" | "No" };
        do {
            const answer: ConversionAnswer = await inquirer.prompt([
                {
                    type: "list",
                    name: "from",
                    choices: ["PKR", "USD", "GBP", "QAR", "EURO"],
                    message: "Select your currency :"
                },
                {
                    type: "list",
                    name: "to",
                    choices: ["PKR", "USD", "GBP", "QAR", "EURO"],
                    message: "Select your conversion currency :"
                },
                {
                    type: "number",
                    name: "amount",
                    message: "Enter your conversion amount:"
                }
            ]);
            await convertAmount(answer);
            again = await inquirer.prompt([
                {
                    type: "list",
                    name: "cont",
                    choices: ["Yes", "No"],
                    message: "Do you want to continue?"
                }
            ]);
        } while (again.cont === "Yes");
    }
    ```
    - `startLoop` prompts the user to input the currencies and amount for conversion.
    - It continues to prompt the user until they choose to stop.

5. **Function: convertAmount**
    ```javascript
    async function convertAmount(answer: ConversionAnswer) {
        const { from, to, amount } = answer;
        if (from && to && amount) {
            let result = conversion[from][to] * amount;
            console.log(chalk.green(`The converted amount of ${amount} ${from} in ${to} is ${result}`));
        } else {
            console.log(chalk.red(`Invalid Inputs.`));
        }
    }
    ```
    - `convertAmount` calculates the converted amount using the provided conversion rates.
    - It prints the result using `chalk` for colored output.

6. **Starting the Application**
    ```javascript
    startLoop();
    ```
    - Call `startLoop` to begin the currency conversion process.
