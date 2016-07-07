/**
 * Created by llan on 2016/5/29.
 */
const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'amwares'
  });
});

module.exports = router;
