var singleNumber = function (nums) {
  let ans = 0;
  for (const val of nums) {
    ans ^= val;
  }
  return ans;
};
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
