<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:32:01
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:26:42
 * @Description: 数组-Array
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\数组-Array.md
-->

#### JS 数组

JavaScript 数组（Array）是一种有序的数据集合。数组可以存放任意类型的数据，包括数字、字符串、对象、函数等。数组的下标是从 0 开始的，可以使用方括号来访问数组中的某个元素，例如 arr[0] 访问第一个元素。

下面是一些常用的数组操作方法：

1. 创建数组：使用字面量方式创建数组：

```
let arr = [1, 2, 3, 'hello', true];
```

也可以使用构造函数方式创建数组：

```
let arr = new Array(1, 2, 3, 'hello', true);
```

2. 访问数组中的元素

```
let arr = [1, 2, 3, 'hello', true];

console.log(arr[0]);      // 1
console.log(arr[3]);      // 'hello'
console.log(arr.length);  // 5
```

3. 添加元素：使用 push() 方法在数组末尾添加元素：

```
let arr = [1, 2, 3];

arr.push(4);
console.log(arr);   // [1, 2, 3, 4]
```

使用 unshift() 方法在数组开头添加元素：

```
let arr = [1, 2, 3];

arr.unshift(0);
console.log(arr);   // [0, 1, 2, 3]
```

使用 splice() 方法在指定位置插入元素：

```
let arr = [1, 2, 3];

arr.splice(1, 0, 'a', 'b');
console.log(arr);   // [1, 'a', 'b', 2, 3]
```

4. 删除元素：使用 pop() 方法删除数组末尾的元素：

```
let arr = [1, 2, 3];

arr.pop();
console.log(arr);   // [1, 2]
```

使用 shift() 方法删除数组开头的元素：

```
let arr = [1, 2, 3];

arr.shift();
console.log(arr);   // [2, 3]
```

使用 splice() 方法删除指定位置的元素：

```
let arr = [1, 'a', 'b', 2, 3];

arr.splice(1, 2);
console.log(arr);   // [1, 2, 3]
```

5. 修改元素

```
let arr = [1, 2, 3];

arr[1] = 'one';
console.log(arr);  // [1, 'one', 3]
```

6. 合并数组：使用 concat() 方法可以合并两个或多个数组，返回一个新的数组，原有数组不变。

```
let arr1 = [1, 2], arr2 = [3, 4], arr3 = [5, 6];

let arr = arr1.concat(arr2, arr3);
console.log(arr);    // [1, 2, 3, 4, 5, 6]
```

7. 切分数组：使用 slice() 方法可以截取数组的一部分，返回一个新的数组，原有数组不变。

```
let arr = [1, 2, 3, 4, 5];

let subArr = arr.slice(1, 4);
console.log(subArr);    // [2, 3, 4]
```

以上就是 JavaScript 中数组的一些常用操作方法，使用这些方法可以灵活地操作数组，实现数组的增、删、改、查等操作。
