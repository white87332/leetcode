/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let allArr = [];
    for (let i = 0; i< n+1 ; i++)
    {
        allArr = [...allArr, i];
    }
    let val;
    for (let i = 0; i< n+1 ; i++)
    {
        let check = nums.includes(allArr[i]);
        if (!check)
        {
            val = allArr[i];
            break;
        }
    }

    return val;
};

var missingNumber = function(nums) {
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b);
    let sumAll = (1 + n) * n / 2;
    return sumAll - sum;
};
