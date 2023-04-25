<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:32:58
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:14:10
 * @Description: 集合-Set
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\集合-Set.md
-->

#### JS 集合

在 JavaScript 中，集合通常用对象来实现。一个集合对象是一个无序且唯一的键（key）组成的键值对集合。JavaScript 对象中的属性必须是唯一的，这使得它成为实现集合的理想方式。

创建一个集合对象需要以下几步：

1. 创建一个对象；
1. 添加若干个属性，每个属性用作一个键；
1. 每个属性的值可以是任何 JavaScript 数据类型。

下面是一个实现集合对象的简单示例：

```
class Set {
  constructor() {
    this.set = {};
  }
  // 添加元素
  add(element) {
    if (!this.has(element)) {
      this.set[element] = element;
      return true;
    }
    return false;
  }
  // 删除元素
  delete(element) {
    if (this.has(element)) {
      delete this.set[element];
      return true;
    }
    return false;
  }
  // 判断元素是否在集合中
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.set, element);
  }
  // 清除集合中所有元素
  clear() {
    this.set = {};
  }
  // 获取集合元素个数
  get size() {
    return Object.keys(this.set).length;
  }
  // 获取集合中的所有元素
  values() {
    return Object.values(this.set);
  }
}
```

上面代码中我们使用了对象来实现集合数据结构，其中 set 属性用于存储集合元素。add 方法用来添加元素，如果元素已经存在则不操作，添加成功返回 true，否则返回 false。delete 方法用来删除元素，删除成功返回 true，否则返回 false。has 方法用于判断一个元素是否在集合中，如果存在返回 true，否则返回 false。clear 方法用于清空集合中的所有元素。size 属性用于获取集合元素个数。values 方法用于获取集合中的所有元素，并返回一个数组。

我们可以通过上述代码实现一个简单的集合对象，然后可以使用它来进行集合相关的操作，例如：

```
const set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set.size); // 3

set.delete(2);

console.log(set.has(1)); // true
console.log(set.has(2)); // false

console.log(set.values()); // [1, 3]
```

总之，在 JavaScript 中可以使用对象来实现集合数据结构，使用集合来存储一组唯一的值。
