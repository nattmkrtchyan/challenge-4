// need variables to track of quiz 
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;

// variables to reference html elements
// get question element
var questionEl = document.getElementById("Questions");
// get the timer el
var timerEl= document.getElementById("timer")
// get choice el
var  choiceEl= document.getElementById("Choices")
// get start btn el
var startEl= document.getElementById("startbtn")
// get submit btn el
var submitEl=document.getElementById("submitbtn")

// get feedback el
var  feedbackEl=document.getElementById("feedback")

// sound effects

// function to start quiz (hide scenes)
function startQuiz(){
// hide initial screen
  var initialEl=document.getElementById("startscreen");
// change initial screen to hidden by changing the class
initialEl.classList.add("Hidden"); 
// unhide the questions section by changing the class
questionEl.classList.remove("Hidden");
// start timer: look into set interval
timerID = setInterval(clockTick, 1000);
console.log(time, "time");
timerEl.textContent = time;
getQuestion();
}

// function get the questions
function getQuestion(){
    // get current question object from aray
    var currentQuestion = questions[currentQuestionIndex];
     // update title element with current question title
     var questiontitleEL=document.getElementById("questiontitle")
     questiontitleEL.textContent= currentQuestion.title;
    // clear out the choices element using innerHTML
    choiceEl.innerHTML="";
    // loop over choices
    for(var index = 0; index < currentQuestion.choices.length; index++){
        var currentChoice = currentQuestion.choices[index];
        // create a button for each choice
        var choiceBtn = document.createElement("button");
        choiceBtn.classList.add("choiceBtn");
        choiceBtn.setAttribute("value", currentChoice);
        choiceBtn.textContent = currentChoice;
        // attach click event listener to each choice
        choiceBtn.onclick = questionClick;
        // display choices on page
        choiceEl.append(choiceBtn);
    }
}

// temporary
startEl.addEventListener("click", startQuiz);

function questionClick(){
    console.log('hello there');
    // when user clicks answer
    // if the answer is wrong
    // decrement time
}


function clockTick(){
    time--;
    timerEl.textContent = time;
    if(time <= 0){
        endQuiz();
    }
}










// function handle button click
// function to end the quiz
// function to update the time
// function to save high schores
// function check for user pressing enter on keyboard



//website open start screen is visible (choices & end screen is hidden) once start button is clicked toggle start screen to hidden and remove hidden class from choices//




