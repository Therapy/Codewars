/*
No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.
You have 30 bytes to spare.
*/

reverse=a=>[...a].map(a.pop,a)
// or
reverse=a=>a.map(a.pop,[...a])