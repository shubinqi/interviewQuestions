<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-07 22:06:43
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:53:45
 * @Description: 数组知识（4题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\JavaScript\Array.md
-->

#### 判断数组类型有哪几种方法？

1. Array.isArray()：
   ```
   const arr = [1, 2, 3];
   console.log(Array.isArray(arr)); // true
   ```
2. Object.peototype.toString.call()：
   ```
   const arr = [1, 2, 3];
   console.log(Object.prototype.toString.call(arr) === '[object Array]'); // true
   ```
   需要注意的是，在某些情况下， instanceof 和 Array.isArray() 可能会出现错误的结果，特别是当变量跨框架或 Web Worker 时。因此，推荐使用 Object.prototype.toString.call() 来判断变量是否为数组。
3. instanceof：
   ```
   const arr = [1, 2, 3];
   console.log(arr instanceof Array); // true
   console.log(Array.isArray(arr)); // true
   ```
4. Array.isPrototypeOf()：

#### 有哪些方法会改变原数组？（至少 7 种）

JavaScript 中，有一些数组方法会直接修改原始数组，称为“就地方法”或“改变器方法”，这些方法包括：

1. **push()**：在数组末尾添加一个或多个元素。
1. **pop()**：删除并返回数组最后一个元素。
1. **shift()**：删除并返回数组的第一个元素。
1. **unshift()**：在数组开头添加一个或多个元素。
1. **splice()**：删除或替换数组的元素，可以在任何位置添加新元素。
1. **sort()**：对数组进行排序。
1. **reverse()**：将数组元素反转顺序。
1. **fill()**：用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
1. **copyWithin()**：在数组内部将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回修改后的数组。

这些方法会直接修改原始数组，不会创建新的数组。如果不想改变原始数组，可以使用“非就地方法”或“访问器方法”，如 slice()、concat()、filter()、map()、reduce()等。

#### 哪些方法不会改变原数组？（至少 7 种）

JavaScript 中有一些数组方法是不会改变原数组的，包括以下方法：

1. **concat()**: 连接两个或更多数组，并返回结果，原数组不会被修改。
1. **slice()**: 返回选定数组的元素，原数组不会被修改。
1. **join()**: 把数组的所有元素放入一个字符串，原数组不会被修改。
1. **toString()**: 把数组转换为字符串，并返回结果，原数组不会被修改。
1. **indexOf()**: 返回数组中某个元素第一次出现的位置，原数组不会被修改。
1. **lastIndexOf()**: 返回数组中某个元素最后一次出现的位置，原数组不会被修改。
1. **slice()**: 返回数组的一部分，原数组不会被修改。
1. **concat()**: 连接两个或更多数组，并返回结果，原数组不会被修改。
1. **includes()**: 判断一个数组是否包含某个值，原数组不会被修改。
1. **every()**: 检测数组中的所有元素是否满足指定条件，原数组不会被修改。
1. **some()**: 检测数组中的某些元素是否满足指定条件，原数组不会被修改。
1. **filter()**: 创建一个新数组，其中包含通过指定函数测试的所有元素，原数组不会被修改。
1. **map()**: 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后的返回值，原数组不会被修改。
1. **reduce()**: 将数组中的所有元素累加到一个值中，原数组不会被修改。
1. **reduceRight()**: 将数组中的所有元素累加到一个值中，原数组不会被修改。

需要注意的是，这些方法虽然不会改变原数组，但是有些方法会返回一个新的数组，需要将其赋值给一个新的变量使用。

#### 数组有哪些遍历方法？（至少 7 种）

JavaScript 数组有以下遍历方法：

1. **for** 循环：常规的 for 循环语句可以遍历数组元素，通过数组的 length 属性可以获取数组的长度。
2. **forEach** 方法：遍历数组元素，对每个元素执行回调函数。
3. **map** 方法：遍历数组元素，对每个元素执行回调函数，将返回值存入新的数组中。
4. **filter** 方法：遍历数组元素，对每个元素执行回调函数，根据返回值来过滤元素，将满足条件的元素存入新的数组中。
5. **reduce** 方法：遍历数组元素，对每个元素执行回调函数，将计算结果累加到一个累加器中，返回累加器的最终结果。
6. **every** 方法：遍历数组元素，对每个元素执行回调函数，当所有元素都满足条件时返回 true，否则返回 false。
7. **some** 方法：遍历数组元素，对每个元素执行回调函数，当任意一个元素满足条件时返回 true，否则返回 false。
8. **for...of** 循环：ES6 新增的语法，可以遍历数组元素。

**for 循环**：常规的 for 循环语句可以遍历数组元素，通过数组的 length 属性可以获取数组的长度。

```
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

**forEach 方法**：遍历数组元素，对每个元素执行回调函数。

```
const arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
  console.log(element);
});
```

**map 方法**：遍历数组元素，对每个元素执行回调函数，将返回值存入新的数组中。

```
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(function(element) {
  return element * 2;
});
console.log(newArr); // [2, 4, 6, 8, 10]
```

**filter 方法**：遍历数组元素，对每个元素执行回调函数，根据返回值来过滤元素，将满足条件的元素存入新的数组中。

```
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(function(element) {
  return element % 2 === 0;
});
console.log(newArr); // [2, 4]
```

**reduce 方法**：遍历数组元素，对每个元素执行回调函数，将计算结果累加到一个累加器中，返回累加器的最终结果。

```
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(function(acc, cur) {
  return acc + cur;
}, 0);
console.log(sum); // 15
```

**every 方法**：遍历数组元素，对每个元素执行回调函数，当所有元素都满足条件时返回 true，否则返回 false。

```
const arr = [1, 2, 3, 4, 5];
const isAllEven = arr.every(function(element) {
  return element % 2 === 0;
});
console.log(isAllEven); // false
```

**some 方法**：遍历数组元素，对每个元素执行回调函数，当任意一个元素满足条件时返回 true，否则返回 false。

```
const arr = [1, 2, 3, 4, 5];
const hasEven = arr.some(function(element) {
  return element % 2 === 0;
});
console.log(hasEven); // true
```

**for...of 循环**：ES6 新增的语法，可以遍历数组元素。

```
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}
```
