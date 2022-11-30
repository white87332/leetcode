/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

    let candtSet = new Set();
    for (let type of candyType)
    {
        candtSet.add(type);
    }

    return Math.min(candtSet.size, candyType.length / 2);
};
