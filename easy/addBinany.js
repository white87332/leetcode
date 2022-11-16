var addBinary = function (a, b)
{
    // 數字大於２的５３次方就會錯
    // let sum = parseInt(a, 2) + parseInt(b, 2);
    // return (res).toString(2);

    // 利用bigint
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return (sum).toString(2);
};

// Input: a = "11", b = "1"
// Output: "100"