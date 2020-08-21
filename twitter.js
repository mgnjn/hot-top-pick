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
    async setPosts() {
        var array = [];

        async function getTwitterPosts(keyword) {
            T.get('search/tweets', { q: keyword, count: 4 }, function(error, data, response) {
                if (error) {
                    console.log(error);
                    return;
                }
                for (var i = 0; i < data.statuses.length; i++) {
                    var user = new UserPost(data.statuses[i].user.screen_name, data.statuses[i].text, data.statuses[i].retweet_count);
                    array.push(user);
                }
                setConstructor(array);
                console.log("1");
            });
        }

        function setConstructor(array) {
            Twitter.prototype.posts = array;
            console.log("2");
        }

        async function processData(keyword) {
            try {
                await getTwitterPosts(keyword);
                console.log("3");
            } catch (error) {
                console.log(error);
            }
        }

        processData(this.keyword);

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

// Stores users along with their tweets
module.exports = Twitter;

/**
 * if (error) {
            console.log(error);
            return;
        }
        for (var i = 0; i < data.statuses.length; i++) {
            var user = new UserPost(data.statuses[i].user.screen_name, data.statuses[i].text, data.statuses[i].retweet_count);
            array.push(user);
        }
    */