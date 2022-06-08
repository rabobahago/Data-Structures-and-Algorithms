function longestPalindromicSubstring(string) {
    let longest = '';
    for(let i = 0; i < string.length; i++){
      for(let j = i; j < string.length; j++){
        let subst = string.slice(i, j + 1);
        if(subst.length > longest.length && isPalindrome(subst)){
          longest = subst;
        }
      }
    }
    return longest
  }
  function isPalindrome(str){
     return str === str.split('').reverse().join('')
  }