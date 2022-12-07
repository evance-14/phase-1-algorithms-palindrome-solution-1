function reverse(word){
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse("");
  const reverseWord = reversedWordArray.join("");
  return reverseWord;
}
function isPalindrome(word) {
  // Write your algorithm here
  //if word is the same as return function it should return true else return false.
 const reverseWord = reverse(word);

 if(word===reverseWord){
  return true;
 }else{
  return false;
 }
}

/* 
  Add your pseudocode here
that means if the word is the same as from reverse it should return true.
 reverse input string
  if te input string is same as reversed string return true
   else return false
/*

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
