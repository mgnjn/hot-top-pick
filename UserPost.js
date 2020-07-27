/**
 * Creates a post for a user, adapatable for any social media website
 * @param {*} name 
 * @param {*} text 
 * @param {*} popularity 
 */
function userPost(name, text, textPop) {
    var userPostJSON = {
        userName: name,
        userText: text,
        userPostPopularity: textPop,
    }
    return userPostJSON;
}
module.exports = userPost;