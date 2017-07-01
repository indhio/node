'use strict';
module.exports = function(app) {
  var dao = require('../dao/user-dao');

  app.route('/api/users').get(dao.list)

};