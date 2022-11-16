/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numsSet = new Set();
    for (let val of nums)
    {
        numsSet.add(val);
    }

    let res = [];
    for (let i = 1; i <= nums.length; i++)
    {
        if (!numsSet.has(i))
        {
            res.push(i);
        }
    }

    return res;
};
