/**
 * @param {number[]} nums
 * @return {string[]}
 * Input: nums = [0,1,2,4,5,7]
 * Input: nums = [0,1,2]
 * Output: ["0->2","4->5","7"]
 */
 var summaryRanges = function(nums) {
    let arr = [];
    let tmp = [];
    for (let key in nums)
    {
        key = parseInt(key);
        let val = nums[key];
        if (tmp.length === 0 || tmp.at(-1) + 1 === val)
        {
            tmp.push(val);
        }
        else if (tmp.at(-1) + 1 !== val)
        {
            arr = [...arr, [tmp[0], tmp.at(-1)]];
            tmp = [val];
        }

        if (undefined === nums[key + 1] && tmp.length > 0)
        {
            arr = [...arr, [tmp[0], tmp.at(-1)]];
        }
    }

    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = [...new Set(arr[i])]
        res.push(arr[i].join('->'));
    }
    return res;
};

 summaryRanges([-1000000000,-9999,0,1,2,10,100,1000,999999999,1000000000]);
