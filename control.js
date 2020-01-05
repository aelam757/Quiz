function populate() {
    if(Quiz.isEnded){
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choices" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }    
};

function guess(id,guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id='Scores'> Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}
var questions = [
    new Question(text,"What is the language that describes the style of an HTML document?",choices,"CSS","AJAX","PYTHON","SQL",answer,"CSS"),
    new Question(text,"What is the programming language of HTML and the Web?",choices,"Bootstrap","HTML","CSS","JavaScript",answer,"Javascript"),
    new Question(text,"What is the most popular HTML,CSS, and Javascript framework?",choices,"jQuery","Bootstrap","PHP","SQL",answer,"Bootstrap"),
    new Question(text,"What greatly simplifies Javascript programming?",choices,"HTML","CSS","jQuery","Bootstrap",answer,"jQuery"),
    new Question(text,"What is the worlds largest web developer site?",choices,"w3schools","Stack Overflow","GitLab","Github",answer,"w3schools"),
];

var quiz = new Quiz(questions);
populate();