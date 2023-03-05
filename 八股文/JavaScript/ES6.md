<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 22:34:12
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-05 23:21:40
 * @Description: 八股文：ES6（14题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\JavaScript\ES6.md
-->

#### ES6 有哪些新语法？

ES6（ECMAScript 2015）引入了许多新的语法和特性，其中一些主要的包括：

1. **块级作用域**：使用 let 和 const 声明变量时可以创建块级作用域。
1. **箭头函数**：使用 => 语法定义匿名函数。
1. **解构赋值**：可以从数组和对象中提取值并将其赋给变量。
1. **模板字符串**：使用反引号 `` 来创建多行字符串，并且可以在字符串中插入表达式。
1. **默认参数**：定义函数参数的默认值。
1. **展开运算符**：使用 ... 语法来展开数组或对象。
1. **类和继承**：使用 class 和 extends 关键字来定义类和继承。
1. **模块化**：使用 import 和 export 关键字来导入和导出模块。
1. **Promise**：处理异步操作的一种方法，可以通过链式调用来组合多个异步操作。
1. **Symbol**：引入了一种新的原始数据类型，用于创建唯一的标识符。
1. **Map 和 WeakMap**：字典，一种新的集合类型，为 ECMAScript 语言带来了真正的键/值存储机制
1. **Set 和 WeakSet**：集合，一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。
1. **迭代器和生成器**：迭代器是一种对象，可以通过 next() 方法按顺序返回值，而生成器是一种函数，可以使用 yield 关键字来定义迭代器。
1. **for...in**：用于遍历对象中的属性，它会将对象的属性名称作为循环变量来访问对象的每一个属性。
1. **for...of**：用于遍历可迭代对象（如数组、Map、Set 等），它会将集合中的每一个元素作为循环变量来访问每一个元素。

#### Map 和 Object 的区别？

1. **Object** 是 JavaScript 中的内置对象，用于存储键值对，键必须是字符串或符号。而 Map 是 ES6 新增的一种数据结构，也用于存储键值对，键可以是任意数据类型。
1. **Map** 具有更好的数据结构设计，能更高效地存储大量的键值对，并且提供了更多的方法用于操作键值对，比如 size 属性可以获取 Map 中键值对的数量。

#### Map 和 Set 的区别？

1. Set 用于存储唯一值的集合，而 Map 用于存储键值对的映射关系。
1. Set 只存储值，没有键，而 Map 存储键值对。
1. Set 只有一个值，而 Map 可以将任何值用作键或值。

#### Map 和 WeakMap 的区别？

1. Map 和 WeakMap 都是用于存储键值对的数据结构。
1. WeakMap 只能使用对象作为键，但是 Map 可以使用任何数据类型作为键。
1. WeakMap 中的键是弱引用，如果只有 WeakMap 对象中的键引用了某个对象，而该对象没有被其他对象引用，那么该对象会被垃圾回收机制回收。
1. WeakMap 没有 size 属性，也没有 clear() 方法，而且不能遍历其中的键或值。

#### Set 和 WeakSet 的区别？

1. **对象引用类型**：Set 存储的是对象的引用，WeakSet 存储的是对象的弱引用，因此 WeakSet 中的对象都是可被垃圾回收的，当对象被回收后，WeakSet 会自动删除对应的元素。
1. **值唯一性**：Set 中的值必须是唯一的，重复的值会被自动过滤掉，而 WeakSet 中的值可以是重复的，因为它们是通过引用来判断是否相等的。
1. **迭代器**：Set 是可迭代的，可以通过 for...of 循环来遍历集合中的每一个值，而 WeakSet 是不可迭代的，不能直接遍历 WeakSet 中的元素。
1. **方法**：Set 和 WeakSet 有一些不同的方法，如 Set 中的 size 属性用于获取集合中的元素个数，而 WeakSet 中没有 size 属性；Set 中的 delete 方法可以删除集合中指定的元素，而 WeakSet 中没有 delete 方法，因为它的元素是可被自动删除的。

#### for 循环和 forEach 的区别？

1. **for 循环**是 JavaScript 中最常用的循环语句，可以遍历数组和对象等集合数据类型。它的语法结构简单，可以通过控制循环变量来访问集合中的每一个元素。
1. **forEach** 是数组的一个内置方法，也用于遍历数组中的每一个元素。但是它的语法比较简洁，不需要控制循环变量，而是直接接收一个回调函数作为参数，该函数会被自动调用来处理每一个数组元素。因此，forEach 可以更加简洁和直观地遍历数组，也更适合处理一些数组操作，比如计算数组的总和或平均值等。

> for 循环比较常用，可控制性强，可以用于遍历集合、实现条件语句等多种场景；forEach 可以更加简洁地遍历数组，适用于一些数组操作

#### for...in 和 for...of 的区别？

1. **for...in** 用于遍历对象中的属性，它会将对象的属性名称作为循环变量来访问对象的每一个属性。但是，它并不保证属性的访问顺序，也可能访问到一些原型链中的属性。
1. **for...of** 用于遍历可迭代对象（如数组、Map、Set 等），它会将集合中的每一个元素作为循环变量来访问每一个元素。与 for...in 不同，for...of 遍历的是集合中的元素，而不是属性。

> for...in 适用于遍历对象属性，但是不保证属性访问顺序；for...of 适用于遍历集合中的元素，比如数组、Map、Set 等。

#### 什么是 Ajax？有什么优缺点？

Ajax（Asynchronous Javascript And XML），是一种用于创建交互式网页应用的技术，用于提高浏览器和服务器之间的交互效率，快速创建动态网页。Ajax 是一种在浏览器与服务器之间的异步通信方式，可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，直到成功获取响应后，浏览器才开始处理响应数据。XML 是前后端数据通信时传输数据的一种格式，而 JSON 比 XML 更加轻量，作为 Javascript 的一部分，目前 JSON 的使用比 XML 更加普遍。Ajax 可以在浏览器不重新加载网页的情况下，对页面的某部分进行更新。Ajax 的应用场景包括注册页面、搜索提示等。在 Ajax 模型中，XMLHttpRequest 是最重要的技术之一，可以使用 Fetch API 设置 XMLHttpRequest 对象的 responseType 属性以改变从服务器端获取数据的类型。Ajax 应用程序独立于浏览器和平台，使用的 Web 标准包括 JavaScript、XML、HTML 与 CSS。

优点：

- **实现无刷新更新数据**：Ajax 可以在不刷新整个页面的情况下与服务器通信，维护数据，使得 Web 应用程序更为迅捷地响应用户交互，减少用户等待时间，带来非常好的用户体验。
- **异步与服务器通信**：Ajax 使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的响应能力。它优化了 Browser 和 Server 之间的沟通，减少不必要的数据传输、时间及降低网络上数据流量。
- **前端和后端负载平衡**：Ajax 可以把一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。

缺点：

- **不支持浏览器 back 按钮**：因为 Ajax 不会改变浏览器的 URL，所以在使用浏览器的 back 按钮时，会导致用户回到上一个页面，但是页面内容并未更新，造成用户体验上的不便。
- **安全问题**：Ajax 暴露了与服务器交互的细节，可能会被黑客利用，攻击应用程序。同时，Ajax 应用程序中的安全性较低，因为所有文件都是在客户端下载的。
- **对搜索引擎的支持比较弱**：因为 Ajax 不会改变浏览器的 URL，所以搜索引擎无法获取到 Ajax 请求的内容，影响 SEO。
- **破坏了程序的异常机制**：Ajax 的异步请求可能破坏程序的异常机制，因为它不会像同步请求一样抛出异常。

总之，Ajax 技术能够带来更好的用户体验，提高性能和速度，但是也存在一些安全和兼容性问题，需要在开发过程中注意。

#### 什么是回调地狱？回调地狱会带来什么问题？如何解决回调地狱问题？

回调地狱指的是多层嵌套的回调函数，形成代码缩进过深、难以维护和理解的情况。

回调地狱会导致代码复杂度上升，难以调试和维护，同时也会影响代码的可读性和可维护性。

解决回调地狱的方法有以下几种：

1. **Promise**：使用 Promise 可以将异步操作封装成 Promise 实例，在 Promise 实例中链式调用 then 方法，避免了多层嵌套的回调函数，使代码更加可读且易于维护。
1. **async/await**：async/await 是在 Promise 基础上的语法糖，可以更加优雅地处理异步操作。使用 async/await 可以将异步操作写成同步代码的形式，避免了回调地狱的问题。
1. **发布/订阅模式**：发布/订阅模式是一种广泛使用的异步编程模式，通过发布者发布消息，订阅者订阅消息，实现了解耦和更好的可维护性。在该模式中，发布者和订阅者通过事件或消息进行交互，而不是通过直接调用回调函数。

综上所述，使用 Promise、async/await 或发布/订阅模式可以避免回调地狱的问题，使代码更加易于维护和扩展。

#### Promise 是什么？解决了什么问题？

Promise 是一种用于异步编程的 JavaScript 对象，它可以更好地管理和组织异步操作。Promise 提供了一种解决 Ajax 回调地狱（Callback Hell）的方案，使得异步代码可以更加清晰和易于维护。

Promise 具有三个状态：Pending（等待状态）、Fulfilled（已完成状态）和 Rejected（已失败状态）。

1. 当异步操作尚未完成时，Promise 的状态为 Pending；
1. 当异步操作成功完成时，Promise 的状态为 Fulfilled；
1. 当异步操作失败时，Promise 的状态为 Rejected。

使用 Promise 我们可以通过链式调用 then 方法来处理异步操作的结果，也可以使用 catch 方法来处理异步操作的错误。

Promise 的出现大大简化了异步编程，使得异步代码的可读性和可维护性都有了很大的提升。

例如，可以通过 Promise 实现读取文件：

```
const fs = require('fs/promises');

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

#### Promise 是什么？有哪几种状态？怎么改变状态？

Promise 是 JavaScript 中的一种异步编程解决方案，可以避免回调地狱，简化异步操作的代码编写和维护。

Promise 有三种状态：pending（等待）、fulfilled（已完成）和 rejected（已拒绝）。Promise 对象的状态只能由 pending 转变为 fulfilled 或 rejected，一旦状态变化，就不会再改变。

Promise 对象的状态转变由 resolve 和 reject 函数来改变。resolve 函数用于将 Promise 对象的状态从 pending 转变为 fulfilled，reject 函数用于将 Promise 对象的状态从 pending 转变为 rejected。可以将 resolve 和 reject 函数作为参数传递给 Promise 构造函数。

例如，下面的代码演示了如何创建一个 Promise 对象，并使用 resolve 和 reject 函数改变其状态：

```
let promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    // 异步操作成功
    resolve('成功');
  }, 1000);
});

promise.then(value => {
  console.log(value); // 输出：成功
});
```

在上面的代码中，Promise 构造函数接受一个回调函数作为参数，该回调函数有两个参数，分别是 resolve 和 reject 函数。在回调函数中，进行了一个异步操作，当异步操作成功时，调用 resolve 函数将 Promise 对象的状态从 pending 转变为 fulfilled，并将操作结果作为参数传递给 then 方法；当异步操作失败时，调用 reject 函数将 Promise 对象的状态从 pending 转变为 rejected，并将错误信息作为参数传递给 catch 方法。

Promise 对象的状态一旦改变，就不会再次改变。因此，可以通过链式调用 then 和 catch 方法，依次处理异步操作成功和失败的情况。例如：

```
let promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    // 异步操作成功
    resolve('成功');
  }, 1000);
});

promise.then(value => {
  console.log(value); // 输出：成功
  return value.toUpperCase();
}).then(value => {
  console.log(value); // 输出：成功
}).catch(error => {
  console.error(error);
});
```

在上面的代码中，通过链式调用 then 方法，依次处理异步操作成功的情况，并将操作结果转换为大写字母。如果链式调用 then 方法时出现异常，会立即调用 catch 方法。

#### Promise 有哪些 API？

Promise 是 ES6 中新增的一种异步编程解决方案，提供了更加简洁、直观的异步编程写法，并且也为异步编程的错误处理提供了更好的支持。

Promise 提供了一些 API 来处理异步操作的状态和结果：

1. **Promise.prototype.then()**：注册异步操作成功时的回调函数，可以链式调用多个 then() 方法；
1. **Promise.prototype.catch()**：注册异步操作失败时的回调函数，可以捕获异步操作过程中的错误；
1. **Promise.prototype.finally()**：无论异步操作成功或失败，都会执行的回调函数；
1. **Promise.all(iterable)**：接收一个可迭代对象，返回一个 Promise 实例，当可迭代对象中所有的 Promise 实例都成功执行时，返回的 Promise 实例才会成功执行，否则失败；
1. **Promise.race(iterable)**：接收一个可迭代对象，返回一个 Promise 实例，当可迭代对象中任意一个 Promise 实例执行成功或失败时，返回的 Promise 实例就会立即执行并返回这个 Promise 实例的状态和结果。

除了以上几个 API，Promise 还提供了一些静态方法来创建 Promise 实例或执行 Promise 相关操作：

1. **Promise.resolve(value)**：返回一个 Promise 实例，状态为已解决，结果为指定的值；
1. **Promise.reject(reason)**：返回一个 Promise 实例，状态为已拒绝，结果为指定的错误原因；
1. **Promise.allSettled(iterable)**：接收一个可迭代对象，返回一个 Promise 实例，当可迭代对象中所有的 Promise 实例都执行完毕时，返回一个 Promise 实例，其状态总是已解决，结果是一个对象数组，数组中每个对象表示一个 Promise 实例的状态和结果；
1. **Promise.any(iterable)**：接收一个可迭代对象，返回一个 Promise 实例，当可迭代对象中任意一个 Promise 实例成功执行时，返回的 Promise 实例就会立即执行并返回这个 Promise 实例的状态和结果，如果可迭代对象中所有 Promise 实例都失败，则返回的 Promise 实例也失败。

#### Promise.all、Promise.race、Promise.any 的区别？

Promise.all、Promise.race、Promise.any 都是 Promise 提供的方法，它们的区别如下：

1. **Promise.all**：接收一个可迭代对象，比如数组，里面的所有 Promise 对象都 fulfilled 后才会将所有的结果封装成一个新的数组返回，如果有一个 Promise 被 rejected，那么 Promise.all 返回的 Promise 对象也会 reject，并且 reject 的是第一个被 reject 的 Promise 的返回值。
1. **Promise.race**：和 Promise.all 一样，接收一个可迭代对象，但是它的返回值是第一个完成的 Promise 对象的返回值，不管是 fulfilled 还是 rejected。
1. **Promise.any**：和 Promise.all 类似，接收一个可迭代对象，只要其中一个 Promise 对象状态变为 fulfilled，就会将这个 Promise 对象的返回值封装成一个新的 Promise 对象返回，如果所有的 Promise 对象都是 rejected 状态，则返回的 Promise 对象也是 rejected，返回的是所有 rejected 的 Promise 对象的返回值数组。

需要注意的是，Promise.any 是 ES2021 新增的方法，在一些浏览器或环境中可能不支持。

#### Promise 有什么优缺点？

Promise 是 JavaScript 中处理异步编程的一种解决方案，它具有以下优点和缺点：

优点：

1. **简化异步编程流程**：Promise 使得异步操作可以像同步操作一样流程化，提高代码可读性。
1. **避免回调地狱**：Promise 的链式调用可以避免回调地狱，使代码更加易于理解和维护。
1. **可以进行错误处理**：通过 .catch() 方法或者 Promise 的第二个参数，可以捕获异常并进行处理。
1. **支持并发**：可以使用 Promise.all() 方法将多个异步操作并发执行，并在所有操作完成后获取结果。

缺点：

1. **学习成本高**：Promise 作为一种异步编程解决方案，需要一定的学习成本和适应时间。
1. **无法取消 Promise**：一旦 Promise 被创建，就无法取消它，这可能会导致资源的浪费。
1. **不支持同步操作**：Promise 只支持异步操作，无法处理同步操作，这可能会导致一些问题。
1. **无法捕获 Promise 中的异常**：如果在 Promise 中抛出异常，而没有进行处理，可能会导致程序的崩溃。

#### async/await 是什么？解决了什么问题？

async/await 是一种异步编程的解决方案，可以让 JavaScript 代码在不阻塞其他操作的情况下等待异步操作的结果。在语言层面上，它是基于 Promise 实现的一种语法糖，可以更加方便地处理异步操作。

通过使用 async/await，可以让异步操作看起来像是同步的，避免了回调地狱等问题，提高了代码的可读性和可维护性。同时，它也简化了异常处理，可以通过 try/catch 语句捕获异步操作的错误，并进行相应的处理。

具体来说，async 用于定义一个异步函数，它会返回一个 Promise 对象。在异步函数中，可以使用 await 等待一个异步操作的完成，并且异步操作的结果会被解析为一个值返回。如果异步操作出现错误，则会抛出异常，可以使用 try/catch 来处理异常。

总之，async/await 帮助我们更加方便地处理异步操作，避免了回调地狱和复杂的异常处理，让代码更加简洁易读。

#### await 到底在等待啥？await 如何捕获异常？

在使用 await 关键字时，它会等待一个 Promise 对象（或者任何值都可以，但是如果不是 Promise 对象，那么它就会立即 resolve 成这个值）。当 Promise 对象 resolve 后，await 关键字会返回 Promise resolve 的值。

在 async/await 中捕获异常的方式，可以使用 try/catch 语句块。当使用 await 等待的 Promise 对象 reject 时，会抛出一个异常，然后这个异常会被传递给下一个可以捕获它的 catch 语句块，从而进行错误处理。例如：

```
async function example() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

在上面的例子中，await 关键字等待 someAsyncFunction() 的结果，如果该函数 resolve，那么结果会被赋值给 result 变量，否则会抛出一个异常，然后被 catch 语句块捕获并打印出来。

#### async/await 对比 Promise 的优势？

async/await 相比 Promise 有以下几个优势：

1. **更直观**：async/await 更加直观和易于理解，代码的可读性更好。
1. **更简洁**：async/await 可以用更少的代码实现 Promise 的功能，避免了 Promise 的回调地狱问题。
1. **更易于调试**：async/await 可以像同步代码一样使用调试工具进行调试，方便定位问题。
1. **更易于捕获错误**：使用 try/catch 可以很方便地捕获错误，而使用 Promise 时需要通过 .catch() 处理错误。

需要注意的是，async/await 是基于 Promise 实现的，实质上也是一种 Promise 的语法糖，但可以更方便地编写异步代码。

#### 对浅拷贝深拷贝的理解？

在 JavaScript 中，对象和数组都是引用类型，也就是说，对对象和数组的操作会对其原始引用进行更改。当我们想要对一个对象或者数组进行拷贝时，会有浅拷贝和深拷贝两种方式。

浅拷贝是指复制对象或者数组本身，而不是复制对象或者数组中所包含的所有元素。当我们进行浅拷贝时，被拷贝的对象或数组中的基本数据类型元素会被复制，而引用类型的元素仍然指向原始的引用。这意味着，如果我们对原始对象或数组进行更改，浅拷贝后的对象或数组也会受到影响。常见的浅拷贝方式有对象展开运算符（{...obj}）和 Object.assign()方法。

深拷贝是指复制对象或者数组以及其中的所有元素。当我们进行深拷贝时，被拷贝的对象或数组中的所有基本数据类型元素和引用类型元素都会被复制，从而得到一个全新的对象或数组。这样就不会影响原始对象或数组的值。常见的深拷贝方式有递归复制、JSON.parse(JSON.stringify())、lodash 库中的深拷贝方法等。

浅拷贝的优点是效率高，缺点是不够完整，容易出现问题。深拷贝的优点是能够完整复制对象或数组以及其中的所有元素，缺点是效率比浅拷贝低。在实际开发中，我们应该根据具体的情况来选择浅拷贝还是深拷贝。

#### Object.assign 是深拷贝吗？JSON.stringify 深拷贝的缺点？

Object.assign 不是深拷贝，它是浅拷贝，即只会拷贝对象的第一层属性。如果对象中某个属性的值是一个对象或数组，那么只会拷贝这个对象或数组的引用，而不是实际的值。这意味着如果原对象和拷贝后的对象中的引用类型属性被修改，两个对象中的对应属性都会被修改。

JSON.stringify 可以将一个 JavaScript 对象序列化为一个 JSON 字符串，实现简单方便。但是它有一些缺点：

1. 不能处理循环引用的对象，会抛出异常。
1. 不能序列化函数、正则表达式等特殊类型。
1. 对于 Date 类型，只能序列化为 ISO 格式字符串，不能还原为 Date 对象。
1. 对于 NaN、Infinity、-Infinity 和 undefined，序列化后的结果都是 null。

因此，当需要深拷贝一个对象时，通常需要使用其他方式，比如递归拷贝。
