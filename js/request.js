var Twit = require('twit');
var config = require('./config');
var client = new Twit(config);

client.get('search/tweets', { q: 'BLM', count: 100 }, getData);

function getData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
}