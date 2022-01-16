// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// =======================================


// GIVEN I am taking a code quiz
// Set of questions:
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    
    {
        question: "______ JavaScript is also called client-side JavaScript.", 
        choices: ["a. Microsoft", "b. Navigator", "c. LiveWire", "d. Native"],
        answer: "b. Navigator"
    },
    
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        choices: ["a. The User's machine running a web browser", "b. The Web server", "c. A central machine deep within Netscape's corporate offices", "d. None of the above"],
        answer: "a. The User's machine running a web browser"
    },
    
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
        
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        choices: ["a. Microsoft", "b. Navigator", "c. LiveWire", "d. Native"],
        answer: "b. Navigator"
    },
    
    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        choices: ["a. Microsoft” “b. Navigator", "c. LiveWire", "d. Native"],
        answer: "c. LiveWire"
    },
            
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: ["a. Storing numbers, dates, or other values", "b. Varying randomly", "c. Causing high-school algebra flashbacks", "d. None of the above"],
        answer: "a. Storing numbers, dates, or other values"
    },
            
    {        
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        choices: ["a. Client-side", "b Server-side", "c. Local", "d. Native"],
        answer: "a. Client-side"
    },       
    
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        choices: ["a. Validating a form", "b. sending a form's contents by email", "c. storing the form's contents to a database file on the server", "d. None of the above"],
        answer: "c. storing the form's contents to a database file on the server"
     },  
    
    {
        question: "Which of the following are capabilities of functions in JavaScript?", 
        choices: ["a. Return a value", "b. Accept parameters and Return a value", "c. Accept parameters", "d. None of the above"],
        answer: "c. Accept parameters"
    },
    
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        choices: ["a. 2names", "b. _first_and_last_names", "c. FirstAndLast", "d. None of the above"], 
        answer: "a. 2names"
    },
    
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choices: ["a. <SCRIPT>", "b. <BODY>", "c. <HEAD>", "d. <TITLE>",],
        answer: "a. <SCRIPT>"
    },
    
    {   
        question: "How does JavaScript store dates in a date object?", 
        choices: ["a. The number of milliseconds since January 1st, 1970", "b. The number of days since January 1st, 1900", "c. The number of seconds since Netscape's public stock offering.", "d. None of the above"],
        answer: "a. The number of milliseconds since January 1st, 1970"
    },      
    
    {
        question: "Which of the following attribute can hold the JavaScript version?", 
        choices: ["a. LANGUAGE", "b. SCRIPT", "c. VERSION", "d. None of the above"],
        answer: "a. LANGUAGE"
    },      
            
    {   
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        choices: ["a. System.out.println('Hello World')", "b. println ('Hello World')", "c. document.write('Hello World')", "d. response.write('Hello World')"],
        answer: "c. document.write('Hello World')"
    },
    
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <scripting>", "c. <script>", "d. <javascript>"],
        answer: "c. <script>"
    }, 
]

// VARIABLES

// Start Button Variables
var startDiv = getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

// Timer Variables
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeUp = document.getElementById("timeUp");
var totalTime = 61;

// Question Variables
var questionDiv = document.getElementById("question-container");
var questionText = document.getElementById("question");
var answerA = document.getElementById(btn0);
var answerB = document.getElementById(btn1);
var answerC = document.getElementById(btn2);
var answerD = document.getElementById(btn3);


// High Score Variables


// FUNCTIONS


// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function newQuiz() {

};

function showQuiz() {

}

function nextQuestion() {

}

function checkAnswer() {

}

// answers functions
function answerA() {checkAnswer(0);}
function answerB() {checkAnswer(1);}
function answerC() {checkAnswer(2);}
function answerD() {checkAnswer(3);}

function gameOver() {

}

function saveHighScore() {

}

// EVENT LISTENERS
startQuizBtn.addEventListener("click", newQuiz);
answerA.addEventListener("click", chooseA);
answerB.addEventListener("click", chooseB);
answerC.addEventListener("click", chooseC);
answerD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});