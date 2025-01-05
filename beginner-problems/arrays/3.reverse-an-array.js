function reverse(arr, n) {
  for (let i = 0; i < arr.length / 2; i++) {
    let [a, b] = [arr[i], arr[arr.length - i - 1]];
    arr[i] = b;
    arr[arr.length - i - 1] = a;
  }
  return arr;
}
