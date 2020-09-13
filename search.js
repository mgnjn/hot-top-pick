// Express config
var express = require('express');
var router = express.Router();

// Twitter
var Twitter = require('./twitter');
var twitInstance;

// Instagram
var Instagram = require('./instagram');
var igInstance;

// global 
let maxCount = 4;
let keyword = null;

// POST a keyword for a search
router.post('/', function(req, res) {
    keyword = validateKeyword(req.body.keyword);
    // Instagram
    igInstance = Instagram.Instagram();
    // // Twitter
    // twitInstance = new Twitter(keyword, maxCount);
    // // // twitPosts is a promise that contains an array of promises (tweets). i.e. each tweet is stored in the set tweets
    // twitInstance.getPosts()
    //     .then(function(tweets) {
    //         var twitUsers = [];
    //         tweets.forEach((tweet) => {
    //             tweet.then((value) => {
    //                 // for each tweet stored in the set of tweets, we are storing all the info related to a single tweet such as the username and the actual tweet to a single user. 
    //                 // TODO: clean it up using UserPost.js
    //                 var user;
    //                 user = {
    //                     name: value.userName,
    //                     text: value.userText,
    //                 }
    //                 twitUsers.push(user);
    //             })
    //         })
    //         return twitUsers;
    //     })
    //     .then(function(result) {
    //         var twitUsers = result;
    //         res.render('index', { keyword: keyword, users: twitUsers, maxCount: maxCount });
    //     })



})

/**
 * Validates keyword
 * @param {*} text 
 */
function validateKeyword(text) {
    if (typeof(text) !== 'undefined' || (text != null)) {
        this.keyword = text;
    }
    return this.keyword;
}

module.exports = {
    router: router,
}