var startBtnEl = document.getElementById('startBtn');
var timerEl = document.getElementById('timer');
var constainerEl = document.getElementById('questionContainer');
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
    constainerEl.classList.remove('hide');
    shufflePrompt = questions.sort(()=> Math.random() - .5);
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
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
    },
    {
        question: "Which css property would you use to show a container?",
        answer: [
            {text:"justify-content", correct:false},
            {text:"flex", correct: false},
            {text:"display", correct: true},
            {text:"font", correct: false}
        ]
    },
    {
        question: "What css property would you use to make a shadow?",
        answer: [
            {text:"shadow", correct: true},
            {text:"black marker", correct: false},
            {text:"paint", correct: false},
            {text:"fountain pen",correct: false}
        ]
    },
    {
        question: "How would you link css to your html?",
        answer: [
            {text:"link",correct: true},
            {text:"script", correct: false},
            {text:"article", correct: false},
            {text:"div", correct: false}
        ]
    },
    {
        question: "What does refactoring mean?",
        answer: [
            {text:"cutting up a snippit of code",correct: false},
            {text:"copying code", correct: false},
            {text:"cleaning up code", correct: false},
            {text:"delete code", correct: false}
        ]
    },
    {
        question: "What are normally at the top of a page?",
        answer: [
            {text:"article", correct: false},
            {text:"body", correct:  false},
            {text:"title", correct: false},
            {text:"nav bar", correct: true}
        ]
    },
    {
        question: "What is an array?",
        answer: [
            {text:"a random number", correct: false},
            {text:"a list of items",correct: true},
            {text:"a variable", correct: false},
            {text:"a JSON", correct: false}
        ]
    },
    {
        question: "Where can you manipulate the webpage?",
        answer: [
            {text:"python",correct: false},
            {text:"css", correct: false},
            {text:"html", correct: false},
            {text:"javascript", correct: true}
        ]
    },
    {
        question: "What does JSON do?",
        answer: [
            {text:"creates an alert", correct: false},
            {text:"take an array and makes it a string",correct: true},
            {text:"grab an object from the html by their ID",correct: false},
            {text:"derulo", correct: false}
        ]
    }
]