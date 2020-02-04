let remainingTime = 75;

let penaltyTime = 10;

let score = 0;

let correctAnswerPoints = 1;

let currentQuestion = 0;

let endScoreMsg;

let gameIsOver = false;

$(document).ready(function() {
  $("#start-bt").click(function() {
    startQuiz();
  });
});

function showQuestion() {
  let questionContainer = $('<div class="question"></div>');

  let question = $('<div class="title"></div>');
  question.text(questions[currentQuestion].question);

  questionContainer.append(question);

  let choicesWrapper = $('<div class="choices-wrapper"></div>');

  let firstChoice = $(
    '<button onclick="answerQuestion(0)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>'
  );
  firstChoice.text(questions[currentQuestion].choices[0]);
  choicesWrapper.append(firstChoice);

  let secondChoice = $(
    '<button onclick="answerQuestion(1)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>'
  );
  secondChoice.text(questions[currentQuestion].choices[1]);
  choicesWrapper.append(secondChoice);

  let thirdChoice = $(
    '<button onclick="answerQuestion(2)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>'
  );
  thirdChoice.text(questions[currentQuestion].choices[2]);
  choicesWrapper.append(thirdChoice);

  let fourthChoice = $(
    '<button onclick="answerQuestion(3)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>'
  );
  fourthChoice.text(questions[currentQuestion].choices[3]);
  choicesWrapper.append(fourthChoice);

  questionContainer.append(choicesWrapper);



  $("#root").append(questionContainer);
}


function showEndGame() {
  let endGameMsg = $('<div class="endGameDiv"></div>');
  endGameMsg.text("Game Over!");
}

function startQuiz() {
  $("#start-quiz-message").remove();
  setInterval(tickTimer, 1000);
  showQuestion();

  //Start the timer!
  //Show the first question!
}

function tickTimer() {
  if (gameIsOver === false) {
    if (remainingTime > 0) {
      remainingTime--;
      $("#timer").text(remainingTime);
    } else {
      $(".question").remove();
      gameIsOver = true;
      endQuiz();
    }
  }
}
// select a answer!
function answerQuestion(selectedAnswer) {
  let selectedAnswerText = questions[currentQuestion].choices[selectedAnswer];

  if (selectedAnswerText === questions[currentQuestion].answer) {
    console.log("correct");
    currentQuestion++;
    $(".question").remove();
    if (questions.length === currentQuestion) {
      gameIsOver = true;
      endQuiz();
    } else {
      showQuestion();
    }
  } else {
    remainingTime -= penaltyTime;
    if (remainingTime <= 0) {
      remainingTime = 0;
      gameIsOver = true;
      endQuiz();
    } else {
      console.log("incorrect");
    }
    $("#timer").text(remainingTime);
  }
}
//Highscore!
function highestScorebutton() {
  let initials = $(".initials").val();

  let newHighScore = {
    name: initials,
    score: remainingTime
  };

  let highScores = localStorage.getItem("highScores");

  if (highScores === null) {
    highScores = [];
  } else {
    highScores = JSON.parse(highScores);
  }

  highScores.push(newHighScore);

  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function endQuiz() {
  let endGameMsg = $('<div class="endGameDiv"></div>');
  endGameMsg.html("Game Over!<br>Your score is: " + remainingTime + "<br>");

  let highestScorebutton = $(
    '<button onclick="highestScorebutton()" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;">Submit</button>'
  );

  let textBox = $('<input type="text" class= "initials"/>');

  endGameMsg.append(highestScorebutton);
  endGameMsg.append(textBox);
  $("#root").append(endGameMsg);
}
// I finally FINISHED!!