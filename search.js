// Express stuff
var express = require('express');
var router = express.Router();

// social media websites modules
var Twitter = require('./twitter');
var twitInstance;

let keyword = null;

// POST a keyword for a search
router.post('/', function(req, res) {

    keyword = validateKeyword(req.body.keyword);

    // obtain twitter posts 
    twitInstance = new Twitter(keyword);
    twitInstance.setPosts();
    console.log(twitInstance.type);

    // search the websites given the keyword
    // store the results
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