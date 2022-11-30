/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let size = nums.length;
    nums = nums.sort((a, b) => b - a); // 遞減
    let f = nums[0] * nums[1] * nums[2]; // 前三位最大正數
    let b = nums[size -1] * nums[size - 2] * nums[0]; // 沒兩位負數相乘為正數, 再乘以最大的正數
    return Math.max(f, b);
};
