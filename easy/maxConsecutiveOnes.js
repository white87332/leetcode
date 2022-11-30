/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    numsArr = nums.join('').split(0);
    let res = numsArr.sort((a, b) => b.length - a.length); // 遞減
    return res[0].length;
};
