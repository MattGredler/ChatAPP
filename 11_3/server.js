const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5060;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//
mongoose.connect('mongodb://localhost/realTimeChat', { useNewUrlParser: true });

//
require('./routes/API-routes')(app);

require('./routes/html-routes')(app);

require('./sockets/message-sockets')(io);

// Tells server what port to listen to
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
