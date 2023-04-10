<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-10 21:28:56
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-10 21:39:06
 * @Description: map方法常见使用场景和示例代码
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\项目研发\原生JS代码片段\map方法.md
-->

> 列举一些项目研发中 JS 的 filter 方法常用到的场景并写出相关示例代码

#### map 方法常见使用场景和示例代码

1. 对数组进行遍历并操作每个元素

示例代码：

```
const arr = [1, 2, 3, 4];
const newArr = arr.map(item => item * 2);
console.log(newArr); // [2, 4, 6, 8]
```

2. 对象数组中提取某个属性值

示例代码：

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']
```

3. 对象数组中根据某个属性值进行过滤

示例代码：

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];
const youngUsers = users.filter(user => user.age < 30);
const youngUserNames = youngUsers.map(user => user.name);
console.log(youngUserNames); // ['Alice', 'Bob']
```

4. 对象数组中根据某个属性值进行排序

示例代码：

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];
const sortedUsers = users.sort((a, b) => a.age - b.age);
const sortedUserNames = sortedUsers.map(user => user.name);
console.log(sortedUserNames); // ['Alice', 'Bob', 'Charlie']
```

5. 对象数组中根据某个属性值进行计算

示例代码：

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge); // 90
```

6. 数组中去重

示例代码：

```
const arr = [1, 2, 3, 2, 1, 4];
const uniqueArr = arr.filter((item, index, array) => array.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4]
```

7. 对象数组中的属性值进行格式化

示例代码：

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];
const formattedUsers = users.map(user => ({
  name: user.name.toUpperCase(),
  age: `${user.age} years old`,
}));
console.log(formattedUsers);
/*
[
  { name: 'ALICE', age: '25 years old' },
  { name: 'BOB', age: '30 years old' },
  { name: 'CHARLIE', age: '35 years old' }
]
*/
```

8. 数组中的元素进行类型转换

示例代码：

```
const arr = ['1', '2', '3'];
const numArr = arr.map(Number);
console.log(numArr); // [1, 2, 3]
```

9. 对象数组中的属性值进行提取并进行计算

示例代码：

```
const users = [
  { name: 'Alice', age: 25, salary: 5000 },
  { name: 'Bob', age: 30, salary: 7000 },
  { name: 'Charlie', age: 35, salary: 9000 },
];
const totalSalary = users.map(user => user.salary).reduce((acc, salary) => acc + salary, 0);
console.log(totalSalary); // 21000
```

10. 对象数组中的属性值进行比较

示例代码：

```
const users = [
  { name: 'Alice', age: 25, salary: 5000 },
  { name: 'Bob', age: 30, salary: 7000 },
  { name: 'Charlie', age: 35, salary: 9000 },
];
const highestSalaryUser = users.reduce((acc, user) => acc.salary > user.salary ? acc : user);
console.log(highestSalaryUser); // { name: 'Charlie', age: 35, salary: 9000 }
```
