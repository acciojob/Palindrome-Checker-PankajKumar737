// complete the given function

function palindrome(str){
   
  
    str = str.replace('');
   
   for (var i = 0; i < str.len/2; i++) {
      if (str[i] !== str[len - 1 - i]) { 
          return false;
      }
    return true ;
   }   

}
module.exports = palindrome
