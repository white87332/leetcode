/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs)
{
    let same = strs[0];

    for (let i = 1; i < strs.length; i++)
    {
        let str = strs[i];
        let j = 0;
        for (; j < same.length; j++)
        {
            if (same[j] !== str.charAt(j))
            {
                break;
            }
        }

        same = same.slice(0, j);
    }

    return same;
};

var longestCommonPrefix = function (strs)
{
    if (!strs || strs.length === 0)
    {
        return "";
    }

    let firstStr = strs[0];
    let condition = true;
    let position = 0;

    while (condition)
    {
        if (position > firstStr.length)
        {
            condition = false;
            break;
        }

        condition = strs.every((str) => firstStr[position] === str[position]);

        if (condition)
        {
            position += 1;
        }
    }
    return firstStr.slice(0, position);
};
