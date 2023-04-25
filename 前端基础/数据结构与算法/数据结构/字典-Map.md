<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:33:11
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:21:25
 * @Description: 字典-Map
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\字典-Map.md
-->

#### JS 字典

在 JavaScript 中，字典是一种非常有用的数据结构，它将键值对映射起来，并允许通过键来访问值。字典通常实现为 JavaScript 对象，其中对象中的属性名表示键，属性值表示相应的值。

下面是一个示例代码，用于创建和操作字典：

```
// 创建字典
function Dictionary() {
  this.dataStore = {};
}

// 添加键值对
Dictionary.prototype.add = function(key, value) {
  this.dataStore[key] = value;
};

// 获取指定键的值
Dictionary.prototype.get = function(key) {
  return this.dataStore[key];
};

// 删除指定键值对
Dictionary.prototype.remove = function(key) {
  delete this.dataStore[key];
};

// 获取字典中所有键名
Dictionary.prototype.keys = function() {
  return Object.keys(this.dataStore);
};

// 获取字典中所有键值对
Dictionary.prototype.entries = function() {
  return Object.entries(this.dataStore);
};
```

这段代码中，我们首先定义了 Dictionary 类，并在其中创建了一个空的对象 dataStore 作为存储键值对的容器。接着，我们实现了 add 方法来添加键值对，get 方法用于获取指定键的值，remove 方法用于删除指定键值对，keys 方法用于获取所有键名，entries 方法用于获取所有键值对。

下面是使用上述代码创建字典对象并操作字典的示例：

```
const dict = new Dictionary();

dict.add("one", 1);
dict.add("two", 2);
dict.add("three", 3);

console.log(dict.get("one")); // 输出 1

dict.remove("two");

console.log(dict.keys()); // 输出 ["one", "three"]

console.log(dict.entries()); // 输出 [["one", 1], ["three", 3]]
```

这段示例代码创建了一个字典对象，并使用 add 方法向其中添加了三个键值对。接着，通过 get 方法获取了键为 "one" 的值，并使用 remove 方法删除了键为 "two" 的键值对。最后使用 keys 方法和 entries 方法分别获取了字典中所有的键名和键值对，并输出了结果。

以上就是 JavaScript 中实现字典数据结构的简单示例，字典的这种键值对的映射关系非常强大，可用于解决各种问题。
