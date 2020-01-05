function Quiz(questions) {
    score=0;
    questioins = questions;
    questionIndex= 0;
}
Quiz.prototype.getQuestionIndex = function() {
    return questions(questionIndex);
}

Quiz.prototype.guess = function(answer) {
    if (getQuestionIndex().isCorrectAnswer(answer)) {
        score++;
    }
    questionIndex++;
}
Quiz.prototype.isEnded = function() {
    return questionIndex === question.length;
}