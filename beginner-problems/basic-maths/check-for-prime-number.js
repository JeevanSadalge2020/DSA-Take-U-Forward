function isPrime(n) {
  if (n <= 1) return false;
  let is__prime = true;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      is__prime = false;
      break;
    }
  }
  return is__prime;
}
