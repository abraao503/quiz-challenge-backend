const { Router } = require('express');
const userRouter = Router();
const { userRegisterValidation } = require('../validation/user.validation');
const userController = require('../controllers/user.controller');

userRouter.post('/', userRegisterValidation, userController.store);

module.exports = userRouter; 