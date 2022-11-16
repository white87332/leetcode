/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let repeatMap = new Map();
    for (let i = 0; i < nums.length; i++)
    {
       if (repeatMap.has(nums[i]) && (i - repeatMap.get(nums[i])) <= k)
       {
           return true;
       }

       repeatMap.set(nums[i], i);
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i in nums)
    {
        let j = nums[i];
        if (obj[j] && ((i - obj[j]) <= k))
        {
            return true;
        }
        obj[j] = i;
    }
};
