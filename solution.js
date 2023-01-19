// complete the given function

function palindrome(str){
   let reverseString = str.split("").reverse().join("");
    return reverseString === str ? "true" : "false";

}
module.exports = palindrome
