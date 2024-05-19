#!/usr/bin/env node
//HashBang 
import inquirer from "inquirer";
let conversion = {
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
};
async function startLoop() {
    let again;
    do {
        const answer = await inquirer.prompt([
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
async function convertAmount(answer) {
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(`The converted amount of ${amount} ${from} in ${to} is ${result}`);
    }
    else {
        console.log(`Invalid Inputs.`);
    }
}
startLoop();
