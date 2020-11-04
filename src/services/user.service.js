const User = require('../models/user.model');

class UserService {
  async createUser(user) {
    const newUser = await User.create({
      name: user.name,
    });

    return newUser;
  }
}

module.exports = new UserService();