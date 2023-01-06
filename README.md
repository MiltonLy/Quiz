# simple-quiz

## Technology Used

Technology Used
Resource URL

- HTML [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS  [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 
- Git  [https://git-scm.com/](https://git-scm.com/)
- JavaScript[https://www.w3schools.com/js/default.asp]
(https://www.w3schools.com/js/default.asp)

## Description

How well do you know your basic coding skills? Want to find out? Come take this quiz to find out how well you know some basic coding questions!

## Usage Instructions

This project was made to test my javascript skills and how well I was able to impliment everything I learned in class. 

```
 <div class="container">
        <div id="questionContainer" class="hide">
            <div id="question">Question</div>
            <div id="answers"class="btn">
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
            </div>
        </div>
        
        <div class="controls">
            <button id="startBtn">START!</button>
            <button id="nextBtn" class="hide">Next</button>
        </div>
    </div>
```
The code about is just to point out all the HTML and different class so it will be easier to manipulate later in our style.css and script.js.

```
var startBtnEl = document.getElementById('startBtn');
var nextBtnEl = document.getElementById('nextBtn');
var timerEl = document.getElementById('timer');
var constainerEl = document.getElementById('questionContainer');
var questionsEl = document.getElementById('question');
var answersEl = document.getElementById('answers')
let shufflePrompt;
let currentPrompt;
var timeLeft = 75
```
These are from my script.js that just makes a variable that refers back to a specific element on the HTML page.

```
startBtnEl.addEventListener("click", startGame)
nextBtnEl.addEventListener('click', ()=>{
    currentPrompt++;
    setPrompt();
})
```
This is some examples of event listeners that we just learned. Event listeners are a way for our javascript to know when we do something to the keyboard or mouse and code something happening back to the webpage.

## Learning Point

This was a very difficult assignment where I had to plug and play everything i learned and mix and match seeing which one works and which one doesnt. Overall this might not be up to par of what the assignment required but I am proud of how far I got on it.

## Author Info

Milton Ly

Github] https://github.com/MiltonLy