/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let val = n.toString(2).padStart(32, 0);
    let count = 0;
    for (let i = 0; i < val.length; i++)
    {
        if (val[i] === '1')
        {
            count++;
        }
    }

    return count;
};
