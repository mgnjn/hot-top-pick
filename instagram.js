// This handles all requests for Instagram 
// Returns: an array of Promises constaining Instagram posts
// ----------------------------------------------------require('dotenv').config();
require('dotenv').config();
var config = require('./config');
var search = require('./search');
var ig_redirect_uri = config.global_redirect_uri;

var getInstagram = async function() {
    var ig = require('instagram-node').instagram({});
    ig.use({
        client_id: process.env.IG_CLIENT_ID,
        client_secret: process.env.IG_CLIENT_SECRET
    });

    ig.tag('blm', {
            sign_request: {
                client_secret: process.env.IG_CLIENT_SECRE,
                // Then you can specify the request:

            }
        },
        function(err, result, remaining, limit) {
            console.log(result);
            console.log(err);
            console.log(limit);
        })


}

module.exports = {
    Instagram: function() {
        getInstagram();
    }
}