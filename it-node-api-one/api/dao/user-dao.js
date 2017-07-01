var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list = function(req, res) {
  User.find({}, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};

exports.add = function(req, res) {
  var new_task = new User(req.body);
  new_task.save(function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};


exports.get = function(req, res) {
  User.findById(req.params.taskId, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};


exports.update = function(req, res) {
  User.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};


exports.delete = function(req, res) {
  User.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json({ message: 'Task successfully deleted' });
  });
};