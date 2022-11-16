/**
 * @param {string} s
 * @return {boolean}
 */

let s = 'A man, a plan, a canal: Panama';
var isPalindrome = function(s) {
    s = s.toLowerCase().match(/[a-z0-9]+/g);
    if (!s)
    {
        return true;
    }
    s = s.join('');
    return s.split('').reverse().join('') === s;
};
