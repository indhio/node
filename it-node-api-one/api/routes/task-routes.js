'use strict';
module.exports = function(app) {
  var model = require('../model/task');
  var dao = require('../dao/task-dao');

  // todoList Routes
  app.route('/api/tasks')
    .get(dao.list)
    .post(dao.add);


  app.route('/api/tasks/:taskId')
    .get(dao.get)
    .put(dao.update)
    .delete(dao.delete);
};