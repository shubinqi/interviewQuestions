<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:32:20
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:09:05
 * @Description: 栈-Stack
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\栈-Stack.md
-->

#### JS 栈

JS（JavaScript）栈是一个基于 JavaScript 语言的数据结构，具有后进先出（LIFO）的特点。主要有以下两个操作：

1. push(): 将元素添加到栈顶；
1. pop(): 从栈顶移除元素。

JS 栈常用于实现程序调用栈、撤销操作、括号匹配等场景。同时，JS 栈可以通过 Array 对象来实现，如下所示：

```
// 创建一个空栈
let stack = [];

// 压栈
stack.push(1);
stack.push(2);
stack.push(3);

// 弹栈
let top = stack.pop(); // top = 3
```

需要注意的是，JS 栈不支持随机访问，也就是说不能像数组一样通过索引来访问元素。如果需要随机访问的功能，可以考虑使用数组。
