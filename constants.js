const RES_MESSAGE = {
  OK: 'OK',
  FAIL: 'FAIL',
  UNAUTHORIZED: 'Unauthorized',
};

const SOCKET_EVENT = {
  CONNECTION: 'connection',
  JOIN_USER: 'joinUser',
  LEAVE_USER: 'leaveUser',
  UPDATE_AUTHORIZED_BOARDS: 'updateAuthorizedBoards',
  ADD_NOTE: 'addNote',
  DELETE_NOTE: 'deleteNote',
  UPDATE_NOTE_POSITION: 'updateNotePosition',
  HISTORY_MODE_ON: 'historyModeOn',
  HISTORY_MODE_OFF: 'historyModeOff',
  SELECT_VERSION: 'selectVersion',
  START_CATEGORIZE: 'startCategorize',
  ADD_CATEGORY: 'addCategory',
  DELETE_CATEGORY: 'deleteCategory',
  UPDATE_LAYOUT: 'updateLayout',
  DISCONNECT: 'disconnect',
};

module.exports = {
  RES_MESSAGE,
  SOCKET_EVENT,
};
