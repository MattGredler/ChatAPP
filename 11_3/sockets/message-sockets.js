module.exports = function(io){
console.log('running');
  io.on('connection', function(socket){
    // socket routes
    socket.on('new-message', function(data){
      console.log(data);
      // io.emmit to send it to all users
      io.emit('emit-message', data)
    })
    // console.log('connected')
  })
};
