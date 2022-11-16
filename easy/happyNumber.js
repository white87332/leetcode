/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (n > 6)
    {
        // 0 + 1*1 + 9*9 = 82
        // 0 + 8*8 + 2*2 = 68
        // 0 + 6*6 + 8*8 = 100
        // 0 + 1*1 + 0*0 + 0*0 = 1
        let sum = 0;
        // console.log(n);
        n.toString().split('').forEach((val) => {
            // console.log(val);
            sum += val * val;
            n = sum;
        });
    }

    return n === 1;
};

isHappy(19);
