/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let intObj = {};
    for (let i = 0; i < nums.length; i++)
    {
        if (intObj[nums[i]])
        {
            intObj[nums[i]]++;
        }
        else
        {
            intObj[nums[i]] = 1;
        }
    }

    for (let key in intObj)
    {
        if (intObj[key] === 1)
        {
            return key;
        }
    }
};

var singleNumber = function(nums) {
    for (let i = 1; i <= nums.length; i++)
    {
        nums[0] ^= nums[i];
    }
    return nums[0];
};
