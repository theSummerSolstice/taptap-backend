const express = require('express');
const router = express.Router();
const { verifyToken } = require('./middlewares/verifyToken');
const boardController = require('./controllers/board.controller');

router.post('/', verifyToken, boardController.createBoard);
router.get('/:boardId', verifyToken, boardController.getBoard);
router.put('/:boardId', verifyToken, boardController.updateAuthorizedUsers);
router.delete('/:boardId', verifyToken, boardController.deleteBoard);
router.post('/:boardId/invite', verifyToken, boardController.sendInviteMail);

module.exports = router;
