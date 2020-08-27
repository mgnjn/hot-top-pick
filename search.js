// Express config
var express = require('express');
var router = express.Router();

// Twitter
var Twitter = require('./twitter');
var twitInstance;
var twitPosts;

// global 
let maxCount = 4;
let keyword = null;

// POST a keyword for a search
router.post('/', function(req, res) {

    keyword = validateKeyword(req.body.keyword);

    var twitUserInfo = [];
    twitInstance = new Twitter(keyword, maxCount);
    twitPosts = twitInstance.getPosts();
    // receive array of promises
    // twitPosts.then((result) =>
    //     console.log(result[0].userName));

    // res.render('practice', { keyword: keyword, twitPosts: twitPosts, maxCount: maxCount });

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