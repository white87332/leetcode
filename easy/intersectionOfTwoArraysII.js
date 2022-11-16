/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arrMap = new Map();
    for (let val of nums1)
    {
        if (arrMap.has(val))
        {
            arrMap.set(val, arrMap.get(val) + 1);
        }
        else
        {
            arrMap.set(val, 1);
        }
    }

    let res = [];
    for (let val of nums2)
    {
        if (arrMap.has(val) && arrMap.get(val) !== 0)
        {
            arrMap.set(val, arrMap.get(val) - 1);
            res.push(val);
        }
    }

    return res;
};
