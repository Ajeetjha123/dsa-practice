var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    maxCount = 0;

  for (const val of nums) {
    count = val === 1 ? count + 1 : 0;
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
