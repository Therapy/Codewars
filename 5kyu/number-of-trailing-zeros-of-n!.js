/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.
http://mathworld.wolfram.com/Factorial.html

N! = 1 * 2 * 3 * 4 ... N

zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
that has 2 trailing zeros 4790016(00)
Be careful 1000! has length of 2568 digital numbers.
*/


function zeros(n) {
  let factor5 = 5,
      zeroes = 0;

  while (n >= factor5) {
    zeroes += Math.floor(n / factor5);
    factor5 *= 5;
  }
  return zeroes;
}

// another one solution
function zeros(n) {
  let zeroes = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    zeroes += n;
  }
  return zeroes;
}

// another one solution
function zeros(n) {
  n = ~~(n / 5);
  return n + (n < 5 ? 0 : zeros(n));
}
