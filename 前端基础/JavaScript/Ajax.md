<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 07:57:15
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:16:43
 * @Description: Ajax 详解（3题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\JavaScript\Ajax.md
-->

#### Ajax 是什么？有什么优缺点？

Ajax（Asynchronous JavaScript and XML）是一种在 Web 页面中创建异步请求的技术，通过 JavaScript 和 XML 实现数据的异步传输和更新。Ajax 可以使 Web 应用程序实现异步加载数据，从而提高页面的响应速度和用户体验。

优点：

1. **提高 Web 应用程序的响应速度和用户体验**：由于 Ajax 可以在后台与服务器进行异步通信，从而不需要刷新整个页面，从而可以提高 Web 应用程序的响应速度和用户体验。
1. **减轻服务器压力**：由于 Ajax 可以在后台与服务器进行异步通信，从而可以减轻服务器的负担，从而提高 Web 应用程序的可靠性和稳定性。
1. **可以局部更新页面**：由于 Ajax 可以局部更新页面，从而可以提高 Web 应用程序的交互性和用户体验。
1. **跨浏览器和跨平台支持**：Ajax 可以在不同的浏览器和平台中使用，从而具有较好的跨浏览器和跨平台支持。

缺点：

1. **会增加页面复杂度**：由于 Ajax 实现数据的异步传输和更新，需要开发人员掌握一定的 JavaScript 和 XML 技术，从而增加了页面的复杂度和开发难度。
1. **可能会存在安全问题**：由于 Ajax 可以通过 JavaScript 代码向服务器发送请求，如果没有正确处理用户输入，可能会导致安全问题。
1. **对搜索引擎不友好**：由于 Ajax 可以局部更新页面，而搜索引擎无法获得完整的页面信息，从而对搜索引擎的优化和 SEO 产生影响。

#### 封装一个 Ajax？

在 JavaScript 中使用 Ajax 技术，可以向服务器发送异步请求，并在不刷新整个页面的情况下获取数据。为了方便在多个地方重复使用，可以将 Ajax 请求封装成一个函数。下面是一个简单的 Ajax 封装函数的例子：

```
function ajax(method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(JSON.stringify(data));
}
```

该函数接受四个参数：请求方法（'GET' 或 'POST'）、请求 URL、请求数据（一个 JavaScript 对象，会自动转换为 JSON 格式发送到服务器）、回调函数（在请求完成时被调用，传入服务器返回的响应数据）。调用示例：

```
ajax('GET', '/api/data', null, function(response) {
  console.log(response);
});
```

该函数创建了一个 XMLHttpRequest 对象，并设置了请求方法、请求 URL 和请求数据。同时，也设置了请求头部的 Content-Type 为 application/json，这是因为本例中的请求数据是一个 JSON 对象。接着，函数定义了一个回调函数，该函数在请求状态改变并且响应状态码为 200 时被调用。最后，函数发送请求并将请求数据转换为 JSON 格式。当服务器返回响应时，回调函数被调用并传入响应数据作为参数。

当需要在页面中多次发送 Ajax 请求时，使用该封装函数可以使代码更加简洁、易于维护。

#### XMLHttpRequest 有哪些属性和方法？

XMLHttpRequest (XHR) 是一种用于在客户端和服务器之间发送 HTTP 请求和接收响应的 API。下面是 XMLHttpRequest 对象的一些常用属性和方法：

属性：

1. **readyState**：表示请求状态，取值范围为 0 到 4，分别对应未初始化、已建立连接、已发送请求、正在接收数据和接收数据完成等状态。
1. **status**：表示响应状态码，如 200 表示成功，404 表示未找到资源等。
1. **statusText**：表示响应状态的文本描述，如 "OK" 表示成功，"Not Found" 表示未找到资源等。
1. **responseText**：表示响应内容，以字符串形式返回。
1. **responseXML**：表示响应内容，以 XML 文档对象形式返回。

方法：

1. **open(method, url[, async, user, password])**：初始化请求。method 表示请求方法，如 "GET"、"POST" 等；url 表示请求的 URL；async 表示是否异步请求，默认为 true；user 和 password 表示请求需要的用户凭证信息。
1. **send([body])**：发送请求。body 表示请求体，如 POST 请求时需要传递的数据。
1. **setRequestHeader(header, value)**：设置请求头。header 表示请求头名称，如 "Content-Type"、"Authorization" 等；value 表示请求头的值。
1. **abort()**：取消请求。
1. **getAllResponseHeaders()**：获取所有响应头信息。
1. **getResponseHeader(header)**：获取指定响应头信息。header 表示响应头名称。
