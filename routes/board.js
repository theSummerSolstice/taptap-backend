const express = require('express');
const router = express.Router();
const boardController = require('./controllers/board.controller');
const verifyToken = require('./middlewares/verifyToken');

router.post('/', verifyToken, boardController.createBoard);
router.get('/:boardId', verifyToken, boardController.getBoard);
router.put('/:boardId', verifyToken, boardController.updateBoard);
router.delete('/:boardId', verifyToken, boardController.deleteBoard);

router.post('/:boardId/invite', verifyToken, boardController.sendInviteMail);
router.put('/:boardId/currentNotes', verifyToken, boardController.updateCurrentNotes);
router.put('/:boardId/snapshots', verifyToken, boardController.updateSnapshots);
router.delete('/:boardId/snapshots', verifyToken, boardController.deleteSnapshots);

module.exports = router;
