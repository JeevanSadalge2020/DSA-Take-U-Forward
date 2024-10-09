function isPalindrome(n) {
  return n === +n.toString().split("").reverse().join("");
}
