const express = require('express');
const router = express.Router();
const userController = require('./controllers/user.controller');
const { verifyToken } = require('./middlewares/verifyToken');

router.post('/login/google', userController.googleLogin);
router.get('/login/token', verifyToken, userController.sendUserInfo);

module.exports = router;
