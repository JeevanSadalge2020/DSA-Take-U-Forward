function largestElement(nums) {
  let max = nums[0];
  for (let item of nums) {
    if (item >= max) max = item;
  }
  return max;
}

console.log(largestElement([5, 2, 3, 1, 2, 3, 5]));
