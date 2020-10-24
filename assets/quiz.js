//this javascript will show the questions and choices on quiz.html
// need to create a function for the timer
// when this page is opened, the timer starts counting
// another objective is to make sure timer doesn't restart when refreshing

//function for countdown timer

var countDownTime = 76
// Update the count down every 1 second
var x = setInterval(function() {

  if (countDownTime > 0){// Get today's date and time
 
    countDownTime--;

  // Find the distance between now and the count down date
  
  }

  document.getElementById("countdown").innerHTML = countDownTime + "s ";
  // Display the result in the element with id="demo"
  //document.getElementById("countdown").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (countDownTime < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//setting a constant that holds an array for all multiple choice questions
const quiz = [
    {
        question: "Who had the high ground over Anakin?",
        choices:{
            a: "Jar-Jar Binks", b: "Shaquille O'Neal", 
            c: "Obi-Wan Kenobi", d: "X-Wing @Aliciousness"},
        correctAnswer: ("c")
    },
    {
        question: "Who was born on the planet Titan?",
        choices:{
            a: "Thanos", b: "Jon Snow", c: "Ned Flanders", d:"Hercules"},
        correctAnswer: ("a")
    },
    {
        question: "Who's awesome?",
        choices: {
            a: "not me", b: "not you", c: "not I", d: "me"},
        correctAnswer: ("d")
    }
];