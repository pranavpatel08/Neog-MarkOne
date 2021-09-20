var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Pranav",
    score: 5,
  },

  {
    name: "Pattu",
    score: 4,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Goa"
}, {
  question: "What is my favorite sport? ",
  answer: "Basketball"
},
{
  question: "Which game do I play the most? ",
  answer: "Chess"
},
{
  question: "Where am I studying right now? ",
  answer: "Manipal University Jaipur"
},
{
  question: "My favorite food? ",
  answer: "pizza"
}];

function welcome() {
 var userName = readlineSync.question("Hey, what's your name? ");

  console.log("Welcome "+ userName );

  if(readlineSync.keyInYN('Are you excited to play DO YOU KNOW Pranav??')) {
    console.log("-------------");
      game(); 
      showScores();
    }
  else
    console.log("BYE");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong! :(");
   
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Congo! You SCORED: ", score);

  console.log("Try to beat the High Scores:");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();