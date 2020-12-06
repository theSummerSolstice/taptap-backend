const express = require('express');
const router = express.Router();
const { verifyToken } = require('./middlewares/verifyToken');
const boardController = require('./controllers/board.controller');

router.post('/', verifyToken, boardController.createBoard);
router.put('/:boardId', verifyToken, boardController.updateBoard);
router.delete('/:boardId', verifyToken, boardController.deleteBoard);

module.exports = router;
