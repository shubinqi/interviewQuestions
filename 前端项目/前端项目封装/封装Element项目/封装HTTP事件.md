<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-03 19:36:49
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-03 20:00:37
 * @Description: HTTP 事件
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端项目\前端项目封装\封装Element项目\封装HTTP事件.md
-->

#### 封装 elementui beforeHttp 和 afterHttp 事件

在 ElementUI 中，可以通过封装 beforeHttp 事件和 afterHttp 事件来实现在 HTTP 请求被发送前和发送后执行一些操作的功能。

具体来说，可以通过扩展 ElementUI 中的 Http 请求组件来实现 beforeHttp 事件和 afterHttp 事件的封装。在扩展的 Http 请求组件中，可以定义 beforeHttp 和 afterHttp 两个事件，并在 HTTP 请求被发送前和发送后分别触发这两个事件。

以下是一个示例：

```
<template>
  <el-http
    ref="http"
    :url="url"
    :method="method"
    :data="data"
    :headers="headers"
    :response-type="responseType"
    :with-credentials="withCredentials"
    :timeout="timeout"
    @beforeHttp="handleBefore"
    @afterHttp="handleAfter"
  >
    <slot></slot>
  </el-http>
</template>

<script>
export default {
  name: "MyHttp",
  props: {
    url: String,
    method: String,
    data: Object,
    headers: Object,
    responseType: String,
    withCredentials: Boolean,
    timeout: Number
  },
  methods: {
    handleBefore(next) {
      // 执行一些操作
      // ...

      // 如果需要继续发送 HTTP 请求，调用 next() 方法
      next();
    },
    handleAfter(response) {
      // 处理 HTTP 响应
      // ...
    },
    send() {
      this.$refs.http.send();
    }
  }
}
</script>
```

在上面的示例中，我们定义了一个名为 MyHttp 的扩展 Http 请求组件。这个组件定义了 beforeHttp 和 afterHttp 两个事件，并在模板中绑定了这两个事件。在事件处理函数中，我们可以执行一些自定义的操作，同时也可以通过调用 next 回调来控制 HTTP 请求的发送和后续操作的执行。

1. 在 handleBefore 方法中，我们执行一些自定义的操作，并通过调用 next 回调来控制是否继续发送 HTTP 请求。如果需要继续发送 HTTP 请求，可以直接调用 next() 方法；如果不需要发送 HTTP 请求，可以不调用 next 回调或者传递 false 参数给 next 方法。
1. 在 handleAfter 方法中，我们处理 HTTP 响应，例如解析数据或者提示用户请求完成。需要注意的是，HTTP 响应只有在 beforeHttp 事件处理函数中调用 next 回调时才会返回。

使用这个封装后的 Http 请求组件时，可以像使用原始的 ElementUI Http 请求组件一样来发送 HTTP 请求，并在 beforeHttp 和 afterHttp 事件中添加自定义的操作逻辑和控制逻辑。同时，也需要注意避免过度封装和复杂化组件的实现，以免导致代码难以维护和扩展。
