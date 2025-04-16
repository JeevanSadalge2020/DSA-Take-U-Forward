function largeOddNum(s) {
  function getIndexOfOdd(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] % 2 !== 0) return i;
    }
    return -1;
  }
  function removeLeadingZeros(str) {
    let numberOfLeadingZeros = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        numberOfLeadingZeros++;
      } else {
        break;
      }
    }
    return str.slice(numberOfLeadingZeros);
  }
  let stringWithLeadingZerosRemoved = removeLeadingZeros(s);
  let index = getIndexOfOdd(stringWithLeadingZerosRemoved);
  if (index === -1) return "";
  return stringWithLeadingZerosRemoved.slice(0, index + 1);
}

// 1. find the last index of odd number - traverse from end and when there is an odd number, return that index

// 2. Remove all 0's from start from main string s

// 3. slice the main string s from 0th index to nth index
