#!/usr/bin/env node
console.log("welcoome to Ishaque  Calculator");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter the first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter the second number",
        type: "number",
        name: "secondeNumber"
    },
    
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"]
    },
]);
console.log(answer);
// conditional statment
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondeNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondeNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondeNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.operators / answer.secondeNumber);
}
else
    ("please select a valid operator");
