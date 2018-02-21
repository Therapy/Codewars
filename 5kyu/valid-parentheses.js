/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.
*/

const validParentheses = (parens) => {
  return !parens.split('').reduce((acc, val) => {
    if (acc < 0) return acc;
    return acc += (val === '(' ? 1 : -1);
  }, 0);
}

// another one solution
function validParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}