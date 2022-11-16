/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s)
{
    const checkObj = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    let arr = [];
    for (const item of s)
    {
        if (item === '{' || item === '(' || item === '[')
        {
            arr = [...arr, item];
        }
        else if (arr.pop() !== checkObj[item])
        {
            return false;
        }
    }

    return arr.length === 0;
};