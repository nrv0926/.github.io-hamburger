var connection = require('../config/connection');

var orm = {
  selectAll: (table, orderByColumn, cb) => {
    query = `SELECT * FROM ?? ORDER BY ??`;
    connection.query(query, [table, orderByColumn], (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  insertOne: (table, objColsVals, cb) => {
    query = `INSERT INTO ${table} SET ?`;
    connection.query(query, objColsVals, (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  /* Update one row
        -> table: table name
        -> objColsVals: object with the columns and their values: {column: value, column2: value}
    */
  updateOne: (table, objColsVals, objConditions, cb) => {
    query = `UPDATE ${table} SET ? WHERE ?`;
    connection.query(query, [objColsVals, objConditions], (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

module.exports = orm;
