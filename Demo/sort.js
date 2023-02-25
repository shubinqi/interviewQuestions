// 数组排序，纯数字版

// 1、冒泡排序：使用双重 for 循环
function sort (arr) {
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

console.log(sort([1,2,3,4,3,2,1,6,7,8,4,34,5433]))