var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.list = function(req, res) {
  Todo.find({}, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};

exports.add = function(req, res) {
  var new_task = new Todo(req.body);
  new_task.save(function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};


exports.get = function(req, res) {
  Todo.findById(req.params.taskId, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};


exports.update = function(req, res) {
  Todo.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
};


exports.delete = function(req, res) {
  Todo.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err) {
        res.send(err);
    }
    res.json({ message: 'Task successfully deleted' });
  });
};