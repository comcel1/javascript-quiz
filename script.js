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
        choices: ["a. Microsoft", "b. Navigator", "c. LiveWire", "d. Native"],
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

// timer variables
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

// start quiz variables
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

// question and answer variables
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

// score variables
var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var totalTime = 60;
function newQuiz() {
    questionIndex = 0;
    totalTime = 60;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
};


// quiz start functions
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // if answer is correct, add one point to score
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        // if answer is wrong, deduct 10 seconds from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if all questions have been answered or time runs out, game over
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

// Game Over function
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // If no initials, alert user
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // Convert to text
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // Show high scores stored in local storage
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there are any high scoresGot in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

// EVENT LISTENERS

// start quiz and answer listeners
startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

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
    listOfHighScores.setAttribute("style")
});