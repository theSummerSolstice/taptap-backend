const Board = require('../models/Board');

exports.createBoard = async (boardInfo) => {
  const newBoard = await Board.create(boardInfo);
  return newBoard;
};

exports.deleteBoard = async (id) => {
  await Board.findByIdAndRemove(id);
};
