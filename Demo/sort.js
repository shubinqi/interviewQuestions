// 数组排序，纯数字版

// 1、冒泡排序：使用双重 for 循环，该算法的基本思想是通过相邻元素之间的比较和交换来把小的数交换到最前面，大的数交换到最后面，从而实现排序的目的。外层循环控制排序的轮数，内层循环控制每轮排序中比较和交换的次数。
function bubbleSort (arr) {
    let leng = arr.length
    for (i = 0; i < leng; i++) {
        for (j = 0; j < leng - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sort([1, 2, 3, 4, 3, 2, 1, 6, 7, 8, 4, 34, 5433]))

// 2、快速排序：快速排序是一种基于分治思想的排序算法，其核心是通过选取一个基准值，将数组分为两部分，左边部分小于等于基准值，右边部分大于基准值。然后递归地对左右两个部分进行排序，最后合并得到完整的有序数组。

function quickSort (arr) {
    if (arr.length <= 1) {
        return arr; // 递归结束条件
    }

    // 选取基准值
    const pivot = arr[0];

    const left = [];
    const right = [];

    // 分割数组
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // 递归排序左右两部分，并合并结果
    return quickSort(left).concat([pivot], quickSort(right));
}

const arr = [5, 3, 1, 6, 8, 7, 2, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]