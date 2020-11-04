function findQuestionById(questionId, questions) {
  for(question of questions){
    if(question.id === questionId){
      return question;
    }
  }

  return false;
}

function checkAnswers(answer, questions) {
  let correctAnswers = 0;
  let hasWrongAnswer = false;

  for(id of answer){
    const question = findQuestionById(id, questions);

    if(question){
      if(question.is_correct){
        correctAnswers++;
      } else {
        hasWrongAnswer = true;
        return { correctAnswers, hasWrongAnswer };
      }
    }
  }

  return { correctAnswers, hasWrongAnswer };
}

function totalCorrectQuestions(questions){
  const correctQuestions = questions.filter(question => question.is_correct);

  return correctQuestions.length;
}

function calculateHitPercetage(answer, questions) {
  const { correctAnswers, hasWrongAnswer } = checkAnswers(answer, questions);
  const correctQuestions = totalCorrectQuestions(questions);

  if(hasWrongAnswer){
    return 0;
  }

  const hitPercentage = (correctAnswers / correctQuestions) * 100; 
  return hitPercentage;
}

module.exports = calculateHitPercetage;