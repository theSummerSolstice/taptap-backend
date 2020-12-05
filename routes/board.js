const express = require('express');
const router = express.Router();
const { verifyToken } = require('./middlewares/verifyToken');
const boardController = require('./controllers/board.controller');

router.post('/', verifyToken, boardController.createBoard);

module.exports = router;
