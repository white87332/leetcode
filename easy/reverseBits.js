/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let val = n.toString(2).padStart(32, 0).split('').reverse().join('');
    return parseInt(val, 2);
};
