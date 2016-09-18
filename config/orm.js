var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        var queryString = '';
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    insertOne: function() {
        var queryString = '';
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    updateOne: function() {
        var queryString = '';
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }    
};

module.exports = orm;