const Board = require('../models/Board');

exports.createBoard = async (boardInfo) => {
  const newBoard = await Board.create(boardInfo);
  return newBoard;
};

exports.updateBoard = async (id, data) => {
  await Board.findByIdAndUpdate(
    id,
    { $set: { authorizedUsers: data } },
  );
};

exports.deleteBoard = async (id) => {
  await Board.findByIdAndRemove(id);
};
