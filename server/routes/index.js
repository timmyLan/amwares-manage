/**
 * Created by llan on 2016/5/29.
 */
'use strict';
const express = require('express');
const router = express.Router();
const People = require('../model/people');
router.get('/', function(req, res, next) {
    res.render('index', { title: 'amwares' });
});

router.get('/people/create', function(req, res, next) {
    var people = new People({ name: 'People',id : '2' });
    people.save(function (err) {
        if (err) return console.error(err);
    });
    People.find({}, function (err, docs) {
        res.send(docs);
    });
});

module.exports = router;