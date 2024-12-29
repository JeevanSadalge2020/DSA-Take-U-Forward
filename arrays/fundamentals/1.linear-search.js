function linearSearch(nums, target) {
  let res = -1;
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      res = i;
      break;
    }
  }
  return res;
}
