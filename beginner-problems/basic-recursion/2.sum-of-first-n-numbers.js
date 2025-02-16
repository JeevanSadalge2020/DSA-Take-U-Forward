function NnumbersSum(N) {
  if (N === 0) {
    return 0;
  } else {
    return N + NnumbersSum(N - 1);
  }
}

console.log(NnumbersSum(10));
