/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let arr = new Array(n);
    arr[0] = cost[0];
    arr[1] = cost[1];
    for (let i = 2; i < arr.length; i++)
    {
        arr[i] = cost[i] + Math.min(arr[i - 2], arr[i - 1]);
    }

    return Math.min(arr[n - 1], arr[n - 2]);
}
