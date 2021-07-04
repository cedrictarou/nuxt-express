var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/todos', function (req, res, next) {
  const todos = [
    { id: 1, taskName: 'aaaaa', isDone: false },
    { id: 2, taskName: 'bbbbb', isDone: false },
    { id: 3, taskName: 'ccccc', isDone: false },
  ];
  res.json({ todos });
});

module.exports = router;
