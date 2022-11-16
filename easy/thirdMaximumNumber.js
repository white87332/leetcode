/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsSet = new Set();
    for (let val of nums)
    {
        numsSet.add(val);
    }

    let res = [...numsSet].sort((a,b) => b - a);
    if (res.length < 3)
    {
       return res[0];
    }
    else
    {
        return res[2];
    }
};
