// This handles all requests for Twitter 
// Returns: JSON array of all Twitter posts 
// ----------------------------------------------------
require('dotenv').config();

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
    constructor(keyword) {
        this.keyword = keyword;
        this.type = "twitter";
        this.posts = [user0];
    }

    /**
     * Promise resolves Twit's get requests
     * Returns: the array of UserPosts containing tweets
     */
    async twitGetPosts() {
        var maxCount = 4;
        // We need to resolve the get reqest from Twit first
        var array = await Promise.resolve(T.get('search/tweets', { q: keyword, count: maxCount }))
            // post-resolution is handled HERE. We want to add the tweets to an array and return this array 
            // we set the Twitter.posts to the array
            .then(function(result) {
                var array = [];
                for (var i = 0; i < result.data.statuses.length; i++) {
                    var user = new UserPost(result.data.statuses[i].user.screen_name, result.data.statuses[i].text, result.data.statuses[i].retweet_count);
                    array.push(user);
                }
                return array;
            })
            .catch(error => console.log(error))
        return array;
    }
    async setPosts() {
        this.posts = await this.twitGetPosts();
    }

    getKeyword() {
        return this.keyword;
    }

    getPosts() {
        return this.posts;
    }

    getPostType() {
        return this.type;
    }
}

module.exports = Twitter;