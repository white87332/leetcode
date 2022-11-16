/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums)
{
    let count = 0;
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[count] !== nums[i])
        {
            count += 1;
            nums[count] = nums[i];
        }
    }

    return count + 1;
};
