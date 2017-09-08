/*
In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For
example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.
You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None. In C++, return an empty
string. For positive numbers a full length number is expected for example, return 25! = '15511210043330985984000000' as a String!

Note: 0! is always equal to 1. Negative values should return null or an empty string(in C++).
*/

function factorial(n) {
  if (n === 0) {
    return '1';
  }

  let i;
  let next;
  let carry;

  let result = n.toString().split('').reverse().map(Number);

  while (--n) {
    i = carry = 0;

    while ((next = result[i++]) !== undefined || carry) {
      carry += (next || 0) * n;
      result[i-1] = carry % 10;
      carry = ~~(carry / 10);
    }
  }

  return result.reverse().join('');
}

// another one solution
function factorial(n) {
  let res = [1];

  for (let i = 2; i <= n; ++i) {
    let c = 0;
    for (let j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = ~~(c / 10);
    }
  }

  return res.reverse().join('');
}
