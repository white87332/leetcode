/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target)
{
    let numsObj = {};
    for (let key in nums)
    {
        key = parseInt(key);
        numsObj[nums[key]] = key;
    }

    let arr = [];
    for (let key in nums)
    {
        key = parseInt(key);
        let goal = target - nums[key];
        if (numsObj[goal] && key !== numsObj[goal])
        {
            return [key, numsObj[goal]];
        }
    }
};

let nums = [1, 3, 2, 4];
let target = 6;
let res = twoSum(nums, target);