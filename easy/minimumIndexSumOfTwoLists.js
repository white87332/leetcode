/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {

    let resIndexSum = 0;
    let resIndexArr = [];
    for (let i = 0; i < list1.length; i++)
    {
        let j = list2.indexOf(list1[i]);
        if (j !== -1)
        {
            let indexSum = i + j;
            if (resIndexArr.length === 0 || indexSum <= resIndexSum)
            {
                resIndexArr = (indexSum === resIndexSum) ? [...resIndexArr, i] : [i];
                resIndexSum = indexSum;
            }
        }
    }

    let res = [];
    for (let val of resIndexArr)
    {
        res.push(list1[val]);
    }

    return res;
};
