const Test = require('./lib/Test.js');
const routes = [{
    path: '/TestApi',
    method: 'GET',
    handler: Test.TestApi

}];
 module.exports = routes;