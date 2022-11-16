/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = new Set();
    for (let val of nums1)
    {
        intersection.add(val);
    }

    let res = [];
    for (let val of nums2)
    {
        if (intersection.has(val) && res.indexOf(val) === -1)
        {
            res.push(val);
        }
    }

    return res;
};
