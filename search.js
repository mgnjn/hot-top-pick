var express = require('express');
var router = express.Router();

let keyword = null;
// social media websites modules
var twitter = require('./twitter.js');

// Posting a request for a search
router.post('/', function(req, res) {
    // get the keyword
    keyword = setKeyword(req.body.keyword);
    // test printing twitter stuff
    twitter.keyword = keyword;
    console.log(twitter)

    // search the websites given the keyword
    // store the results
})

/**
 * Validates keyword
 * @param {*} text 
 */
function setKeyword(text) {
    if (typeof(text) !== 'undefined' || (text != null)) {
        this.keyword = text;
    }
    return this.keyword;
}

module.exports = {
    router: router,
    keyword: this.keyword
}