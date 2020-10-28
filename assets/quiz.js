//this javascript will show the questions and choices on quiz.html
// need to create a function for the timer
// when this page is opened, the timer starts counting
// another objective is to make sure timer doesn't restart when refreshing

//set variable to 76

var countDownTime = 76
// Function to update the count down every 1 second, so the countdown starts at 75s
var x = setInterval(function() {

  if (countDownTime > 0){// keep subtracting timer by 1 if still greater than 0
    countDownTime--;
  }
// Displays the timer on the page 
  document.getElementById("countdown").innerHTML = countDownTime + " seconds";
 

  // If the count down is finished, write some text to show that time has expired.
  if (countDownTime == 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TIME'S UP!";
  }
}, 1000);

//const before starting the function

const question=document.getElementById("text");

const choiceA= document.getElementById("option1");
const choiceB= document.getElementById("option2");
const choiceC= document.getElementById("option3");
const choiceD= document.getElementById("option4");

// create array for questions/choices/answers

let questions = [
  {
    question: "Who had the high ground over Anakin?",
    choiceA: "Jar-Jar Binks",
    choiceB: "Shaquille O'Neal",
    choiceC: "Obi-Wan Kenobi",
    choiceD: "X-Wing @Aliciousness",
    correct: "c"
  },
  {
    question: "Who was born on the planet Titan?",
    choiceA: "Thanos",
    choiceB: "Jon Snow",
    choiceC: "Ned Flanders",
    choiceD: "Hercules",
    correct: "a"
  },
  {
    question: "Who's awesome?",
    choiceA: "not me",
    choiceB: "not you",
    choiceC: "not I",
    choiceD: "me",
    correct: "d"
  }
]


// variables before rendering questions

const lastQIndex = questions.length - 1;
let currentQ = 0;
let score = 0;

//function for rendering questions
function renderQuestion()
{
  let q = questions[currentQ];
  question.innerHTML = "<h1>" + q.question + "</h1>";
  choiceA.innerHTML = "<button>" + q.choiceA + "</button>";
  choiceB.innerHTML = "<button>" + q.choiceB + "</button>";
  choiceC.innerHTML = "<button>" + q.choiceC + "</button>";
  choiceD.innerHTML = "<button>" + q.choiceD + "</button>";

  nextQuestion();

}

renderQuestion();

//code to get next question

function nextQuestion(){
  choiceA.addEventListener("click", function()
  {
      currentQ ++;
      renderQuestion();
  })

  choiceB.addEventListener("click", function()
  {
      currentQ ++;
      renderQuestion();
  })
  
  choiceC.addEventListener("click", function()
  {
      currentQ ++;
      renderQuestion();
  })

  choiceD.addEventListener("click", function()
  {
      currentQ ++;
      renderQuestion();
  })
}

// next question still does not appear when clicking on any of the choices (solved)
  //quiz now needs to keep track of scores
// Timer works
// Still need to keep track of score