function countOddDigit(n) {
  if (n < 10) {
    if (n % 2 === 0) return 0;
    return 1;
  }
  let count = 0;
  let q = n;
  let r = 0;
  while (q >= 10) {
    r = q % 10;
    q = Math.floor(q / 10);
    if (r % 2 !== 0) count++;
  }
  if (q % 2 !== 0) count++;
  return count;
}
