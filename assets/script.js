var startBtnEl = document.getElementById('startBtn');
var timer = document.getElementById('timer');
var question = document.getElementById('question');

var qQuestion = document.createElement("p") 
var qA1 = document.createElement("button");
var qA2 = document.createElement("button");
var qA3 = document.createElement("button");
var qA4 = document.createElement("button");

question.appendChild(qQuestion);
qQuestion.appendChild(qA1);
qQuestion.appendChild(qA2);
qQuestion.appendChild(qA3);
qQuestion.appendChild(qA4);

function countdown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timer.textContent = timeLeft + " ";
        timeLeft--;
      } else if (timeLeft === 1) {
        timer.textContent = timeLeft + ' '
        timeLeft--;
      } else {
        timer.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

startBtnEl.addEventListener("click", function(){
    startBtnEl.style.display = "none" 
    countdown();
    prompt1();
})

function prompt1 (){
    var q1Question = qQuestion
    var q1A1 = qA1
    var q1A2 = qA2
    var q1A3 = qA3
    var q1A4 = qA4

    q1Question.textContent = "Where do you modify the background color on the page?";
    q1A1.textContent = "css";
    q1A2.textContent = "html";
    q1A3.textContent = "javascript";
    q1A4.textContent = "node";
}

function prompt2(){

}