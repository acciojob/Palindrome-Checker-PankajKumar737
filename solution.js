// complete the given function

function palindrome(str){
   
    var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
   
   for (var i = 0; i < str.len/2; i++) {
      if (str[i] !== str[len - 1 - i]) { 
          return false;
      }
    return true ;
   }   

}
module.exports = palindrome
