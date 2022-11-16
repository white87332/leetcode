

sort((a,b) => b - a) // 遞減
sort((a,b) => a - b) // 遞增

let testArray = [34, 25, 78, 67, 109, 1, 18, 76, 200];

function quickSort(arr)
{
    // 如果 array 為空陣列或只有一個元素，直接返回，不需排序。
    if (arr.length <= 1)
    {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // 將陣列元素最後一項設為基準值
    let left = [];  // 用來儲存比基準值小的元素
    let right = []; // 用來儲存比基準值大的元素
    for (let i = 0; i < arr.length - 1; i++)
    {
        // 設定 i < arr.length - 1 是因為陣列最後一項被我們設為 pivot 因此不需考慮
        if (arr[i] < pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function bubbleSort(array)
{
    const length = array.length;
    for (let i = 0; i < length; i++)
    {
        for (let j = 0; j < length; j++)
        {
            if (array[j] > array[j+1])
            {
                let temp = array[j]
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
