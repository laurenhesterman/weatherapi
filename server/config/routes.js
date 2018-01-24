
var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
var golds = require('../controllers/golds.js');
var path = require('path')
module.exports = function(app) {
    
    app.get('/gold', function(req, res) { 
        res.json()      
    })
    app.post('/gold', function(req, res) {
        golds.add(req, res)
    })
    app.get("*", (req,res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
      });




   

   
}
