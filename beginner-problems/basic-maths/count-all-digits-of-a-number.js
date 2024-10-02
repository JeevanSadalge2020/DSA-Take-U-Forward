function countDigits(n) {
  if (n === 0) return 1;
  if (n < 10) return 1;
  else {
    let q = n;
    let count = 1;
    while (q >= 10) {
      q = q / 10;
      count++;
    }
    return count;
  }
}
