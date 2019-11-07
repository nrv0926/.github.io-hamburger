var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//select all
router.get('/', (req, res) => {
  burger.all(data => {
    res.render('index', { burgers: data });
  });
});

//creates new burger
router.post('/api/burgers', (req, res) => {
  burger.create(req.body.name, result => {
    res.redirect('/');
  });
});

//devour an burger
router.put('/api/burgers', (req, res) => {
  burger.devour(req.body.id, result => {
    if (result.changedRows === 0) {
      res.status(200).end();
    }
  });
});

module.exports = router;
