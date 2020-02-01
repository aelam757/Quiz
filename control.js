let startButton = document.getElementById('startButton')
let currentQuestion = 0;
let score = 0;
let quizOver = false;
let choicesList = $("#choiceList");
let answer = $(".answer");
let timer = $("timer");
//let totalQuestions = questions.length;
//let questions = 0;

$(document).ready(function() {
  let questions = [
    {
      question:
        "1.What is the language that describes the style of an HTML document?",
      choices: ["CSS", "AJAX", "PYTHON", "SQL"],
      answer: 0
    },
    {
      question: "2.What is the programming language of HTML and the Web?",
      choices: ["Bootstrap", "HTML", "CSS", "JavaScript"],
      answer: 3
    },
    {
      question:
        "3.What is the most popular HTML,CSS, and Javascript framework?",
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
    }
  ];
  $("#startButton").on('click', function(){
    startButton.setAttribute("style", "display: none")
    displayCurrentQuestion();
    setTime();  
});
let gameOverSwitch = 0;
let countdown = 60;
function setTime() {
  let timerInterval = setInterval(
    function() {
      countdown--;
      timer.innerText = countdown + " seconds left.";
      if (countdown === 0) {
        clearInterval(timerInterval)
        timer.textContent = ""
        gameOver();
        alert("Time has run out!")
      }
      if (gameOverSwitch === 1){
        clearInterval(timerInterval)
        timer.textContent = ""
      }
    }, 1000);
}
  displayCurrentQuestion();
  displayScore();
  displaychoicesList();

  function displayCurrentQuestion() {
    $("#question").text(questions[currentQuestion].question);
    console.log(questions);
  }
  console.log(questions[currentQuestion].choices[0]);

  function displaychoicesList() {
    $("#choiceList").text(choiceList[currentQuestion], ".answer");
    for (let i = 0; i < question.length; i++) {
      let response = window.questions(questions[i].question);
      if (response == question[i].answer) {
        score++;
        alert("Correct!");
      } else {
        alert("Sorry, that was incorrect!");
      }
      console.log(choicesList);
      console.log(answer);
      console.log(response);
    }
    displaychoicesList();
    function displaychoicesList() {
      $(".btn0").text(questions[currentQuestion].choices[0]);
      $(".btn1").text(questions[currentQuestion].choices[1]);
      $(".btn2").text(questions[currentQuestion].choices[2]);
      $(".btn3").text(questions[currentQuestion].choices[3]);

      console.log(displaychoicesList);
    }
    displayselectedChoice();
    function displayselectedChoice() {}

    loadNextQuestion();
    function loadNextQuestion() {}
    resetQuiz();
    function resetQuiz() {
      currentQuestion = 0;
      score = 0;
    }

    hideScore();
    function hideScore() {
      $(document).find(".answer");
    }
    if (!quizOver) {
      if (currentQuestion == 0) {
        return false;
      }

      currentQuestion--;
      if (currentQuestion < questions.length) {
        displayCurrentQuestion();
      }
    } else {
      if (answer == 0) {
        return false;
      }
      currentQuestion = 0;
      answer = 0;
      viewResults();
    }
  }

  $('.choice').on('click', function() {
      var answer = $(this).text();
      console.log(answer);
      checkAnswer(answer);
  })

  function checkAnswer(answer) {
      var index = questions[currentQuestion].choices.indexOf(answer);
      var correctAnswer = questions[currentQuestion].answer;
      if (index === correctAnswer) {
          $('#rightorwrong').text()
      }
  }

  function displayScore() {
    $(document)
      .find(".grid > .answer")
      .text("Your Score: " + score + "Out of: " + questions.length);
    $(document)
      .find(".grid > .answer")
      .show();
  }

  // Display the current question and choices
  function viewResults() {
    if (currentQuestion == 20) {
      currentQuestion = 0;
      return false;
    }
    if (answer == 1) {
      return false;
    }

    currentQuestion++;

    setTimeout(function() {
      viewResults();
    }, 5000);
  }
});
