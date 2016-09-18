var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, cb) {
        var queryString = '';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, cb) {
        var queryString = '';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }   
}




module.exports = burger;