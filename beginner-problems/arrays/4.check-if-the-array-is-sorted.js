function arraySortedOrNot(arr, n) {
  console.log(
    "new",
    [...arr].sort((a, b) => a - b)
  );
  return arr.join("") == [...arr].sort((a, b) => a - b).join("");
}

console.log(arraySortedOrNot([1, 2, 3, 4]));
console.log(arraySortedOrNot([1, 2, 3, 4, -1]));
console.log(arraySortedOrNot([1, 2, 3, 4, 9, 0]));
