const boardService = require('../services/board.service');
const userService = require('../services/user.service');

const boards = {};
const currentUsers = {};

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
        socketId: socket.id,
        id: _id,
        email,
        username,
      });
      currentUsers[socket.id] = boardId;

      io.to(boardId).emit('joinUser', { board: boards[boardId] });
    });

    socket.on('leaveUser', async ({ boardId, userId }) => {
      const filteredUserList = boards[boardId].users.filter((user) => {
        return user.id !== userId;
      });

      socket.leave(boardId);

      if (!filteredUserList.length) {
        await boardService.updateCurrentNotes(boardId, boards[boardId].currentNotes);
        delete boards[boardId];
      } else {
        boards[boardId].users = filteredUserList;
        io.to(boardId).emit('leaveUser', { board: boards[boardId] });
      }
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
      socket.broadcast.to(boardId).emit('updateNotePosition', { noteId, position });
    });

    socket.on('historyModeOn', ({ boardId }) => {
      socket.broadcast.to(boardId).emit('historyModeOn', { data: 'HISTORY' });
    });

    socket.on('historyModeOff', ({ boardId }) => {
      socket.broadcast.to(boardId).emit('historyModeOff', { data: 'EDIT' });
    });

    socket.on('selectVersion', ({ boardId, notes }) => {
      socket.broadcast.to(boardId).emit('selectVersion', { notes });
    });

    socket.on('startCategorize', ({ boardId }) => {
      socket.broadcast.to(boardId).emit('startCategorize', { data: true });
    });

    socket.on('addCategory', ({ boardId, categoryName, layout }) => {
      socket.broadcast.to(boardId).emit('addCategory', { categoryName, layout });
    });

    socket.on('deleteCategory', ({ boardId, index, layout }) => {
      socket.broadcast.to(boardId).emit('deleteCategory', { index, layout });
    });

    socket.on('updateLayout', ({ boardId, layout }) => {
      socket.broadcast.to(boardId).emit('updateLayout', { layout });
    });

    socket.on('disconnect', () => {
      const boardId = currentUsers[socket.id];

      if (!boards[boardId]) return;

      const filteredUserList = boards[boardId].users.filter((item) => {
        return item.socketId !== socket.id;
      });

      boards[boardId].users = filteredUserList;
    });
  });
};

module.exports = {
  boards,
  socketIO,
};
