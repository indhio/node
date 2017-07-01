const pool = require('../../lib/db');

exports.list = function(req, res) {
    const query = { // // give the query a unique name
        name: 'fetch-user',
        text: 'SELECT * FROM usuario WHERE id = $1',
        values: [9]
    }
  
    pool.query(query, function(err, res2) {
        if (err) {
            res.send(err);
        } else {
            res.json(res2.rows[0]);
        }
    });

}