var readlineSync=require('readline-sync');
var chalk=require('chalk');
var score=0;

var userName = readlineSync.question(chalk.blueBright("Please Enter your name: "));
console.log(chalk.bgWhite.redBright.underline.bold("Hey " +userName, "welcome to the quiz."));
console.log(chalk.green("Let's see how well you know Ijas"));
console.log("================================");

function quiz(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log(chalk.bgGreenBright.black.bold("\n" +chalk.underline.bold(answer)+ " is right answer!"));
    score=score+2;
    console.log("\n"+"your current score: " +score);
  }
  else
  {
    console.log("You are wrong!");
    score=score-0;
    console.log("Your current score is: " +score)
  }
  console.log("______________________")
  console.log();
}

var questions = 
[
  {
  question: chalk.yellowBright("where do Ijas live? "),
  answer: "bangalore"
  },

  {
  question: "Which college do Ijas study? " ,
  answer: "rrce"
  },

  {
  question: "What is the favouite sport of Ijas? " ,
  answer: "cricket"
  },

  {
  question: "favourite superhero? " ,
  answer: "logan"
  },

  {
  question: "favourite food? " ,
  answer: "biryani"
  }
];

for(var i=0;i<questions.length;i++)
{
  var currentQuestion= questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.yellowBright("HOORAY!! YOU SCORED " +score ,"out of 10"));

console.log("______________________");
console.log();
console.log(chalk.magentaBright.bold.underline("CHECK OUT THE HIGH SCORES"));

// var ijas = {
//     name:"ijas",
//     score:10,
//   }
// var sadik = {
//     name:"sadik",
//     score:9,
//   }

var highScores=[
 {
    name:"ijas",
    score:10,
 },
 {
    name:"akash",
    score:08,
 }
 ];

for(var i=0;i<highScores.length;i++)
{
  var highscore=highScores[i];
  console.log("Name: " , highscore.name);
  console.log("Score: " , highscore.score);

}







