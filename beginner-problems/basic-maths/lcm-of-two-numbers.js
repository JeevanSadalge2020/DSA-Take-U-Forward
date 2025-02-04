function LCM(n1, n2) {
  for (let i = 1; i <= n1 * n2; i++) {
    if (i % n1 === 0 && i % n2 === 0) return i;
  }
}

