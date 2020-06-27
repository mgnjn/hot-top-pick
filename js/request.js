var config = require('./config.js');
const Twitter = require('twitter');
var T = new Twitter(config);

var params = {
    q: '#blm',
    count: 20,
    result_type = 'recent',
    lang: 'eng'
}

T.get('search/tweets', params, function(err, data, response) {
    if (!err) {
        console.log(data);
    } else {
        console.log(err);
    }
})