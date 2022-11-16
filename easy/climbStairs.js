/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n)
{
    let nums = [];
    for (let i = 0;i <= n; i += 1)
    {
        if (nums.length < 2)
        {
            nums[i] = 1;
        }
        else
        {
            nums[i] = nums[i - 1] + nums[i - 2];
        }
    }

    return nums[n];
};
