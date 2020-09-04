// This handles all requests for Twitter 
// Returns: JSON array of all Twitter posts 
// ----------------------------------------------------
require('dotenv').config();
let search = require('./search');

// Set up Twitter
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Creates a post for a single user
var UserPost = require('./UserPost.js');
const { response } = require('express');
var user0 = new UserPost(null, null, null, null);

// Twitter class
class Twitter {
    constructor(keyword, maxCount) {
        this.maxCount = maxCount;
        this.keyword = keyword;
        this.type = "twitter";
        this.posts = [user0];
    }

    /**
     * Promise resolves Twit's get requests
     * Returns: the array of UserPosts containing tweets
     */
    async setPosts() {

        var array = [];
        // Get the tweets 
        var results = await T.get('search/tweets', { q: keyword, count: this.maxCount })
            .then(function(result) {
                for (var i = 0; i < result.data.statuses.length; i++) {
                    var user = new UserPost(result.data.statuses[i].user.screen_name, result.data.statuses[i].text, result.data.statuses[i].retweet_count);
                    array.push(user);
                }
                return array;
            })
            .catch(error => console.log(error))

        // Create a set of promises
        var set = []
        var promises = results.map(function(obj) {
            var arr = Promise.resolve(obj);
            set.push(arr);
        });
        return set;
    }

    getKeyword() {
        return this.keyword;
    }

    async getPosts() {
        this.posts = await this.setPosts();
        return this.posts;
    }

    getPostType() {
        return this.type;
    }
}

module.exports = Twitter;