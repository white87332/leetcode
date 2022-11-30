/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === 'L')
        {
            count++;
        }
        else
        {
            count--;
        }

        if (count === 0)
        {
            res++;
        }
    }

    return res;
};
