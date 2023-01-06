var startBtnEl = document.getElementById('startBtn');
var timerEl = document.getElementById('timer');
var constainerEl = document.getElementById('container');
var questionsEl = document.getElementById('question');
var answersEl = document.getElementById('answers')
let shufflePrompt;
let currentPrompt;
var timeLeft = 75

function countdown() {
  
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

startBtnEl.addEventListener("click", startGame)

 function startGame(){
    startBtnEl.style.display = "none";
    //constainerEl.classList.remove('hide');
    shufflePrompt = questions.sort(()=>Math.random - .5);
    currentPrompt = 0
    countdown();
    setPrompt();
}

function setPrompt(){
    reset()
    nextPrompt(shufflePrompt[currentPrompt])
}

function nextPrompt(question){
    questionsEl.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button);
    })
}

function reset(){
    while (answersEl.firstChild){
        answersEl.removeChild(answersEl.firstChild)
    }
}

function selectAnswer(e){
    const selectedAnswer = e.target
    const correct = selectedAnswer.dataset.correct
    statusClass(document.body.children)
    Array.from(answersEl.children).forEach(button =>{
        statusClass(button.dataset.correct)
    })
}

function statusClass(element,correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.add('correct')
    element.classList.add('wrong')
}

const questions = [
    {
        question: "Where do you modify the background color on the page?",
        answer: [
            {text:"html", correct: false},
            {text:"css", correct: true},
            {text:"javascript", correct: false},
            {text:"jquery", correct: false},
        ]
    },
    {
        question: "How would you connect your script.js to your html?",
        answer: [
            {text:"a tag", correct: false},
            {text:"link tag", correct: false},
            {text:"div tag", correct: false},
            {text:"script tag", correct: true}
        ]
    }
]