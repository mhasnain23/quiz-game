#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const questions = [
    {
        question: "What is the capital of france",
        choices: ["Paris", "London", "Barlidn", "Madrid"],
        answer: "Paris",
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Jupiter", "Mars", "Earth", "Saturn"],
        answer: "Jupiter",
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
    },
    {
        question: "Who developed TypeScript?",
        choices: ["Microsoft", "Apple", "Google", "Facebook"],
        answer: "Microsoft",
    },
    {
        question: "Which animal can fly?",
        choices: ["Bat", "Dog", "Elephant", "Lion"],
        answer: "Bat",
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Mercury", "Neptune"],
        answer: "Mars",
    },
];
async function startQuiz() {
    let score = 0;
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                name: "answer",
                type: "input",
                message: question.question,
                choices: question.choices,
            }
        ]);
        if (answer.answer === question.answer) {
            score++;
            console.log(chalk.bold.italic.green(("Correct!")));
        }
        else {
            console.log(chalk.bold.italic.red((`Incorrect. The correct answer is ${question.answer}`)));
        }
        console.log(chalk.bold.italic.blue((`Quiz Ended. Your Score is ${score}/${questions.length}`)));
    }
}
startQuiz();
