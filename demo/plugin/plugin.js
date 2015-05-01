
var path = require("path");
var serveStatic = require("serve-static");

module.exports = function startup(options, imports, register) {
    var connect = imports.connect;
    var statics = imports["connect.static"];

    connect.useMain(serveStatic(path.join(__dirname, "www")));

    register(null, {});
};
