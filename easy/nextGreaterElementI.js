/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    for (let i = 0; i < nums2.length; i++)
    {
        let val = nums2[i];
        for (let j = i; j < nums2.length; j++)
        {
            if (val < nums2[j])
            {
                map.set(val, nums2[j]);
                break;
            }
        }
    }

    let res = [];
    for (let val of nums1)
    {
        if (map.get(val))
        {
            res.push(map.get(val));
        }
        else
        {
            res.push(-1);
        }
    }
    return res;
};
