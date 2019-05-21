var express = require('express');
var router = express.Router();
var users = require('../data/users.json')

function checkUser(userid, password){

  for (var i=0; i < users.length; i++) {
      if (users[i].userId === userid && users[i].password === password) {  
        return true;
      }
  }
  return false;
}

router.get('/', function(req, res, next) {
    res.render("login", {title : "Login" , message : ""});
});

router.post('/login', function(req, res, next) {
  var username = req.body.uname;
  var password = req.body.passwd;

  if(checkUser(username.trim(), password.trim())) {
  
    req.session.userId = username;
    console.log(`referer : ${req.headers.referer}`);
    if (req.headers.referer && req.headers.referer.includes('/login')) {
      res.redirect('/');
    } else {
      res.redirect('back');
    }
  } else {
    res.render("login", {title : "Login" , message : "Please Try Again!"});
  }

});

module.exports = router;
