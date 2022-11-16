/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10)
    {
        num = num.toString().split('').reduce((sum, val) => parseInt(sum) + parseInt(val));
    }
    return num;
};

addDigits(38);
