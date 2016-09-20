var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(tableInput, cb) {
        orm.selectAll('events', function(result){
            cb(result);
        });
    },
    insertOne: function(tableInput, burgerName, devoured, cb) {
        orm.insertOne('events', burgerName, devoured, function(result){
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('events', objColVals, condition, function(res){
            cb(res);
        });
    }   
}




module.exports = burger;