/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            const x = Math.abs(nums[i] - nums[j]);
            const y = Math.abs(i - j);
            
            if(x <= t && y <= k) {
                return true;
            }
        }
    }
    
    return false;
};