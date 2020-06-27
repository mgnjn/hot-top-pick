var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

T.get('search/tweets', { q: 'node.js' }, function(error, tweets, response) {
    console.log(tweets);
});