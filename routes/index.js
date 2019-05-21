var express = require('express');
var router = express.Router();
var students = require('../data/students.json').students;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list', { title : "detail info", students: students });
});

module.exports = router;
