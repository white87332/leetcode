/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum = 0;
    this.arr = [];
    for (let val of nums)
    {

        sum += val;
        this.arr.push(sum);
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {

    if(left == 0)
    {
        return this.arr[right];
    }

    let range = this.arr[right] - this.arr[left - 1];
    return range;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
