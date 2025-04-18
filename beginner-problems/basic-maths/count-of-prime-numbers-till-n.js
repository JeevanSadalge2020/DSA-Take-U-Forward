function primeUptoN(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

function isPrime(n) {
  if (n <= 1) return false;
  let is__prime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      is__prime = false;
      break;
    }
  }
  return is__prime;
}
