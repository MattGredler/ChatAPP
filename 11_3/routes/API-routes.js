const db = require('../models/schema');
console.log("route loaded")

module.exports = function (app) {
app.post('/api/mesage', function (req, res) {
  console.log("route called")
      db.create(req.body)
        .then(function (mesage) {
          res.json(mesage);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  }
