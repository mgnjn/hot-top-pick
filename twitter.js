// This handles all requests for Twitter 
// Returns: JSON array of all Twitter posts 
// ----------------------------------------------------


// Contains details of a single user post 
var UserPost = require('./UserPost.js');

// Getting keyword
var search = require('./search.js');
var keyword = search.keyword;

// create a sample user post
var user1 = new UserPost('FirstName', keyword, 'hello', null);

// var Twit = require('twit');
// var T = new Twit({
//     consumer_key: process.env.API_KEY,
//     consumer_secret: process.env.API_SECRET_KEY,
//     access_token: process.env.ACCESS_TOKEN,
//     access_token_secret: process.env.ACCESS_TOKEN_SECRET
// });

// var tweets = [];

// // Post the param
// T.get('/', (req, res) => {
//     parameter.keyword = req.body.keyword;
//     console.log(`Searching for keyword: ${parameter.keyword}`);
//     // Twitter search
//     T.get('search/tweets', {
//         q: parameter.keyword,
//         // for now we just set up a temporary max count. arbitrarily, it's set to 3
//         count: 100
//     }, function(error, data, response) {
//         if (error) throw error;
//         var dataTwts = data.statuses;
//         for (var i = 0; i < dataTwts.length; i++) {
//             tweets[i] = dataTwts[i].text;
//             console.log(dataTwts[i].text);
//         }
//     });
//     // Redirect with tweets embedded into html
//     res.send('Hello');
// });

module.exports = user1;