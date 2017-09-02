/*
The problem
How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! in hexadecimal would be 0x130777758000, which has 3 zeroes.

Scalability
Unfortunately, machine integer numbers has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isn't an efficient way to find just the tail of a factorial. Calculating 100'000! in compiled language takes around 10 seconds. 1'000'000! would be around 10 minutes, even using efficient Karatsuba algorithm

Your task
is to write a function, which will find the number of zeroes at the end of (number) factorial in arbitrary radix = base for larger numbers.

base is an integer from 2 to 256
number is an integer from 1 to 1'000'000
*/

function zeroes(base, number) {
  let tail = Number.MAX_VALUE,
      tailLocal,
      primeBase = base,
      primeCount,
      numberLocal;

  // preloaded array of primes for fast find prime factors
  let primesArray = [2, 3, 5, 7, 11, 13, 17, 19, 23,
                     29, 31, 37, 41, 43, 47, 53, 59,
                     61, 67, 71, 73, 79, 83, 89, 97,
                     101, 103, 107, 109, 113, 127,
                     131, 137, 139, 149, 151, 157,
                     163, 167, 173, 179, 181, 191,
                     193, 197, 199, 211, 223, 227,
                     229, 233, 239, 241, 251];

  // if base is prime lets do it quickly
  if (primesArray.includes(base)) {
    tail = 0;
    while (number > 0) {
      number = Math.floor(number / base);
      tail += number;
    }
    return tail;
  } else {
    for (let i = 2; i <= base; i++) {
      if (primesArray.includes(i) && primeBase >= i) {

        // find count of same prime in base
        primeCount = 0;
        while (primeBase % i === 0) {
          primeBase /= i;
          primeCount++;
        }

        // find number of 0s
        tailLocal = 0;
        numberLocal = number;
        while (numberLocal > 0) {
          numberLocal = Math.floor(numberLocal / i);
          tailLocal += numberLocal;
        }
        tailLocal /= primeCount;
        //result
        tail = Math.min(tail, Math.floor(tailLocal));
      }
    }
    return tail;
  }
}

// another one solution
function zeroes(base, number) {
  let factors = {},
      i = 1;

  while (++i <= base) {
    while (base % i === 0) {
      base /= i;
      factors[i] = (factors[i] || 0) + 1;
    }
  }

  return Math.min(...Object.keys(factors).map(factor => {
    let count = 0,
        i = 1;

    while ((i *= factor) <= number) {
      count += number / i >> 0;
    }

    return count / factors[factor] >> 0;
  }));
}
