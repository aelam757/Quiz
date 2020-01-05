var startButton = document.getElementById('startButton')
var questionText = document.getElementById('questionText')
var printScore = document.getElementById('score')
var scoreForm = document.getElementById('scoreForm')
var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')


var highScoreList = document.getElementById("high-score");

var scoreInput = document.getElementById('formGroupExampleInput')
var timer = document.getElementById("timer")




var scoreArr = ["Anikan Skywalker: 200", "Hon Solo: 199"]

var gameOverSwitch = 0;
var questionNumber = 0;
var score = 0;
var countdown = 60;
function setTime() {
    var timerInterval = setInterval(
        function () {
            countdown--;
            timer.innerText = countdown + " seconds left";
            if (countdown === 0) {
                clearInterval(timerInterval)
                timer.textContent = ""
                gameOver();
                alert("Out of Time!")
            }
            if (gameOverSwitch === 1) {
                clearInterval(timerInterval)
                timer.textContent = ""
            }
        }, 1500);
}

var questions = [
    {
        title: "What is the language that describes the style of an HTML document?",
        choices: ["CSS", "AJAX", "PYTHON", "SQL"],
        answer: "CSS"
    },
    {
        title: "What is the programming language of HTML and the Web?",
        choices: ["Bootstrap", "HTML", "CSS", "JavaScript"],
        answer: "JavaScript"
    },
    {
        title: "What is the most popular HTML,CSS, and Javascript framework?",
        choices: ["jQuery", "Bootstrap", "PHP", "SQ"],
        answer: "Bootstrap"
    },
    {
        title: "What greatly simplifies Javascript programming?",
        choices: ["HTML", "CSS", "jQuery", "Bootstrap"],
        answer: "jQuery"
    },
    {
        title: "What is the worlds largest web developer site?",
        choices: ["w3schools", "Stack Overflow", "GitLab", "Github"],
        answer: "w3schools"
    },
];

initialize(); {

    startButton.setAttribute("style", "display: none")
    questionText.classList.remove('hide')
    loadQuestion();
    setTime();
    printScore.innerText = "Score: " + score
};

function loadQuestion() {
    gameOverSwitch = 0;
    if (questionNumber < questions.length) {
        questionText.innerText = questions[questionNumber].title;
        btn0.innerText = questions[questionNumber].choices0;
        btn1.innerText = questions[questionNumber].choices1;
        btn2.innerText = questions[questionNumber].choices2;
        btn3.innerText = questions[questionNumber].choices3;


        $("#btn0").on('click', function () {
            if (btn0.innerText === questions[questionNumber].answer) {
                console.log("questions number: " + questionNumber)
                console.log("Correct")
                score += 20;
                printScore.innerText = "Score: " + score
            } else {
                console.log("Incorrect")
                countdown -= 10
                printScore.innerText = "Score: " + score
            } loadNextQuestion();
        });


        $("#btn1").on('click', function () {
            if (btn1.innerText === questions[questionNumber].answer) {
                score += 20;
                printScore.innerText = "Score: " + score
                console.log("Correct")
            } else {
                console.log("Incorrect")
                countdown -= 10
                printScore.innerText = "Score: " + score
            } loadNextQuestion();
        });


        $("#btn2").on('click', function () {
            if (btn2.innerText === questions[questionNumber].answer) {
                score += 20;
                printScore.innerText = "Score: " + score
                console.log("Correct")
            } else {
                console.log("Incorrect")
                countdown -= 10
                printScore.innerText = "Score: " + score
            } loadNextQuestion();
        });

        $("#btn3").on('click', function () {
            if (btn3.innerText === questions[questionNumber].answer) {
                score += 20;
                console.log("Correct")
                printScore.innerText = "Score: " + score
            } else {
                console.log("Incorrect")
                countdown -= 10
                printScore.innerText = "Score: " + score
            } loadNextQuestion();
        });
    } else {
    }
}

function loadNextQuestion() {
    questionNumber++;
    console.log(questionNumber)
    if (questionNumber < questions.length) {
        printScore.innerText = "Score: " + score
        questionText.innerText = questions[questionNumber].title;
        btn0.innerText = questions[questionNumber].choices0;
        btn1.innerText = questions[questionNumber].choices1;
        btn2.innerText = questions[questionNumber].choices2;
        btn3.innerText = questions[questionNumber].choices3;
    } else {
        console.log("Game Over")
        questionText.classList.add('hide')
        gameOver();
    }
}

function gameOver() {
    timer.textContent = ""
    gameOverSwitch++;
    questionText.classList.remove('hide')
    questionText.innerText = "High Score"
    scoreForm.removeAttribute("class", "hide")
    scoreForm.addEventListener('submit', function (event) {
        event.preventDefault()


        renderScore()
    });
}

function renderScore() {
    var highScoreList = innerText = "";
    var highScoreName = scoreInput.value.trim();
    var highScoreData = (highScoreName + " : " + score);
    if (gameOverSwitch > 0) {


        if (score > 0) {
            scoreArr.push(highScoreData)
        } else {
            alert("A score of 0 will not be recorded")
        }
    }


    for (i = 0; i < scoreArr.length; i++) {
        var scoreTest = scoreArr[i]
        var li = document.createElement("li")
        li.textContent = scoreTest
        highScoreList.append(li)
    }

    var dataStorage = JSON.stringify(scoreArr)
    localStorage.setItem("userData", dataStorage)
    console.log(dataStorage);
}

function initialize() {
    var storedString = localStorage.getItem("userData")
    var parseString = JSON.parse(storedString)
    if (parseString !== null) {
        console.log(parseString)
        scoreArr = parseString;

    }
    renderScore();

}