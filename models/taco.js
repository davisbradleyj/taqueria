var orm = require("../config/orm.js");

var taco = {
    all: function(cb) {
        orm.all("tacos", function(res) {
            cb(res);
        })
    },
    create: function (cols,vals,cb) {
        orm.create("tacos",cols,vals,function(res){
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.update("tacos", objColsVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("tacos", condition, function(res){
            cb(res);
        });
    }
};

module.exports = taco;