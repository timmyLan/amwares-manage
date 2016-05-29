/**
 * Created by llan on 2016/5/29.
 */
'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('manuFacturer', { title: 'manuFacturer' });
});

module.exports = router;