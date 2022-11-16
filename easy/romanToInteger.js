/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let remanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let arr = s.split('');
    let res = 0;

    for (let i = 0; i < arr.length; i++)
    {
        let val = arr[i];
        let valNext = arr[i + 1];

        if (valNext && (remanMap[valNext] > remanMap[val]))
        {
            i += 1;
            let sum = remanMap[valNext] - remanMap[val];
            res += sum;
        }
        else
        {
            res += remanMap[val];
        }
    }
    return res;
};

romanToInt('MCMXCIV');