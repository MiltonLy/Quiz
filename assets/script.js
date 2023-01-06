var startBtnEl = document.getElementById('startBtn')
var body = document.body;
var timer = document.getElementById('timer')
var question = document.getElementById('questions')

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
})

function prompt1 (){
    var q1a1 = document.createElement("button");
    var q1a2 = document.createElement("button");
    var q1a3 = document.createElement("button");
    var q1a4 = document.createElement("button");
    
}
question.appendChild()