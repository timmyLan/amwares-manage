/**
 * Created by llan on 2016/5/29.
 */
'use strict';
const express = require('express');
const router = express.Router();
const User = require('../model/user');
router.get('/', function(req, res, next) {
    var user = new User({ first_name: 'first',last_name:'last',email:'123@123.com' });
    user.save(function (err) {
        if (err) return console.error(err);
    });
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;