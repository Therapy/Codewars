/*
This is the first part. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
*/

function multiply(a, b) {
  // too many reverse() func...
  const aa = a.split('').reverse().map(Number);
  const bb = b.split('').reverse().map(Number);
  const res = [];
  let mul, sum;

  bb.map((b, i) => {
    aa.map((a, j) => {
      mul = a * b;
      sum = mul + valOrZero(res[i+j]);
      res[i+j] = sum % 10;
      res[i+j+1] = valOrZero(res[i+j+1]) + Math.floor(sum / 10);
    });
  });
  return res.reverse().join('').replace(/^0+(?=\d)/g, '');
}

// another one solution
function multiply(a, b) {
  return a.split('').reduceRight((p, a, i) =>
    b.split('').reduceRight((p, b, j) => {
      const mul = (a - '0') * (b - '0');
      const p1 = i + j;
      const p2 = p1 + 1;
      const sum = mul + valOrZero(p[p2]);

      p[p1] = valOrZero(p[p1]) + Math.floor(sum / 10);
      p[p2] = sum % 10;

      return p;
    }, p), [])
    .join('')
    .replace(/^0+(?=\d)/, '');
}

// common function
function valOrZero(v) {
  return v || 0;
}
