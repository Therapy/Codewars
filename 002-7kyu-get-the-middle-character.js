//jshint esversion: 6
//jscs:disable maximumLineLength

/*
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. If the word's length is even,
return the middle 2 characters.
*/

// const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

function getMiddle(s) {
  //Code goes here!
  const len = s.length;
  const index = Math.floor(len / 2);

  return !(len % 2) ? s.substring(index - 1, index + 1) : s.substring(index, index + 1);
}
