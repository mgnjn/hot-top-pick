function userPost(name, text, icon) {
    var userPostJSON = {
        userName: name,
        userText: text,
        userIcon: icon
    }
    return userPostJSON;
}
module.exports = userPost;