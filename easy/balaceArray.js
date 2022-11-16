// 3, 6, 10
function makelnputVerifier(minimum, medium, maximum)
{
    let min = minimum;
    let med = medium;
    let max = maximum;
    function verify(inputValue)
    {
        if (inputValue < min)
        {
            return 'Input is less than minimum value';
        }
        else if (inputValue > min && inputValue < med)
        {
            return 'Input is in lower range';
        }
        else if (inputValue === med)
        {
            return 'Input is medium';
        }
        else if (inputValue < max && inputValue > med)
        {
            return 'Input is in higher range';
        }
        else if (inputValue > max)
        {
            return 'Input is more than maximum value';
        }
    }

    return verify;
}
let verify = makelnputVerifier(3,6,10);

console.log(verify(5));
console.log(verify(2));
console.log(verify(11));
console.log(verify(7));



/* balance array */
const arr = [1, 2, 3, 4, 3, 2, 1];
const balancingIndex = (arr = []) => {
    let sum = arr.reduce((a, b) => a + b);
    let sumLeft = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum = sum - arr[i];
        if (sum === sumLeft)
        {
            return i;
        }
        sumLeft += arr[i];
    }
    return -1;
};
balancingIndex(arr);

/* Closure function */
function counting()
{
    let count = 0;
    function countAdd()
    {
        count += 1;
      console.log(count);
    }
    return countAdd;
}
let countAdd = counting();
countAdd();
countAdd();
countAdd();
