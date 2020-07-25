require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Temporary data
var parameter = { "keyword": null };

// Twitter stuff 
// var config = require('./public/js/config');
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var tweets = [];

// Post the param
app.get('/', (req, res) => {
    parameter.keyword = req.body.keyword;
    console.log(`Searching for keyword: ${parameter.keyword}`);
    // Twitter search
    T.get('search/tweets', {
        q: parameter.keyword,
        // for now we just set up a temporary max count. arbitrarily, it's set to 3
        count: 100
    }, function(error, data, response) {
        if (error) throw error;
        var dataTwts = data.statuses;
        for (var i = 0; i < dataTwts.length; i++) {
            tweets[i] = dataTwts[i].text;
            console.log(dataTwts[i].text);
        }
    });
    // Redirect with tweets embedded into html
    res.send('Hello');
});

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));