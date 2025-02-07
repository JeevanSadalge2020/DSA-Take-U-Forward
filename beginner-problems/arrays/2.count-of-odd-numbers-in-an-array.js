function countOdd(arr, n) {
  return arr.reduce((count, cur) => {
    if (cur % 2 !== 0) {
      count = count + 1;
    }
    return count;
  }, 0);
}
