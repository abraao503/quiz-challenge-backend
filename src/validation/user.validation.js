const Joi = require('@hapi/joi');

exports.userRegisterValidation = async (request, response, next) => {
  const userSchema = Joi.string().required();
  const user = request.body;

  try{
    await userSchema.validateAsync(user.name);
  }catch(err){
    return response.status(400).json({ error: 'Validation fails'});
  }

  next();
};