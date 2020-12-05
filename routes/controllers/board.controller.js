const boardService = require('../../services/board.service');
const userService = require('../../services/user.service');

exports.createBoard = async (req, res, next) => {
  const { name, owner, isPublic, authorizedUsers } = req.body;

  try {
    const newBoard = await boardService.createBoard({
      name,
      owner,
      isPublic: Boolean(isPublic),
      authorizedUsers,
    });

    await userService.updateMyBoards(owner, newBoard._id);

    res.status(201).json({ result: 'OK', data: { board: newBoard } });
  } catch (error) {
    next(error);
  }
};

// TODO: authorizedUsers의 authorizedBoards에서도 삭제 필요
exports.deleteBoard = async (req, res, next) => {
  const { userId, boardId } = req.body;

  try {
    await boardService.deleteBoard(boardId);
    await userService.deleteMyBoard(userId, boardId);

    res.status(200).json({ result: 'OK' });
  } catch (error) {
    next(error);
  }
};
