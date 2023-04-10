<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-10 21:32:12
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-10 21:38:33
 * @Description: reduce 方法常见使用场景和示例代码
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\项目研发\原生JS代码片段\reduce方法.md
-->

#### reduce 方法常见使用场景和示例代码

1. 数组求和

```
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
```

2. 数组去重

```
const arr = [1, 2, 2, 3, 3, 4, 5];
const uniqueArr = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

3. 对象属性求和

```
const obj = { a: 1, b: 2, c: 3 };
const sum = Object.values(obj).reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 6
```

4. 数组元素计数

```
const arr = [1, 2, 2, 3, 3, 3];
const countObj = arr.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(countObj); // {1: 1, 2: 2, 3: 3}
```

5. 数组元素分组

```
const arr = ['apple', 'banana', 'blueberry', 'cherry', 'coconut'];
const groupObj = arr.reduce((acc, cur) => {
  const firstChar = cur[0];
  if (firstChar in acc) {
    acc[firstChar].push(cur);
  } else {
    acc[firstChar] = [cur];
  }
  return acc;
}, {});
console.log(groupObj);
// {
//   a: ['apple'],
//   b: ['banana', 'blueberry'],
//   c: ['cherry', 'coconut']
// }
```

6. 数组元素排序

```
const arr = [3, 2, 1, 4, 5];
const sortedArr = arr.reduce((acc, cur) => {
  const index = acc.findIndex(item => item > cur);
  if (index === -1) {
    acc.push(cur);
  } else {
    acc.splice(index, 0, cur);
  }
  return acc;
}, []);
console.log(sortedArr); // [1, 2, 3, 4, 5]
```

7. 数组元素累加器

```
const arr = [1, 2, 3, 4, 5];
const accArr = arr.reduce((acc, cur, index) => {
  if (index === 0) {
    acc.push(cur);
  } else {
    acc.push(acc[index - 1] + cur);
  }
  return acc;
}, []);
console.log(accArr); // [1, 3, 6, 10, 15]
```

8. 数组元素分块

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const chunkArr = arr.reduce((acc, cur, index) => {
  const chunkIndex = Math.floor(index / chunkSize);
  if (!acc[chunkIndex]) {
    acc[chunkIndex] = [];
  }
  acc[chunkIndex].push(cur);
  return acc;
}, []);
console.log(chunkArr); // [[1, 2, 3], [4, 5, 6], [7, 8]]
```

9. 数组元素过滤

```
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(filteredArr); // [2, 4]
```

10. 数组元素转换

```
const arr = [1, 2, 3, 4, 5];
const transformedArr = arr.reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []);
console.log(transformedArr); // [2, 4, 6, 8, 10]
```

11. 对象属性值求和

```
const obj = {
  a: 1,
  b: 2,
  c: 3
};
const sum = Object.values(obj).reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 6
```

12. 对象属性值转换

```
const obj = {
  a: 1,
  b: 2,
  c: 3
};
const transformedObj = Object.entries(obj).reduce((acc, [key, value]) => {
  acc[key] = value * 2;
  return acc;
}, {});
console.log(transformedObj); // {a: 2, b: 4, c: 6}
```

13. 数组元素去重

```
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const uniqueArr = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(uniqueArr); // [1, 2, 3, 4]
```

14. 数组元素去重并计数

```
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const countObj = arr.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur]++;
  }
  return acc;
}, {});
console.log(countObj); // {1: 1, 2: 2, 3: 3, 4: 4}
```

15. 数组元素统计

```
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const stats = arr.reduce((acc, cur) => {
  acc.sum += cur;
  acc.count++;
  acc.avg = acc.sum / acc.count;
  return acc;
}, { sum: 0, count: 0, avg: 0 });
console.log(stats); // {sum: 26, count: 10, avg: 2.6}
```
