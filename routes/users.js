var express = require('express');
var mysql      = require('mysql');
var dbconfig   = require('../utils/dbconfig.js');
var connection = mysql.createConnection(dbconfig);

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query("select id, name, nic from members", (err, rows)=>{
    if(err) {
      res.status(err.status || 500);    
      res.render('error', {error: err});
    } else {
      // res.send(`Query Result ${JSON.stringify(rows)}`);
      res.render('users', {title : "Users", users : rows});
    }
  });
  
});

module.exports = router;
