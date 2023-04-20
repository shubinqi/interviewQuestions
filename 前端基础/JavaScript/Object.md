<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-07 22:07:03
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-20 20:20:32
 * @Description: Object 对象知识
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\JavaScript\Object.md
-->

#### JS 中的 Object

JavaScript 中的 Object 是一种数据结构，可以将各种数据类型存储为键值对。它可以包含属性和方法，可以使用点符号或方括号符号访问和修改。对象是动态的，可以轻松修改，是 JavaScript 编程中的强大工具。

以下是 JavaScript 中的对象示例：

```
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  hobbies: ['reading', 'hiking', 'cooking'],
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

在这个例子中，person 是一个对象，有四个属性：name、age、address 和 hobbies。address 属性本身是一个对象，有三个属性：street、city 和 state。hobbies 属性是一个包含三个字符串的数组。最后，person 对象还有一个 sayHello 方法，用于打印问候语。

#### JS 中的 Object 有哪些属性和方法

JavaScript 中的 Object 有很多属性和方法，以下是其中一些常见的：

属性：

1. Object.prototype: 所有的对象都会从 Object.prototype 继承属性和方法
1. Object.length: 返回 Object 构造函数的属性个数
1. Object.prototype.constructor: 返回创建实例对象的 Object 构造函数的引用
1. Object.prototype.\_\_proto\_\_: 一个指向该对象的原型链上的对象，通常称为原型

方法：

1. Object.assign(target, ...sources): 将一个或多个源对象的属性复制到目标对象中
1. Object.create(proto, [propertiesObject]): 使用指定的原型对象和属性创建一个新对象
1. Object.keys(obj): 返回一个由对象的自身可枚举属性组成的数组
1. Object.values(obj): 返回一个由对象的自身可枚举属性值组成的数组
1. Object.entries(obj): 返回一个由对象的自身可枚举属性键值对组成的数组
1. Object.freeze(obj): 冻结一个对象，使其属性不能被修改、添加或删除
1. Object.seal(obj): 密封一个对象，使其属性不能被添加或删除，但是可以修改属性的值

以上只是 Object 中的一部分属性和方法，还有很多其他的属性和方法可以使用。
