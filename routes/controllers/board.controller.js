const Board = require('../../models/Board');
const User = require('../../models/User');

exports.createBoard = async (req, res, next) => {
  const { name, owner, isPublic, authorizedUsers } = req.body;

  try {
    const newBoard = await Board.create({
      name,
      owner,
      isPublic: Boolean(isPublic),
      authorizedUsers,
    });

    await User.findByIdAndUpdate(
      owner,
      { $addToSet: { myBoards: newBoard._id } }
    );

    res.status(201).json({ result: 'OK', data: { board: newBoard } });
  } catch (error) {
    next(error);
  }
};
