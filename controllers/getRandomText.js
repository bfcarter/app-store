module.exports = function(length) {
    if(length < 1) { //if greater then 1
        length = 10; //less then 10 in length
    }

    var result = "";
    var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //variables that are allowed

    for(var i=0; i<length; i++) {
        result += allowed.charAt(Math.floor(Math.random() * allowed.length));
    } 

    return result; //answer
};