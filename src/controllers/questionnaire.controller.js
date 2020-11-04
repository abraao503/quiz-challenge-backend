const QuestionnaireService = require('../services/questionnaire.service');

class QuestionnaireController {
  async show(request, response) {
    const { questionnaireId } = request.params;

    try{
      const questionnaires = await QuestionnaireService.getQuestionnaire(questionnaireId);
      return response.status(200).json(questionnaires);
    } catch(err){
      return response.status(500).json({error: 'Internal server error.'});
    }
  }
}

module.exports = new QuestionnaireController();