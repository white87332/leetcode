/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((sum, a) => sum + a);
    let average = sum / 3;
    if (!Number.isInteger(average))
    {
        return false;
    }

    let res = [];
    let num = 0;
    for (let i = 0; i < arr.length; i++)
    {
        num += arr[i];
        if (num === average)
        {
            res.push(num);
            num = 0;
        }

        if (i === arr.length - 1 && num > 0)
        {
            res.push(num);
        }
    }

    return res[0] === res[1] && res[1] === res[2];
};
