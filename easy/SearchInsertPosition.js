/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target)
{
    let found = nums.indexOf(target);
    if (found !== -1)
    {
        return found;
    }
    else
    {
        for (let i = 0; i < nums.length; i++)
        {
            if (i === 0 && nums[0] > target)
            {
                return 0;
            }
            else if (nums[i] > target)
            {
                return i;
            }
        }

        return nums.length;
    }
};

searchInsert([1, 3, 5, 6], 0);  0
searchInsert([1, 3, 5, 6], 2);  1
searchInsert([1, 3, 5, 6], 4);  2
searchInsert([1, 3, 5, 6], 7);  4
