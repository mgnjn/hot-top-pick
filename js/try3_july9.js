// var Twit = require('twit');
// var config = require('./config');
// var client = new Twit(config);

// var param = {
//     q: '#BLM',
//     count: '7',
//     result_type: 'popular',
//     lang: 'en'
// }
// client.get('search/tweets', { q: 'blm', count: 100 }, getData);

// function getData(err, data, response) {
//     var tweets = data.statuses;
//     for (var i = 0; i < tweets.length; i++) {
//         console.log(tweets[i].text);
//         console.log("=======================================================");
//     }
// }

/**
 * General process:
 * 1. Establish express app to accept requests from my front-end, particularly the parameter
 */

const index = require('./index.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>
    res.send(param)
);

app.listen(port, () => console.log(`App running at http://localhost:${port}`));