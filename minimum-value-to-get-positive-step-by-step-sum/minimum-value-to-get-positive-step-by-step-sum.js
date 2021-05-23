/**
 * @param {number[]} nums
 * @return {number}
 */
function minStartValue(nums) {
  let min = Infinity;
  let sum = 0;
  nums.forEach(n => {
    min = Math.min(min, sum += n);
  });
  return min >= 1 ? 1 : Math.abs(min - 1);
}