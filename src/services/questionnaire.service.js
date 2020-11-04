const Questionnaire = require('../models/questionnaire.model');
const Question = require('../models/question.model');

class QuestionnaireService {
  async getQuestionnaire(questionnaireId) {
    const questionnaire = await Questionnaire.findOne({
      where: { id: questionnaireId },
      include: {
        model: Question,
        as: 'questions',
        attributes: ['id', 'content']
      }
    });

    return questionnaire;
  }
}

module.exports = new QuestionnaireService();