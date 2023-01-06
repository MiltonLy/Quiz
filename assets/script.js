var startBtnEl = document.getElementById('startBtn');
var timerEl = document.getElementById('timer');
var questionsEl = document.getElementById('question');
var answersEl = document.getElementById('answers')
var shufflePrompt;
var currentPrompt;

function countdown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + " ";
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' '
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

startBtnEl.addEventListener("click", function(){
    startBtnEl.style.display = "none" 
    shufflePrompt = prompts.sort(()=>Math.random - .5);
    currentPrompt = 0
    countdown();
})

var prompts = [
    {
        question: "Where do you modify the background color on the page?",
        answer: [
            {text:"html", correct: false},
            {text:"css", correct: true},
            {text:"javascript", correct: false},
            {text:"jquery", correct: false},
        ]
    }
]

function nextPrompt(){
    nextQuestion(shufflePrompt[currentPrompt])
}

function nextQuestion(){

}