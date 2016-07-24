/**
 * Created by llan on 2016/5/29.
 */
const express = require('express');
const router = express.Router();
const Children = require('../model/children');
const handleResult = function(req, res, next, parmas) {
  if (parmas.searchParmas) {
    parmas = parmas.searchParmas;
    if (parmas.name && parmas.age) {
      Children.paginate({
        name: {
          '$regex': parmas.name,
          $options: 'i'
        },
        age: parmas.age
      }, {
        page: parmas.page,
        limit: 10,
        sort: {
          _id: 'desc'
        }
      }, function(err, result) {
        res.send(result);
      });
    } else if (parmas.name) {
      Children.paginate({
        name: {
          '$regex': parmas.name,
          $options: 'i'
        }
      }, {
        page: parmas.page,
        limit: 10,
        sort: {
          _id: 'desc'
        }
      }, function(err, result) {
        res.send(result);
      });
    } else if (parmas.age) {
      Children.paginate({
        age: parmas.age
      }, {
        page: parmas.page,
        limit: 10,
        sort: {
          _id: 'desc'
        }
      }, function(err, result) {
        res.send(result);
      });
    }else {
      Children.paginate({}, {
        page: parmas.page,
        limit: 10,
        sort: {
          _id: 'desc'
        }
      }, function(err, result) {
        res.send(result);
      });
    }
  } else {
    Children.paginate({}, {
      page: parmas.page,
      limit: 10,
      sort: {
        _id: 'desc'
      }
    }, function(err, result) {
      res.send(result);
    });
  }
}
router.post('/create', function(req, res, next) {
  const parmas = req.body;
  const child = new Children({
    name: parmas.name,
    age: parmas.age
  });
  child.save(function(err, docs) {
    if (err) return console.error(err);
    res.send(docs);
  });
});

router.post('/search', function(req, res, next) {
  const parmas = req.body;
  handleResult(req, res, next, parmas);
});

router.get('/list', function(req, res, next) {
  const parmas = req.query;
  Children.paginate({}, {
    page: parmas.page,
    limit: 10,
    sort: {
      _id: 'desc'
    }
  }, function(err, result) {
    res.send(result);
  });
});

router.post('/delete', function(req, res, next) {
  const parmas = req.body;
  Children.remove({
    _id: parmas.id
  }, function(err) {
    if (err) return console.error(err);
    handleResult(req, res, next, parmas);
  });
});

router.post('/update', function(req, res, next) {
  const parmas = req.body;
  Children.update({
    _id: parmas.id
  }, {
    $set: {
      name: parmas.name,
      age: parmas.age
    }
  }, function(err) {
    if (err) return console.error(err, docs);
    handleResult(req, res, next, parmas);
  });
});

module.exports = router;
