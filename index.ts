#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";


console.log(chalk.bold.yellow(`Currency Converter`));

const currency:any = {
    USD:1,
    EUR:0.91,
    PKR:280,
    INR:74.57
}

let answer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    choices: ["USD", "EUR", "PKR", "INR"],
    message: "From currency:",
  },
  {
    name: "to",
    type: "list",
    choices: ["USD", "EUR", "PKR", "INR"],
    message: "To currency:",
  },
  {
    name: "amount",
    type: "number",
    message: "Enter Your amount:",
  }
]);

let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount/fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bold.red(convertedAmount));