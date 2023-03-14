<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-28 03:08:54
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:17:16
 * @Description: Promise 详解（10题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\JavaScript\Promise.md
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

#### Fetch 是什么？有什么优缺点？

Fetch 是 JavaScript 中的一个 API，用于在浏览器中发送网络请求，以获取数据或资源。它提供了一种现代化的方式来代替旧的 XMLHttpRequest （XHR）方式，以更加简单、灵活、可读性强的方式进行网络请求。

Fetch API 具有以下优点：

1. **Promise 风格**：Fetch 返回的是 Promise 对象，可以通过 then()、catch()、finally() 等方法来处理异步请求的响应。这种方式相比传统的回调函数，更加简洁和易读。
1. **内置 JSON 支持**：在使用 Fetch API 时，不需要手动将响应的数据转换为 JSON 对象，因为 Fetch API 内置了对 JSON 的支持，它会自动将响应的数据解析为 JSON 对象。
1. **支持流式请求**：Fetch API 支持流式请求，允许在请求和响应过程中传输流数据，而不是传输整个数据块。这可以帮助减少网络带宽占用，从而提高应用程序的性能。
1. **支持跨域请求**：Fetch API 支持跨域请求，可以从不同的域、子域或协议发送请求，从而允许开发人员在客户端与服务器之间传输数据。

然而，Fetch API 也存在以下缺点：

1. **兼容性**：Fetch API 是一个比较新的 API，可能不被所有浏览器支持。需要通过 Polyfill 或转译等方式来实现兼容。
1. **取消请求**：Fetch API 不支持直接取消请求，需要使用 AbortController API 来实现取消请求。
1. **不支持进度事件**：Fetch API 不支持传输进度事件，无法监测请求的进度。

#### Fetch 有哪些属性和方法？

Fetch API 是一个基于 Promise 的网络请求 API，提供了一些方法和属性来发送和处理请求和响应，常见的属性和方法如下：

属性：

1. **Request.cache**：控制请求是否缓存。
1. **Request.credentials**：控制请求是否需要身份验证。
1. **Request.headers**：控制请求头，包括 Content-Type、Accept 等。
1. **Request.method**：设置请求的 HTTP 方法。
1. **Request.mode**：设置请求的模式，包括 cors、no-cors、same-origin 等。
1. **Request.redirect**：设置重定向模式，包括 follow、error、manual 等。
1. **Request.referrer**：设置请求的来源地址。
1. **Response.headers**：响应头对象。
1. **Response.ok**：响应是否成功，返回一个布尔值。
1. **Response.redirected**：响应是否发生了重定向，返回一个布尔值。
1. **Response.status**：响应状态码。
1. **Response.statusText**：响应状态描述。

方法：

1. **fetch()**：用于发送网络请求，并返回一个 Promise 对象，该对象包含响应对象。fetch() 方法接受一个 URL 参数和一个可选的选项对象，选项对象可以包含请求方法、请求头、请求体等信息。
1. **Request.clone()**：用于复制 Request 对象。
1. **Response.clone()**：用于复制 Response 对象。
1. **Response.text()**：将响应解析为文本。
1. **Response.json()**：将响应解析为 JSON 对象。
1. **Response.blob()**：将响应解析为 Blob 对象。
1. **Response.arrayBuffer()**：将响应解析为 ArrayBuffer 对象。
1. **Response.formData()**：将响应解析为 FormData 对象。

需要注意的是，fetch() 方法返回的 Promise 对象在响应状态码为 400 或 500 等错误状态时，并不会抛出异常，而是返回一个成功状态的 Promise 对象，需要通过检查 Response 对象的 ok 属性或者 status 属性来判断请求是否成功。

#### 写一个 fetch 请求示例？

下面是一个使用 Fetch API 发送 GET 请求并处理响应的示例代码：

```
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

在这个示例中，我们使用 fetch() 方法发送了一个 GET 请求，请求的 URL 是 https://jsonplaceholder.typicode.com/posts/1。然后我们在 Promise 的 then() 方法中检查响应对象的 ok 属性，如果 ok 属性为 true，说明响应成功，我们就将响应对象解析为 JSON 对象并返回；否则，我们抛出一个错误。最后，在 Promise 的 then() 方法中，我们使用解析后的 JSON 对象进行后续操作，或者在 catch() 方法中处理错误。

#### Promise 是什么？有什么优缺点？

Promise 是一种异步编程解决方案，它是 ES6 中新增的一种对象类型。Promise 用于处理异步操作，可以将异步操作的结果以 Promise 对象的形式返回，方便进行链式调用和错误处理。

Promise 对象有三种状态：pending、fulfilled 和 rejected。当 Promise 对象处于 pending 状态时，表示异步操作正在进行中；当 Promise 对象处于 fulfilled 状态时，表示异步操作已成功完成并返回了一个值；当 Promise 对象处于 rejected 状态时，表示异步操作发生了错误并返回了一个错误对象。Promise 对象状态一旦改变，就会一直保持这个状态，不会再次发生变化。

Promise 的优点包括：

1. 可以避免回调地狱，使代码更加清晰易读。
1. 可以方便地进行链式调用，使代码更加简洁。
1. 可以通过 then() 方法指定成功和失败的回调函数，方便错误处理。
1. 可以通过 Promise.all() 和 Promise.race() 方法对多个 Promise 对象进行处理，提高效率。

Promise 的缺点包括：

1. 无法取消 Promise，一旦创建就会立即执行，无法中途取消。
1. 无法在 then() 方法中得知异步操作的进度，只能得知成功或失败的结果。
1. 如果没有正确处理错误，可能会导致代码中出现未捕获的异常。

下面是一个使用 Promise 的示例代码：

```
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error('Request failed: ' + xhr.statusText));
      }
    };
    xhr.onerror = () => {
      reject(new Error('Network error'));
    };
    xhr.send();
  });
}

getJSON('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

在这个示例中，我们定义了一个名为 getJSON() 的函数，该函数返回一个 Promise 对象，用于发送 GET 请求并获取 JSON 数据。在 Promise 对象的构造函数中，我们使用 XMLHttpRequest 对象发送了一个 GET 请求，并在请求成功和失败时分别调用 resolve() 和 reject() 方法，将响应结果或错误信息传递给下一个 then() 方法或 catch() 方法。在使用 getJSON() 函数时，我们可以通过 then() 方法获取成功的结果，并通过 catch() 方法捕获错误信息。

#### 详细介绍一下 Promise 的三种状态？

Promise 对象有三种状态，分别是 pending（进行中）、fulfilled（已成功）和 rejected（已失败）。当创建一个 Promise 对象时，它的初始状态为 pending。在异步操作完成后，Promise 对象的状态会从 pending 转变为 fulfilled 或 rejected。

下面分别介绍一下 Promise 对象的三种状态：

1. pending
   Promise 对象初始状态为 pending，表示异步操作正在进行中。此时，Promise 对象还没有得到异步操作的结果，无法进行后续操作。Promise 对象处于 pending 状态时，可以使用 then() 方法指定异步操作成功后的回调函数和 catch() 方法指定异步操作失败后的回调函数。

2. fulfilled
   当异步操作成功完成并返回一个值时，Promise 对象的状态会从 pending 转变为 fulfilled。此时，Promise 对象的 then() 方法会被触发，将异步操作的结果传递给 then() 方法的回调函数。在 then() 方法中，可以对异步操作的结果进行处理，或者继续返回一个新的 Promise 对象进行链式调用。

3. rejected
   当异步操作发生错误并返回一个错误对象时，Promise 对象的状态会从 pending 转变为 rejected。此时，Promise 对象的 catch() 方法会被触发，将错误对象传递给 catch() 方法的回调函数。在 catch() 方法中，可以对错误对象进行处理，或者继续返回一个新的 Promise 对象进行链式调用。

需要注意的是，一旦 Promise 对象的状态发生改变，就不会再次发生变化。例如，如果 Promise 对象的状态从 pending 转变为 fulfilled，那么它就会一直保持在 fulfilled 状态，直到调用 then() 方法进行处理。同样，如果 Promise 对象的状态从 pending 转变为 rejected，那么它就会一直保持在 rejected 状态，直到调用 catch() 方法进行处理。

#### 当多个 then 连用时，是怎么执行的？

当一个 Promise 对象的状态从 pending 转变为 fulfilled 或 rejected 时，then() 方法会被触发，并将异步操作的结果传递给 then() 方法的回调函数。如果在 then() 方法中返回一个新的 Promise 对象，则可以对异步操作的结果进行进一步处理，也可以进行链式调用。

当多个 then() 方法连用时，Promise 对象会按照链式调用的顺序依次执行 then() 方法。每次执行 then() 方法时，都会返回一个新的 Promise 对象，如果在 then() 方法中返回一个 Promise 对象，则可以继续链式调用。

下面是一个示例：

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

在上面的示例中，首先执行了一个 fetch 请求，并将返回的 Response 对象传递给第一个 then() 方法。在第一个 then() 方法中，调用 response.json() 方法将 Response 对象转换为 JSON 数据，并将 JSON 数据传递给第二个 then() 方法。在第二个 then() 方法中，对 JSON 数据进行处理，并输出结果。如果发生错误，则会触发 catch() 方法。

需要注意的是，每次调用 then() 方法时，返回的 Promise 对象都是全新的，因此可以对每个 then() 方法的结果进行单独的处理。此外，如果其中一个 then() 方法返回了一个 rejected 状态的 Promise 对象，后续的 then() 方法就会被跳过，直接执行 catch() 方法。

#### 介绍一下 Promise 的常用 API？

Promise 是 JavaScript 的一种异步编程解决方案，提供了一系列常用的 API，以下是其中常见的几个 API：

1. **Promise.resolve()**：Promise.resolve() 方法返回一个 Promise 对象，该对象以给定的值解析。如果给定的值本身就是 Promise 对象，则直接返回该对象，否则返回一个新的 Promise 对象，其状态为 fulfilled。

示例代码：

```
const promise1 = Promise.resolve('Resolved value');
const promise2 = Promise.resolve(promise1);

console.log(promise1); // Promise {<resolved>: "Resolved value"}
console.log(promise2); // Promise {<resolved>: "Resolved value"}
```

2. **Promise.reject()**：Promise.reject() 方法返回一个 Promise 对象，该对象以给定的理由拒绝。返回的 Promise 对象状态为 rejected。

示例代码：

```
const promise = Promise.reject('Error reason');

promise.catch(error => console.log(error)); // Output: Error reason
```

3. **Promise.all()**：Promise.all() 方法接收一个 Promise 对象数组作为参数，并返回一个新的 Promise 对象，该 Promise 对象在所有 Promise 对象的异步操作完成后才会被触发。

示例代码：

```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2');
  }, 500);
});

Promise.all([promise1, promise2]).then(values => {
  console.log(values); // Output: ["Promise 1", "Promise 2"]
});
```

4. **Promise.race()**：Promise.race() 方法接收一个 Promise 对象数组作为参数，并返回一个新的 Promise 对象，该 Promise 对象在其中任何一个 Promise 对象的异步操作完成后立即被触发。

示例代码：

```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2');
  }, 500);
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // Output: "Promise 2"
});
```

5. **Promise.prototype.then()**：Promise.prototype.then() 方法用于注册一个回调函数，在 Promise 对象状态从 pending 转变为 fulfilled 时被调用。then() 方法可以被链式调用。

示例代码：

```
const promise = new Promise((resolve, reject) => {
  resolve('Resolved value');
});

promise.then(value => console.log(value)); // Output: "Resolved value"
```

6. **Promise.prototype.catch()**：Promise.prototype.catch() 方法用于注册一个回调函数，在 Promise 对象状态从 pending 转变为 rejected 时被调用。catch() 方法可以被链式调用。

示例代码：

```
const promise = new Promise((resolve, reject) => {
  reject('Error reason');
});

promise.catch(error => console.log(error)); // Output: "Error reason"
```

以上是 Promise 的一些常用 API，它们能够使得异步编程更加简洁、直观、可维护。

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
