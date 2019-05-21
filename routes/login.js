var express = require('express');
var router = express.Router();
var students = require('../data/students.json')

/* GET home page. */
router.post('/login', function(req, res, next) {
  var username = req.body.uname;
  var password = req.body.pws;
  req.session.userId = username;

  // if(req.referrer) {
  //   res.redirect(req.referrer);
  // } else {
  //   res.redirect('/');
  // }
  res.redirect('back');
});

module.exports = router;
