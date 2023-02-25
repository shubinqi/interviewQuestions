<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:04:05
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-25 15:48:24
 * @Description: JavaScript 面试题汇总
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\JavaScript.md
-->

### JavaScript 的数据类型有哪些？

主要包括 null、undefined、string、number、boolean、object、symbal、bigint。
主要包括 空对象指针、未定义、字符串、数字、布尔、对象、符号、大整数。
（回答就 0 分有：数组、函数、日期，这些是 类 class；不是类型 type）

### 判断数据类型的方法有哪些？

① 判断多种数据类型

1. typeof：可以判断除 null 外的基本数据类型
2. instanceof：可以正确判断对象的类型
3. construter：可以正确判断数据类型（如果创建一个对象并改变他的原型，就不能用 construter 判断类型了）
4. Object.prototype.toString.call()：可以正确判断对象的类型

② 判定单个数据类型

1. Array.isArray()：判断是否是数组类型

③ 判断某个数据

1. isNaN：判断是否是一个非数字（会进行类型转换）
2. Number.isNaN：判断是否是一个非数字（首先判断是否是数字，再进行判断）
   ```
   console.log(isNaN('测试')) //true
   console.log(Number.isNaN('测试')) //false
   ```
3. isFinite() 用来判断被传入的参数值是否为一个有限数值（finite number），如果参数是 NaN，正无穷大或者负无穷大，会返回 false，其他返回 true。

### null 和 undefined 的区别是什么？

null：空指针对象
undefined：未定义
相同点：都是基本数据类型
不同点：

1. 变量声明了但还没有定义的时候会返回 undefined；null 主要用于赋值给一些可能会返回对象的变量，作为初始化。
2. 使用 typeof 判断类型时 null 会返回 object；undefined 正确返回。（这是一个历史遗留的问题）

### 判断数组类型有哪几种方法？

1. Array.isArray()：
2. Object.peototype.toString.call()：
3. instanceof：
4. Array.isPrototypeOf()：

