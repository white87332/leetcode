/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let repeatSet = new Set();
    for (let val of nums)
    {
        if (repeatSet.has(val))
        {
            return true;
        }
        else
        {
            repeatSet.add(val);
        }
    }
    return false;
};
