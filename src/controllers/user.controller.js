const UserService = require('../services/user.service');

class UserController {
  async store(request, response) {
    const user = request.body;

    try{
      const newUser = await UserService.createUser(user);
      return response.status(201).json(newUser);
    } catch(err){
      return response.status(500).json({error: 'Internal server error.'})
    }
  }
}

module.exports = new UserController();