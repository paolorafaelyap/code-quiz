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

// button variables

let question = document.getElementById("text");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");




firstQuestion()

function firstQuestion()
{
  question.appendChild(document.createTextNode("Who had the high ground over Anakin?"));
  option1.appendChild(document.createTextNode("Jar-Jar Binks"));
  option2.appendChild(document.createTextNode("Shaquille O'Neal"));
  option3.appendChild(document.createTextNode("Obi-Wan Kenobi"));
  option4.appendChild(document.createTextNode("X-Wing @Aliciousness"));

 option1.addEventListener("click", function(){
   
  
  secondQuestion();
 });
 
 option2.addEventListener("click", function(){
   
  secondQuestion();
 });

 option3.addEventListener("click", function(){
   
  secondQuestion();
 });

 option4.addEventListener("click", function(){
   
  secondQuestion();
 });

}


function secondQuestion()
{
  question.appendChild(document.createTextNode("Who was born on the planet Titan?"));
  option1.appendChild(document.createTextNode("Thanos"));
  option2.appendChild(document.createTextNode("Jon Snow"));
  option3.appendChild(document.createTextNode("Ned Flanders"));
  option4.appendChild(document.createTextNode("Hercules"));

  option1.addEventListener("click", function(){
    
    thirdQuestion();
  });
  
  option2.addEventListener("click", function(){
  
    thirdQuestion();
  });
 
  option3.addEventListener("click", function(){
    
    thirdQuestion();
  });
 
  option4.addEventListener("click", function(){
    
    thirdQuestion();
  });
};

function thirdQuestion(){
  question.appendChild(document.createTextNode("Who's awesome?"));
  option1.appendChild(document.createTextNode("not me"));
  option2.appendChild(document.createTextNode("not you"));
  option3.appendChild(document.createTextNode("not I"));
  option4.appendChild(document.createTextNode("me"));

  option1.addEventListener("click", function(){
    
  });
  
  option2.addEventListener("click", function(){
    
  });
 
  option3.addEventListener("click", function(){
    
  });
 
  option4.addEventListener("click", function(){
    
  });
} 

    //},
    //{
     //   question: "Who's awesome?",
      //  choices: {
       //     a: "not me", b: "not you", c: "not I", d: "me"},
       // correctAnswer: ("d")
   // }
 // ]
    

// display the questions on the screen   