// module.exports = {
//     getParam: function() {
//         return param;
//     }
// }

// const myForm = document.querySelector("#main-form");
// const myInput = document.querySelector("#main-input");


var myForm = document.querySelector('#main-form');
var param = "";

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    param = document.getElementById('main-input').value;
    console.log(param + "hello");
});