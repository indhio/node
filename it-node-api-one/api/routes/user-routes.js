'use strict';
module.exports = function(app) {
  var model = require('../model/user');
  var dao = require('../dao/user-dao');

  // todoList Routes
  app.route('/api/users')
    .get(dao.list)
    .post(dao.add);


  app.route('/api/users/:userId')
    .get(dao.get)
    .put(dao.update)
    .delete(dao.delete);
};