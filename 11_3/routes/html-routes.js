const path = require('path');

module.exports = function(app) {
  app.get('/chat', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/chat.html'));
  });
}

//  / is going to be a login page
