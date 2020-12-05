const Board = require('../models/Board');

exports.createBoard = async (boardInfo) => {
  const newBoard = await Board.create(boardInfo);
  return newBoard;
};
