var https = require('https');

let options = {
    host: 'www.example.org',
    path: '/'
};

var callback = function () {
    console.log("In response handler callback!");
}

console.log("I'm about to make the request");

https.request(options, callback).end();

console.log("I've made the request!")