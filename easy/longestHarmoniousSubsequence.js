/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums = nums.sort((a, b) => a - b);

    let start = 0;
    let temp = 0;
    let res = 0;
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[i] - nums[start] > 1)
        {
            start = temp;
        }

        if (nums[i] !== nums[i - 1])
        {
            temp = i;
        }

        if (nums[i] - nums[start] == 1)
        {
            res = Math.max(res, i - start + 1);
        }
    }

    return res;
};
