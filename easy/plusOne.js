/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits)
{
    for (let i = digits.length - 1; i >= 0; i--)
    {
        let lastDigit = digits[i];
        if (lastDigit < 9)
        {
            digits[i] += 1;
            return digits;
        }
        else
        {
           digits[i] = 0;
        }     
    }
    return [1, ...digits]
};

// Input: digits = [1, 2, 3]
// Output: [1, 2, 4]
