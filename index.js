const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

let score = 0;

let userName = readlineSync.question("What is Your Name? ");
console.log("***************");
log(chalk.bgHex('#9370DB').bold(`Welcome ${userName} to the CSS Quiz`));
console.log("***************");

// Quiz Logic
function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    log(chalk.bgKeyword("yellow").keyword('black').bold("You're right!"));
    score++
  } else {
    log(chalk.bgKeyword("red").keyword('white').bold("You're wrong!"));
  }
    console.log("Your score is: ", score);
    console.log("-----------------");
}

// Question's List
let questionBank = [
  {
    question: `Which of the following is a component of CSS style rule?
    a)Selector
    b)Property
    c)Value
    d)All of the above \n `,
    answer: "d"
  }, {
    question: `Which of the following is a way to associate styles with your HTML document?
    a)External CSS - The Element
    b)Imported CSS - @import Rule
    c)Both of the above.
    d)None of the above. \n`,
    answer: "c"
  }, {
    question: `Which of the following is correct about Hex Code format of CSS colors?
    a)The first two digits(RR) represent a red value.
    b)The next two are a green value(GG).
    c)The last are the blue value(BB).
    d)All of the above. \n`,
    answer: "d"
  }, {
    question: `Which of the following property is used to control the repetition of an image in the background?
    a)background-color
    b)background-image
    c)background-repeat
    d)background-position \n`,
    answer: "c"
  }, {
    question: `Which of the following property is used to increase or decrease how bold or light a font appears?
    a)font-family
    b)font-style
    c)font-variant
    d)font-weight \n`,
    answer: "d"
  }, {
    question: `Which of the following property is used to set the width of an image?
    a)border
    b)height
    c)width
    d)-moz-opacity \n`,
    answer: "c"
  }
];

// HighScorer List
let highScores = [
  {
    name: "Bhavesh",
    score: "6"
  }, {
    name: "Rushab",
    score: "5"
  }
]

// Looping Over Questions
for (let i = 0; i < questionBank.length; i++) {
  let currentQuestion = questionBank[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}

// Total Score
log(chalk.bgHex('#87CEEB').keyword('black').bold("You Did It!! Your Total Score is: ", score));

// Checking highScores
for(let i=0;i<highScores.length;i++) {
let currentPlayer = highScores[i];
if(currentPlayer.score < score)
  {
  log(chalk.bgHex('#FF8C00').keyword('black').bold('Congrats! You have beaten '+ currentPlayer.name));
  console.log('Please send your winning screenshot!')
  }
}
