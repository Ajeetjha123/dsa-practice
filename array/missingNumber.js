var missingNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i];
    if (i < nums.length && nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else i++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};
const nums = [3, 0, 1];
console.log(missingNumber(nums));
