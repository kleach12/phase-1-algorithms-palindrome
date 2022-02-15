function isPalindrome(word) {
  const equalWord = word.toLowerCase();
  const  reversedWord = equalWord.split('').reverse().join('');
  
  if(equalWord === reversedWord){
    return true;
  } else{
    return false;
  }
 }

/* 
  initialize a function that take in a string 
    it takes the string and returns true if 
    a palidrome,
    if not a palindrome return false1
*/

/*
  Add written explanation of your solution here
  In order to determine if the string was a palindrome or not I needed to breakdown the string (.split('')) flip it(.reverse())and join (.join(''))
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Clarissa"));
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
