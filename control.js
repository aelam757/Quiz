let currentQuestion = 0;
let score = 0;
let quizOver = false;
let choicesList = $("#choiceList");
let answer = $(".answer");
let timer = $("timer")
//let totalQuestions = questions.length;
//let questions = 0;

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
 //   for (var i = 0; i < questions.length; i++) {
   //     var response = window.prompt(questions[i].question);
    //    if (response == questions[i].answer)
     //       score++;
     //   alert("Correct!");
    //} else {
    //    alert("Sorry that was incorrect!");
    //}
    

    displayCurrentQuestion();
    resetQuiz();
    displayScore();
    displaychoicesList();
    displayingAnswer();
    loadNextQuestion();

    function displayCurrentQuestion() {
        $("#question").text(questions[currentQuestion].question);
        console.log(questions)
    }
    console.log(questions[currentQuestion].choices[0])

    function displaychoicesList() {
        $("#choiceList").text(choiceList[currentQuestion], ".answer");
        for(var i = 0; i < question.length; i++){
            var response = window.questions(questions[i].question);
            if (response == question[i].answer)
            score++;
            alert("Correct!");
        } else{
            alert("Sorry, that was incorrect!");
        }
        console.log(choicesList)
        console.log(answer)
    }
    function displayingAnswer() {
        $(".btn0").text(questions[currentQuestion].choices[0]);
        $(".btn1").text(questions[currentQuestion].choices[1])
        $(".btn2").text(questions[currentQuestion].choices[2])
        $(".btn3").text(questions[currentQuestion].choices[3])
    }
    function loadNextQuestion() {

    }

    function resetQuiz() {
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
    } if (!quizOver) {
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


function resetQuiz() {
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