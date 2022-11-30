/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] >= 0 || k === 0)
        {
            break;
        }

        nums[i] *= -1;
        k--;
    }

    let sum = nums.reduce((sum, a) => sum + a);
    if (k % 2 == 0)
    {
        return sum;
    }
    else
    {
        // sum 裡面有加上原本最小值了 要再扣掉
        return sum + -2 * Math.min(...nums);
    }
};
