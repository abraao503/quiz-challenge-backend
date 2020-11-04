const Question = require('../models/question.model');

class QuestionService {
  async getQuestions(questionnaireId) {
    const questions = await Question.findAll({
      where: { questionnaire_id: questionnaireId },
    });

    return questions;
  }
}

module.exports = new QuestionService();