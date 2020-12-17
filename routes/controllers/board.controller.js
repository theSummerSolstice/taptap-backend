const boardService = require('../../services/board.service');
const userService = require('../../services/user.service');
const { boards } = require('../../services/socket.service');
const { RES_MESSAGE } = require('../../constants');

exports.getBoard = async (req, res, next) => {
  const { boardId } = req.params;

  try {
    if (boardId in boards) {
      res.status(200).json({
        result: RES_MESSAGE.OK,
        data: { board: boards[boardId] }
      });
      return;
    }

    const board = await boardService.getBoard(boardId);

    res.status(200).json({
      result: RES_MESSAGE.OK,
      data: { board }
    });
  } catch (error) {
    next(error);
  }
};

exports.createBoard = async (req, res, next) => {
  const { name, owner, isPublic, authorizedUsers } = req.body;

  try {
    const newBoard = await boardService.createBoard({
      name,
      owner,
      isPublic,
      authorizedUsers,
    });

    await userService.updateMyBoards(owner, newBoard._id);

    res.status(201).json({
      result: RES_MESSAGE.OK,
      data: { board: newBoard }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const { data } = req.body;

  try {
    const updatedBoard = await boardService.updateBoard(boardId, data);

    res.status(200).json({
      result: RES_MESSAGE.OK,
      data: { board: updatedBoard }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const { userId } = req.body;

  try {
    await boardService.deleteBoard(boardId);
    await userService.deleteMyBoard(userId, boardId);

    res.status(200).json({ result: RES_MESSAGE.OK });
  } catch (error) {
    next(error);
  }
};

exports.updateCurrentNotes = async (req, res, next) => {
  const { boardId } = req.params;
  const { data } = req.body;

  try {
    await boardService.updateCurrentNotes(boardId, data);
    res.status(200).json({ result: RES_MESSAGE.OK });
  } catch (error) {
    next(error);
  }
};

exports.updateSnapshots = async (req, res, next) => {
  const { boardId } = req.params;
  const { data } = req.body;

  try {
    await boardService.updateSnapshots(boardId, data);
    res.status(200).json({ result: RES_MESSAGE.OK });
  } catch (error) {
    next(error);
  }
};

exports.deleteSnapshots = async (req, res, next) => {
  const { boardId } = req.params;
  const { index } = req.body;

  try {
    await boardService.deleteSnapshots(boardId, index);
    res.status(200).json({ result: RES_MESSAGE.OK });
  } catch (error) {
    next(error);
  }
};

exports.sendInviteMail = async (req, res, next) => {
  const { boardId } = req.params;
  const { email } = req.body;

  try {
    await boardService.sendInviteMail(email, boardId);
    res.status(200).json({ result: RES_MESSAGE.OK });
  } catch (error) {
    next(error);
  }
};
