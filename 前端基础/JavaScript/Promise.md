<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-28 03:08:54
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-04 21:25:04
 * @Description: Promise 详解
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\JavaScript\Promise.md
-->

### 一、基础题

#### Promise

Promise 是 ES6 中引入的一种异步编程解决方案，用于解决回调地狱等问题。前端开发中，掌握 Promise 是必须的。下面是前端需要学习的 Promise 内容：

1. **Promise 的概念和用法**：Promise 是一个对象，表示异步操作的最终完成或失败，Promise 对象可以将异步操作的结果以回调函数的方式传递给调用方。
1. **Promise 的状态和转换**：Promise 有三种状态，分别是 Pending（进行中）、Fulfilled（已成功）和 Rejected（已失败），状态一旦改变就不能再变化。
1. **Promise 的链式调用**：Promise 的链式调用可以让多个异步操作按照一定的顺序执行，而不必嵌套多层回调函数。
1. **Promise 的错误处理**：在 Promise 中处理错误有两种方式，一种是在 Promise 内部使用 try-catch 捕获错误，另一种是在 Promise 调用链的末尾使用 catch 方法捕获错误。
1. **Promise 的静态方法**：Promise 还有一些静态方法，如 Promise.resolve()、Promise.reject()、Promise.all()、Promise.race()，这些方法可以帮助我们更方便地使用 Promise。
1. **Promise 的实现原理**：理解 Promise 的实现原理可以帮助我们更好地理解 Promise，以及在实际开发中更好地使用 Promise。Promise 的实现原理可以参考 Promise/A+ 规范。
1. **Promise 的应用场景**：在实际开发中，Promise 可以用于异步操作的处理，如数据的请求、文件的读取等。同时，Promise 还可以结合 async/await 进行更方便的异步编程。

### 二、场景题

#### 10 个 ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败，说下设计思路？

针对这个问题，可以使用 Promise 和 async/await 的方式来实现。

首先，使用 Promise.all() 方法来并行处理 10 个 Ajax 请求。Promise.all() 方法会将所有的 Promise 对象作为参数传入，当所有的 Promise 对象都执行成功时，Promise.all() 方法会返回一个包含了所有结果的数组。如果其中一个 Promise 对象执行失败，则会立即返回失败结果。

其次，设置一个失败次数的计数器，当 Ajax 请求失败时，计数器加 1。如果计数器超过 3 次，则认为该请求失败，不再尝试重新请求。

最后，使用 try-catch 块来捕获所有的异常，如果捕获到异常，则将计数器加 1，如果计数器超过 3 次，则认为全部失败。

示例代码如下：

```
async function fetchAll() {
  const urls = [...]; // 10 个 Ajax 请求的 URL
  let failures = 0; // 失败次数计数器
  let results = []; // 存储所有结果的数组
  try {
    const promises = urls.map(url => fetch(url)); // 并行处理 10 个 Ajax 请求
    results = await Promise.all(promises); // 返回一个包含了所有结果的数组
  } catch (e) {
    failures++;
    if (failures > 3) {
      console.log('Ajax requests failed');
    } else {
      fetchAll();
    }
  }
  // 处理所有结果
}
```

这样设计可以实现同时发起 10 个 Ajax 请求，并且只允许最多 3 次失败的情况下展示全部结果。
