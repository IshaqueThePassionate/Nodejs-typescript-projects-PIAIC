# To-Do List Application

## Description

This is a simple command-line To-Do list application written in JavaScript using Node.js. It allows users to add tasks to their To-Do list interactively and continue adding tasks until they choose to stop.

## Installation

1. Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. Install the required package by running:
    ```bash
    npm install inquirer
    ```

## Usage

1. Save the script to a file, for example, `todo.js`.

2. Run the script using Node.js:
    ```bash
    node todo.js
    ```

## Code Explanation

```javascript
#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What do you want to add to your ToDos?",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more?",
      default: false,
    },
  ]);

  todos.push(addTask.todo);
  condition = addTask.addMore;
  console.log(todos);
}
```

## Step-by-Step Explanation

1. **Shebang and Importing Inquirer**
    ```javascript
    #! /usr/bin/env node
    import inquirer from "inquirer";
    ```
    - The `#!/usr/bin/env node` line allows the script to be run directly from the command line.
    - Import the `inquirer` module for interactive command-line prompts.

2. **Initializing Variables**
    ```javascript
    let todos = [];
    let condition = true;
    ```
    - `todos` is an array to store the user's tasks.
    - `condition` is a boolean variable that controls the loop, allowing the user to continue adding tasks until they choose to stop.

3. **Main Loop: Adding Tasks**
    ```javascript
    while(condition) {
      let addTask = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "What do you want to add to your ToDos?",
        },
        {
          name: "addMore",
          type: "confirm",
          message: "Do you want to add more?",
          default: false,
        },
      ]);

      todos.push(addTask.todo);
      condition = addTask.addMore;
      console.log(todos);
    }
    ```

    - The `while` loop continues as long as `condition` is `true`.
    - Inside the loop, `inquirer.prompt` is used to ask the user for a new task and if they want to add more tasks.
        - `todo`: Prompts the user to input a task.
        - `addMore`: Asks the user if they want to add more tasks, defaulting to `false`.
    - The new task is added to the `todos` array using `todos.push(addTask.todo)`.
    - `condition` is updated to the value of `addTask.addMore`, determining if the loop will continue.
    - The current list of tasks is printed to the console after each addition.
