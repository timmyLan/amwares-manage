/**
 * Created by llan on 2016/5/29.
 */
'use strict';
const express = require('express');
const router = express.Router();
const Children = require('../model/children');

router.post('/create', function(req, res, next) {
    var parmas = req.body;
    var child = new Children({ name: parmas.name,age : parmas.age });
    child.save(function (err,docs) {
        if(err) return console.error(err);
        res.send(docs);
    });
});

router.get('/list', function(req, res, next) {
    var parmas = req.query;
    Children.paginate({}, { page: parmas.page, limit: 10 ,sort: { _id: 'desc'} }, function(err, result) {
        res.send(result);
    });
});

router.post('/delete', function(req, res, next) {
    var parmas = req.body;
    Children.remove({_id:parmas.id},function(err){
        if(err) return console.error(err);
        Children.paginate({}, { page: parmas.page, limit: 10 ,sort: { _id: 'desc'} }, function(err, result) {
            res.send(result);
        });
    });
});

router.post('/update', function(req, res, next) {
    var parmas = req.body;
    Children.update({_id:parmas.id},{$set:{ name: parmas.name,age : parmas.age }},function(err){
        if(err) return console.error(err,docs);
        Children.paginate({}, { page: parmas.page, limit: 10 ,sort: { _id: 'desc'} }, function(err, result) {
            res.send(result);
        });
    });
});

module.exports = router;