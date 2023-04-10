#### filter 方法

1. 数组去重

示例代码：

```
const arr = [1, 2, 3, 4, 3, 2, 1];
const uniqueArr = arr.filter((item, index, array) => {
  return array.indexOf(item) === index;
});
console.log(uniqueArr); // [1, 2, 3, 4]
```

2. 数组过滤

示例代码：

```
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((item, index, array) => {
  return item > 3;
});
console.log(filteredArr); // [4, 5]
```

3. 数组查找

示例代码：

```
const arr = [1, 2, 3, 4, 5];
const foundItem = arr.filter((item, index, array) => {
  return item === 3;
});
console.log(foundItem); // [3]
```

4. 删除数组中的空元素

示例代码：

```
const arr = ["foo", "", "bar", "", "baz"];
const nonEmptyArr = arr.filter((item) => {
  return item !== "";
});
console.log(nonEmptyArr); // ["foo", "bar", "baz"]
```

5. 对象数组过滤

示例代码：

```
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const filteredUsers = users.filter((user) => {
  return user.age > 30;
});
console.log(filteredUsers); // [{ name: "Charlie", age: 35 }]
```

6. 数组按条件排序

示例代码：

```
const arr = [5, 2, 8, 1, 4, 9];
const sortedArr = arr.filter((item) => {
  return item > 3;
}).sort();
console.log(sortedArr); // [4, 5, 8, 9]
```

7. 数组分组

示例代码：

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const groupedArr = arr.filter((item) => {
  return item % 2 === 0;
}).reduce((result, item) => {
  const index = Math.floor(item / 5);
  result[index] = result[index] || [];
  result[index].push(item);
  return result;
}, []);
console.log(groupedArr); // [[2, 4], [6, 8]]
```

8. 数组转换

示例代码：

```
const arr = [1, 2, 3, 4, 5];
const transformedArr = arr.filter((item) => {
  return item > 2;
}).map((item) => {
  return item * 2;
});
console.log(transformedArr); // [6, 8, 10]
```

9. 数组分页

示例代码：

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pageSize = 3;
const page = 2;
const start = (page - 1) * pageSize;
const end = start + pageSize;
const pagedArr = arr.filter((item, index) => {
  return index >= start && index < end;
});
console.log(pagedArr); // [4, 5, 6]
```

10. 过滤出符合条件的对象

示例代码：

```
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const filteredUser = users.filter((user) => {
  return user.name === "Bob";
});
console.log(filteredUser); // [{ name: "Bob", age: 30 }]
```
