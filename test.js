var pkginfo = require('pkginfo')(module, 'name');
var config = require('./lib/config');
var stackify = require('./index');
var test2 = require('./test2');
stackify.warn('sdf');
stackify.error('wefsdf');
stackify.print();
console.dir(module.exports.name);
config.GHET = 'test';
console.dir(config);
test2();