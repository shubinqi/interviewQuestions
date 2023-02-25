// unique 数组去重

// 1、使用 indexOf
function unique (arr) {
    if (!Array.isArray(arr)) return
    const result = []
    const leng = arr.length
    for (let i = 0; i < leng; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    return result
}

// 2、使用 includes
function unique2 (arr) {
    if (!Array.isArray(arr)) return
    const result = []
    const leng = arr.length
    for (let i = 0; i < leng; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

// 3、使用 双重 for 循环 + splice
function unique3 (arr) {
    if (!Array.isArray(arr)) return
    const leng = arr.length
    for (var i = 0; i < leng; i++) {
        for (var j = i + 1; j < leng; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                j--
            }
        }
    }
    return arr
}


console.log(unique3([1,1,2,2,3,4,5,5,6,7,8,6,3,2,8,9,0]))