module.exports = (server) => {
  const io = require('socket.io').listen(server);

  io.on('connection', (socket) => {
    console.log('connected to socket', socket.id);

    socket.on('startBoard', (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('disconnect');
    });
  });
};
