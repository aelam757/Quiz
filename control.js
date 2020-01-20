let currentQuestion = 0;
let viewingAn = 0;
let correctAnswer = 0;
let quizOver = false;
let c = 195;
let t;
let choicesList = $(this).siblings("#choiceList");
let questionClass = $(this).siblings("#question");
let answer = $(this).siblings(".answer");
let timer = document.getElementById("timer")

$(document).ready(function () {

    let questions = [{

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
    

    displayCurrentQuestion();
    //$(this).find(".question");
    resetQuiz();
    displayScore();
    displaychoicesList()

    function displayCurrentQuestion() {
        $("#question").text(questions[currentQuestion].question);
        console.log(questions)
    }
    function displaychoicesList(){
        $("#choiceList").text(choiceList[currentQuestion],".answer");
        console.log(choicesList)
        console.log(answer)
    }

    
    function resetQuiz()
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
        $(document).find(".answer");
    }if (!quizOver) {
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
    timeCount();   
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
            //return false;
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
}, 1000);


// This is the function for the quetions and choices

//function displayCurrentQuestion() {
    //$("#question").text(questions[currentQuestion].question);
//}

function resetQuiz()
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
    $(dcoument).find(".answer");
}

// Display the current question and choices
function viewResults() {
    if (currentQuestion == 20) { currentQuestion = 0; return false; }
    if (viewingAn == 1) { return false; }

    currentQuestion++;

    setTimeout(function () {
        viewResults();
    }, 5000);
}