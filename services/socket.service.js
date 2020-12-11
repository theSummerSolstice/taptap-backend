const boardService = require('../services/board.service');
const userService = require('../services/user.service');

const boards = {};

const socketIO = (server) => {
  const io = require('socket.io').listen(server);

  io.on('connection', (socket) => {
    console.log('connected to socket', socket.id);

    socket.on('joinUser', async ({ boardId, user }) => {
      const { _id, email, username } = user;

      if (!(boardId in boards)) {
        const boardInfo = await boardService.getBoard(boardId);
        boards[boardId] = { ...boardInfo, users: [] };
      }

      if (!boards[boardId].owner.equals(user._id)) {
        await userService.updateAuthorizedBoards(user._id, boardId);
      }

      socket.join(boardId);
      boards[boardId].users.push({
        id: _id,
        email,
        username,
      });

      io.to(boardId).emit('joinUser', { board: boards[boardId] });
    });

    socket.on('leaveUser', async ({ boardId, userId }) => {
      const filteredUserList = boards[boardId].users.filter((user) => {
        return user.id !== userId;
      });

      if (filteredUserList.length === 0) {
        await boardService.updateCurrentNotes(boardId, boards[boardId].currentNotes);
      }

      socket.leave(boardId);
      boards[boardId].users = filteredUserList;

      io.to(boardId).emit('leaveUser', { board: boards[boardId] });
    });

    socket.on('addNote', ({ boardId, note }) => {
      boards[boardId].currentNotes.push(note);

      io.to(boardId).emit('addNote', { note });
    });

    socket.on('deleteNote', ({ boardId, noteId }) => {
      const filteredNoteList = boards[boardId].currentNotes.filter((note) => {
        return note._id !== noteId;
      });

      boards[boardId].currentNotes = filteredNoteList;
      io.to(boardId).emit('deleteNote', { noteId });
    });

    socket.on('updateNotePosition', ({ boardId, noteId, position }) => {
      const updatedNoteList = boards[boardId].currentNotes.map((note) => {
        if (note._id === noteId) {
          return { ...note, position };
        }
        return note;
      });

      boards[boardId].currentNotes = updatedNoteList;
      io.to(boardId).emit('updateNotePosition', { noteId, position });
    });

    socket.on('disconnect', () => {
      console.log('disconnect');
    });

  });
};

module.exports = {
  boards,
  socketIO,
};
