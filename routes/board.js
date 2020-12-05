const express = require('express');
const router = express.Router();
const { verifyToken } = require('./middlewares/verifyToken');
const boardController = require('./controllers/board.controller');

router.post('/', verifyToken, boardController.createBoard);
router.delete('/', verifyToken, boardController.deleteBoard);

module.exports = router;
