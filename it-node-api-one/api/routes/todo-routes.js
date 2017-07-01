'use strict';
module.exports = function(app) {
  var model = require('../model/todo');
  var dao = require('../dao/todo-dao');

  // todoList Routes
  app.route('/api/todo')
    .get(dao.list)
    .post(dao.add);


  app.route('/api/todo/:userId')
    .get(dao.get)
    .put(dao.update)
    .delete(dao.delete);
};