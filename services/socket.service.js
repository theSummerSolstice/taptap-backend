const boardService = require('../services/board.service');
const userService = require('../services/user.service');
const { SOCKET_EVENT } = require('../constants');
const {
  CONNECTION,
  JOIN_USER,
  LEAVE_USER,
  UPDATE_AUTHORIZED_BOARDS,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE_POSITION,
  HISTORY_MODE_ON,
  HISTORY_MODE_OFF,
  SELECT_VERSION,
  START_CATEGORIZE,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_LAYOUT,
  DISCONNECT,
} = SOCKET_EVENT;

const boards = {};
const currentUsers = {};

const socketIO = (server) => {
  const io = require('socket.io').listen(server);

  io.on(CONNECTION, (socket) => {
    console.log('Connected to socket', socket.id);

    socket.on(JOIN_USER, async ({ boardId, user }) => {
      const { _id, email, username } = user;

      if (!(boardId in boards)) {
        const boardInfo = await boardService.getBoard(boardId);
        boards[boardId] = { ...boardInfo, users: [] };
      }

      socket.join(boardId);
      boards[boardId].users.push({
        socketId: socket.id,
        id: _id,
        email,
        username,
      });
      currentUsers[socket.id] = boardId;

      io.to(boardId).emit(JOIN_USER, { board: boards[boardId] });
    });

    socket.on(LEAVE_USER, async ({ boardId, userId }) => {
      if (!boards[boardId].owner.equals(userId)) {
        const authorizedBoards = await userService.updateAuthorizedBoards(userId, boardId);
        io.to(socket.id).emit(UPDATE_AUTHORIZED_BOARDS, { board: authorizedBoards });
      }

      const filteredUserList = boards[boardId].users.filter((user) => {
        return user.id !== userId;
      });

      socket.leave(boardId);

      if (!filteredUserList.length) {
        await boardService.updateCurrentNotes(
          boardId,
          { currentNotes: boards[boardId].currentNotes },
        );
        delete boards[boardId];
      } else {
        boards[boardId].users = filteredUserList;
        io.to(boardId).emit(LEAVE_USER, { board: boards[boardId] });
      }
    });

    socket.on(ADD_NOTE, ({ boardId, note }) => {
      boards[boardId].currentNotes.push(note);
      io.to(boardId).emit(ADD_NOTE, { note });
    });

    socket.on(DELETE_NOTE, ({ boardId, noteId }) => {
      const filteredNoteList = boards[boardId].currentNotes.filter((note) => {
        return note._id !== noteId;
      });

      boards[boardId].currentNotes = filteredNoteList;
      io.to(boardId).emit(DELETE_NOTE, { noteId });
    });

    socket.on(UPDATE_NOTE_POSITION, ({ boardId, noteId, position }) => {
      const updatedNoteList = boards[boardId].currentNotes.map((note) => {
        return note._id === noteId
          ? { ...note, position }
          : note;
      });

      boards[boardId].currentNotes = updatedNoteList;
      socket.broadcast.to(boardId).emit(UPDATE_NOTE_POSITION, { noteId, position });
    });

    socket.on(HISTORY_MODE_ON, ({ boardId }) => {
      socket.broadcast.to(boardId).emit(HISTORY_MODE_ON, { data: 'HISTORY' });
    });

    socket.on(HISTORY_MODE_OFF, ({ boardId }) => {
      socket.broadcast.to(boardId).emit(HISTORY_MODE_OFF, { data: 'EDIT' });
    });

    socket.on(SELECT_VERSION, ({ boardId, notes }) => {
      socket.broadcast.to(boardId).emit(SELECT_VERSION, { notes });
    });

    socket.on(START_CATEGORIZE, ({ boardId }) => {
      socket.broadcast.to(boardId).emit(START_CATEGORIZE, { data: true });
    });

    socket.on(ADD_CATEGORY, ({ boardId, categoryName, layout }) => {
      socket.broadcast.to(boardId).emit(ADD_CATEGORY, { categoryName, layout });
    });

    socket.on(DELETE_CATEGORY, ({ boardId, index, layout }) => {
      socket.broadcast.to(boardId).emit(DELETE_CATEGORY, { index, layout });
    });

    socket.on(UPDATE_LAYOUT, ({ boardId, layout }) => {
      socket.broadcast.to(boardId).emit(UPDATE_LAYOUT, { layout });
    });

    socket.on(DISCONNECT, () => {
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
