<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-07 22:06:54
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-19 21:05:08
 * @Description: 函数知识 function
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\JavaScript\Function.md
-->

#### JS 函数封装的原则是什么？

封装函数的原则有两个，即**单一职责**原则和**高内聚低耦合**原则。单一职责原则指一个函数只负责完成一个功能，不涉及其他业务逻辑，这样可以提高代码的可读性和可维护性。高内聚低耦合原则指封装的函数内部的代码应该高度相关，而与外部的代码关系应该尽可能小，这样可以提高代码的复用性和扩展性。

以下是一些 JS 函数封装的原则和实现方式：

1. 函数的声明、调用和参数
   1. 函数的声明：使用 function 关键字声明一个函数，可以不带参数，也可以带一个或多个参数。
   1. 函数的调用：使用函数名和实参列表调用函数，实参列表中的参数个数和类型要与函数声明中的形参一致。
   1. 函数的参数：可以有零个或多个参数，参数可以是基本类型或对象类型，也可以设置默认值。
      - 声明函数时，函数名括号里面的是形参，形参的默认值为 undefined。
      - 调用函数时，函数名括号里面的是实参，多个参数中间用逗号分隔。
      - 如果实参列表中没有传递参数，那么函数内部的形参就是 undefined。
2. 对象和命名空间的封装
   1. 对象和命名空间是 JS 中常用的封装方式之一，可以将相关的属性和方法封装在一个对象或命名空间中，提高代码的可读性和可维护性。
   1. 对象字面量命名空间：使用对象字面量的方式声明一个命名空间，将相关的属性和方法封装在其中。
   1. 闭包定义常量的封装：使用闭包的方式定义一个常量，将常量的值封装在函数内部，外部无法修改，提高代码的安全性和可维护性。
3. 通过 IIFE 实现类式封装
   1. 利用 IIFE（立即执行函数表达式）创建一个局部作用域，将需要暴露的属性和方法作为返回值暴露出去，实现类似类的封装。

#### JS 有哪些函数类型

JavaScript 中有以下几种函数类型：

1. **声明函数**（Function Declaration）：使用 function 关键字定义的函数，可以在任何地方调用。
1. **函数表达式**（Function Expression）：将函数赋值给一个变量或常量，通常使用的是匿名函数。
1. **箭头函数**（Arrow Function）：使用箭头符号定义的函数，通常用于简化代码和提高可读性。
1. **生成器函数**（Generator Function）：使用 function\*关键字定义的函数，可以生成一个可迭代的对象。
1. **构造函数**（Constructor Function）：使用 function 关键字定义的函数，可以用于创建对象实例。
1. **回调函数**（Callback Function）：作为参数传递给另一个函数的函数，通常用于异步编程。
1. **自执行函数**（Immediately Invoked Function Expression，IIFE）：定义后立即执行的函数，通常用于创建闭包和模块化编程。
1. **getter 和 setter 函数**：通过 get 和 set 关键字定义的函数，用于访问对象的属性。

#### JS 声明函数

JavaScript 中声明函数的语法如下：

```
function functionName(parameter1, parameter2, ...) {
  // 函数体
  return returnValue;
}
```

其中，functionName 是函数的名称，parameter1, parameter2, ...是函数的参数列表，函数体中的代码会在函数被调用时执行，returnValue 是函数的返回值。

例如，下面是一个简单的示例：

```
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(2, 3);
console.log(result); // 输出 5
```

在上面的示例中，addNumbers 是一个函数，它有两个参数 a 和 b，函数体中的代码将 a 和 b 相加并返回结果。通过调用 addNumbers(2, 3)，可以得到 5，然后将结果输出到控制台。

#### JS 函数表达式

JavaScript 中函数表达式是将一个函数赋值给变量或常量的方式来声明函数。函数表达式可以是匿名函数，也可以是具名函数。

匿名函数表达式的语法如下：

```
let functionName = function(parameter1, parameter2, ...) {
  // 函数体
  return returnValue;
}
```

具名函数表达式的语法如下：

```
let functionName = function functionName(parameter1, parameter2, ...) {
  // 函数体
  return returnValue;
}
```

其中，functionName 是函数的名称，可以在函数内部使用。parameter1, parameter2, ...是函数的参数列表，函数体中的代码会在函数被调用时执行，returnValue 是函数的返回值。

例如，下面是一个使用匿名函数表达式定义函数的示例：

```
let addNumbers = function(a, b) {
  return a + b;
}

let result = addNumbers(2, 3);
console.log(result); // 输出 5
```

在上面的示例中，addNumbers 是一个变量，它的值是一个匿名函数，该函数有两个参数 a 和 b，函数体中的代码将 a 和 b 相加并返回结果。通过调用 addNumbers(2, 3)，可以得到 5，然后将结果输出到控制台。

需要注意的是，函数表达式必须在使用之前声明。

#### JS 箭头函数

JavaScript 中的箭头函数是一种简洁的函数表达式，它使用箭头符号 => 来定义函数。箭头函数通常用于简化代码和提高可读性。

箭头函数的语法如下：

```
(parameter1, parameter2, ...) => {
  // 函数体
  return returnValue;
}
```

其中，parameter1, parameter2, ...是函数的参数列表，函数体中的代码会在函数被调用时执行，returnValue 是函数的返回值。

例如，下面是一个简单的箭头函数示例：

```
let addNumbers = (a, b) => {
  return a + b;
}

let result = addNumbers(2, 3);
console.log(result); // 输出 5
```

在上面的示例中，addNumbers 是一个箭头函数，它有两个参数 a 和 b，函数体中的代码将 a 和 b 相加并返回结果。通过调用 addNumbers(2, 3)，可以得到 5，然后将结果输出到控制台。

需要注意的是，如果箭头函数只有一个参数，则可以省略参数括号。如果函数体只有一条语句，则可以省略花括号和 return 关键字。例如：

```
let square = x => x * x;
let message = () => console.log('Hello, world!');
```

上面的示例中，square 是一个只有一个参数 x 的箭头函数，函数体中的代码将 x 的平方作为返回值。message 是一个没有参数的箭头函数，函数体中的代码输出一条消息到控制台。

#### JS 生成器函数

JavaScript 中的生成器函数是一种特殊的函数，它使用 function\* 关键字来定义。生成器函数可以生成一个可迭代的对象，可以逐步返回一系列的值。

生成器函数的语法如下：

```
function* functionName(parameter1, parameter2, ...) {
  // 函数体
  yield returnValue;
}
```

其中，functionName 是函数的名称，parameter1, parameter2, ...是函数的参数列表，函数体中的代码会在函数被调用时执行，returnValue 是函数的返回值。yield 关键字用于将值返回给调用者，并暂停函数的执行。当下一次调用生成器函数时，函数将从上一次暂停的地方继续执行。

例如，下面是一个简单的生成器函数示例：

```
function* fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (let num of fibonacci(10)) {
  console.log(num);
}
```

在上面的示例中，fibonacci 是一个生成器函数，它有一个参数 n，函数体中的代码使用斐波那契数列生成器算法生成斐波那契数列，并使用 yield 关键字逐步返回数列中的每个数字。通过使用 for...of 循环遍历生成器函数返回的可迭代对象，可以依次输出数列中的每个数字。

需要注意的是，生成器函数必须使用 yield 关键字来返回值，而不能使用 return 关键字。一旦生成器函数使用了 return 关键字，该函数将不再是一个生成器函数。

#### JS 构造函数

JavaScript 中的构造函数是一种特殊的函数，用于创建对象实例。构造函数使用 function 关键字定义，通常与 new 运算符一起使用来创建对象实例。

构造函数的语法如下：

```
function ConstructorName(parameter1, parameter2, ...) {
  // 属性和方法定义
}
```

其中，ConstructorName 是构造函数的名称，parameter1, parameter2, ... 是构造函数的参数列表，构造函数中的代码用于定义对象的属性和方法。

例如，下面是一个简单的构造函数示例：

```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
}

let john = new Person('John', 30);
john.sayHello(); // 输出 "Hello, my name is John and I am 30 years old."
```

在上面的示例中，Person 是一个构造函数，它有两个参数 name 和 age，构造函数中的代码用于定义对象的属性 name 和 age，以及方法 sayHello。通过使用 new 运算符来调用构造函数，可以创建一个新的 Person 对象实例，并将其赋值给变量 john。然后，通过调用 john.sayHello() 方法，可以输出 john 对象的属性值。

需要注意的是，构造函数中的属性和方法是每个对象实例所共享的，因此如果在构造函数中定义了方法，每个对象实例都将拥有该方法的副本。如果想要创建一个只有一个方法实例的对象，可以将该方法定义在对象的原型中。

#### JS 回调函数

JavaScript 中的回调函数是指将一个函数作为参数传递给另一个函数，并在该函数执行完成后调用该函数的过程。回调函数通常用于异步编程，例如在处理网络请求、文件读取等操作时。

回调函数的语法如下：

```
function callbackFunction(parameter1, parameter2, ...) {
  // 函数体
}

function mainFunction(callback) {
  // 主函数体
  callback(value1, value2, ...);
}
```

其中，callbackFunction 是回调函数的名称，parameter1, parameter2, ... 是回调函数的参数列表，函数体中的代码会在回调函数被调用时执行。mainFunction 是主函数的名称，它接受一个回调函数作为参数 callback，并在主函数体中执行一些操作后调用回调函数。value1, value2, ... 是回调函数的参数，它们的值由主函数传递给回调函数。

例如，下面是一个简单的回调函数示例：

```
function getUserData(userId, callback) {
  // 模拟网络请求获取用户数据
  setTimeout(() => {
    let userData = {id: userId, name: 'John Doe', age: 30};
    callback(userData);
  }, 1000);
}

function displayUserData(userData) {
  console.log('User data:', userData);
}

getUserData(123, displayUserData);
```

在上面的示例中，getUserData 是一个模拟网络请求的函数，它接受一个参数 userId 和一个回调函数 callback。在函数体中，使用 setTimeout 函数模拟异步操作，等待 1 秒后获取用户数据，并通过调用回调函数 callback 返回数据。displayUserData 是一个回调函数，它接受一个参数 userData，用于显示用户数据。通过调用 getUserData(123, displayUserData)，可以获取 id 为 123 的用户数据，并将其显示到控制台。

需要注意的是，回调函数必须在主函数执行完成后才能被调用，因此回调函数通常是异步执行的。此外，回调函数还可以作为匿名函数传递给主函数，例如：

```
getUserData(123, function(userData) {
  console.log('User data:', userData);
});
```

#### JS 自执行函数

JavaScript 中的自执行函数（Immediately Invoked Function Expression，IIFE）是一种定义后立即执行的函数，通常用于创建闭包和模块化编程。

自执行函数的语法如下：

```
(function(parameter1, parameter2, ...) {
  // 函数体
})(value1, value2, ...);
```

其中，(function() {...}) 是定义自执行函数的语法，函数体中的代码会在定义后立即执行。(value1, value2, ...) 是传递给自执行函数的参数列表，它们的值在执行函数时传递给函数。

例如，下面是一个简单的自执行函数示例：

```
(function() {
  let message = 'Hello, world!';
  console.log(message);
})();
```

在上面的示例中，定义了一个自执行函数，该函数输出一条消息到控制台。通过在函数定义后紧跟一对小括号，可以立即执行该函数。

需要注意的是，自执行函数通常用于创建闭包和模块化编程，因为自执行函数中的变量只在函数作用域内有效，不会污染全局作用域。例如：

```
let counter = (function() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
})();

counter(); // 输出 1
counter(); // 输出 2
counter(); // 输出 3
```

在上面的示例中，定义了一个自执行函数，该函数返回一个函数，用于实现计数器的功能。通过将自执行函数赋值给变量 counter，可以创建一个闭包，使得计数器的值在全局作用域中不可访问。然后，通过调用 counter() 方法，可以逐步增加计数器的值，并将其输出到控制台。

#### JS 的 getter 和 setter 函数

JavaScript 中的 getter 和 setter 函数是一种特殊的函数，用于访问对象的属性。getter 函数用于获取属性的值，而 setter 函数用于设置属性的值。

getter 函数的语法如下：

```
get propertyName() {
  // 函数体
  return propertyValue;
}
```

其中，propertyName 是要访问的属性的名称，函数体中的代码用于获取属性的值，并将其返回。

setter 函数的语法如下：

```
set propertyName(value) {
  // 函数体
}
```

其中，propertyName 是要访问的属性的名称，value 是要设置的属性的值，函数体中的代码用于设置属性的值。

例如，下面是一个简单的 getter 和 setter 函数示例：

```
let person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    let parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // 输出 "John Doe"
person.fullName = 'Jane Smith';
console.log(person.fullName); // 输出 "Jane Smith"
```

在上面的示例中，定义了一个对象 person，该对象有两个属性 firstName 和 lastName，以及一个 getter 和 setter 函数 fullName。通过调用 person.fullName 来获取全名，或者调用 person.fullName = 'Jane Smith' 来设置全名，可以使用 getter 和 setter 函数来访问和设置属性的值。

需要注意的是，getter 和 setter 函数不是 ES5 标准中的一部分，而是 ES2015（ES6）标准中的一个新特性。在旧版本的 JavaScript 中，可以使用一些约定俗成的命名方式来实现类似的功能，例如将 getter 函数命名为 getPropertyName()，将 setter 函数命名为 setPropertyName(value)。
