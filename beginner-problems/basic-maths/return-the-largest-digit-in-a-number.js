function largestDigit(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => (acc > cur ? +acc : +cur));
}
