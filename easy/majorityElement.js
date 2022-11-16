/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[parseInt(nums.length / 2)];
};


// 將陣列由小到大排序後取中位數即可，因為出現次數超過一半。
