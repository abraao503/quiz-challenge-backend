const Joi = require('@hapi/joi');

exports.answerValidation = async (request, response, next) => {
  const answerSchema = Joi.object({
    questions: Joi.array().items(
      Joi.number().integer().min(1)
    ).required(),
    userId: Joi.number().integer().min(1).required()
  }).required();

  const answer = request.body;

  try{
    await answerSchema.validateAsync(answer);
  }catch(err){
    return response.status(400).json({ error: 'Validation fails'});
  }

  next();
};