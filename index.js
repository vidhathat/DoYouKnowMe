var readlineSync = require("readline-sync");

var score = 0;

var highScores=[
  {
  name: "Vidhu",
  score: 40,
},
{
  name: "Vyshu",
  score: 30,
},
]

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Vidhatha?");
}


var questions = [{
  question:"Who is his favourite Entrepreneur? ",
  answer: "Sam Altman"
},
{
  question:" what's his favourite video game? ",
  answer:"Witcher 3"
},
{
  question: "whats his favourite superhero? ",
  answer:"Batman"
},
{
  question:"Whats his favourite food item? ",
  answer: "Biryani"
}];


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { 
    console.log("You are right!");
    score = score + 10;
    
  } else {
    console.log("You should start talking to vidhu more!");
   
  }
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("Check out the high scores, if you scored more than anyone int the list, ss me the score and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


