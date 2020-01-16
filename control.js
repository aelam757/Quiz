var questions = [{

    question: "1.What is the language that describes the style of an HTML document?",
    choices: ["CSS", "AJAX", "PYTHON", "SQL"],
    answer: 0
},
{
    question: "2.What is the programming language of HTML and the Web?",
    choices: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    answer: 3
},
{
    question: "3.What is the most popular HTML,CSS, and Javascript framework?",
    choices: ["jQuery", "Bootstrap", "PHP", "SQ"],
    answer: 1
},
{
    question: "4.What greatly simplifies Javascript programming?",
    choices: ["HTML", "CSS", "jQuery", "Bootstrap"],
    answer: 2
},
{
    question: "5.What is the worlds largest web developer site?",
    choices: ["w3schools", "Stack Overflow", "GitLab", "Github"],
    answer: 0
},
];

let currentQuestion = 0;
let viewingAn = 0;
let correctAnswer = 0;
let quizOver = false;
let SelectedAnswer = [];
let c = 195;
let t;

$(document).ready(function () {

    //Question Display
    displayCurrentQuestion();
    $(this).find(".question").hide();

    timedCount();


    if (!quizOver) {
        if (currentQuestion == 0) { return false; }

        currentQuestion--;
        if (currentQuestion < questions.length) {
            displayCurrentQuestion();
        }
    } else {
        if (viewAns == 0) { return false; }
        currentQuestion = 0; viewingAn = 0;
        viewResults();
    }
});

$(this).find(".nextBtn").on("click", function () {
    if (!quizOver) {
        let val = $("input[type = 'radio']: checked").val();

        if (val == undefined) {
            $(document).find(".quizMessage").text("Please select a answer");
            $(document).find(".quizMessage").show();
        }
        else {
            //Remove message, not sure if I need to call this each time.
            $(dcoument).find(".quizMessage").hide();
            if (val == questions[currentQuestion].correctAnswer) {
                correctAnswer++;
            }
            SelectedAnswer[currentQuestion] = val;

            currentQuestion++;
            if (currentQuestion >= 1) {
            }
            if (currentQuestion < questions.length) {
                displayCurrentQuestion();
            }
            else {
                displayScore();
                $('#Timeshown').html('Time is UP!');
                $('#timer').html("Your Score: " + correctAnswer + "Out of:" + questions.length);
                c = 200;
                $(document).find(".nextBtn").text("Play Again?");
                quizOver = true;
                return false;
            }

        }

    }
    else {
        // Next button will restart the quiz("Play agian?")
        quizOver = false; $('#TimeShown').html('TimeRemaing:'); SelectedAnswer = [];
        $(document).find(".nextBtn").text("Next Question");
        resetQuiz();
        viewingAn = 0;
        displayCurrentQuestion();
        hide();
    }
});


function timeCount() {
    if (c == 200) {
        return false;
    }

    let minutes = parseInt(c / 60) % 50;
    let seconds = c % 60;
    let result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    $("#timer").html(result);

    if (c == 0) {
        displayScore();
        $('#TimeShown').html('Time is UP!');
        $('#timer').html("You scored: " + correctAnswer + "Out of: " + questions.length);
        c = 195
        $(document).find(".nextBtn").text("Play Again?");
        quizOver = true;
        return false;
    }
}

if (c == 0) {
    if (!quizOver) {
        let val = $("input[type= 'radio]:checked").val();
        if (val == questions[currentQuestion].correctAnswer) {
            correctAnswers++;
        }
        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayCurrentQuestion();
            c = 20;
        }
        else {
            displayScore();
            $('#timer').html('');
            c = 25;
            $(document).find(".nextBtn").text("Play Again?");
            quizOver = true;
            return false;
        }

    }
    else {
        quizOver = false;
        $(document).find(".nextBtn").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
    }
}
c = c - 1;
t = setTimeout(function () {
    timedCount()
}, 1000);


// This is the function for the quetions and choices
function displayCurrentQuestion() {
    if (c == 200) { c = 195; timedCount(); }
    let question = questions[currentQuestion].question;
    let questionClass = $(document).find(".grid > .question");
    let choiceList = $(document).find(".grid > .question");
    let numbChoices = questions[currentQuestion].choices.length;
    $(questionClass).text(question);
    let choice;
}

function resetQuiz();
{
    currentQuestion = 0;
    correctAnswer = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".grid > .answer").text("Your Score: " + correctAnswer + "Out of: " + questions.length);
    $(document).find(".grid > .answer").show();
}

function hideScore() {
    $(dcoument).find(".answer").hide();
}

// Display the current question and choices
function viewResults() {
    if (currentQuestion == 20) { currentQuestion = 0; return false; }
    if (viewingAn == 1) { return false; }

    hideScore();
    let question = questions[currentQuestion].question;
    let questionClass = $(document).find(".grid > .question");
    let choicesList = $(document).find(".grid > .choiceList");
    let numbChoices = questions[currentQuestion].choices.length;
    $(questionClass).text(question);
    let choice;

    currentQuestion++;

    setTimeout(function () {
        viewResults();
    }, 5000);
}