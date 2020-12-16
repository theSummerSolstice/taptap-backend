const express = require('express');
const router = express.Router();
const { verifyToken } = require('./middlewares/verifyToken');
const boardController = require('./controllers/board.controller');

router.post('/', verifyToken, boardController.createBoard);
router.get('/:boardId', verifyToken, boardController.getBoard);
router.put('/:boardId', verifyToken, boardController.updateBoard); // general 3) layout
router.delete('/:boardId', verifyToken, boardController.deleteBoard);

router.post('/:boardId/invite', verifyToken, boardController.sendInviteMail);
router.put('/:boardId/snapshots', verifyToken, boardController.updateSnapshots);
router.delete('/:boardId/snapshots', verifyToken, boardController.deleteSnapshots);
router.put('/:boardId/currentNotes', verifyToken, boardController.updateCurrentNotes);

module.exports = router;
