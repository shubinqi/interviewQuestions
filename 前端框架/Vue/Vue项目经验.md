<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-09 22:05:48
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-09 22:05:51
 * @Description: Vue 项目经验
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端框架\Vue\Vue项目经验.md
-->

#### Vue 多次点击请求接口，怎么只执行最后一次接口请求？

在 Vue 中，可以使用 lodash 库的 debounce 或者 throttle 方法来实现多次点击时只执行最后一次请求。

其中，debounce 方法会在最后一次调用后延迟一段时间再执行，而 throttle 方法则会在一定时间内只执行一次。

以下是一个使用 debounce 方法的示例代码：

```
// 引入 lodash 库
import _ from 'lodash'

export default {
  data() {
    return {
      // 声明一个变量存储请求结果
      result: null,
      // 声明一个变量存储上一次请求的 CancelToken
      prevRequest: null
    }
  },
  methods: {
    // 使用 debounce 包装请求方法
    request: _.debounce(function(params) {
      // 如果上一次请求还未完成，取消上一次请求
      if (this.prevRequest) {
        this.prevRequest.cancel()
      }
      // 发送请求
      this.prevRequest = axios.get('/api', { params })
        .then(res => {
          // 存储请求结果
          this.result = res.data
        })
        .catch(err => {
          console.error(err)
        })
    }, 500) // 延迟 500 毫秒执行请求
  }
}
```

在上面的代码中，我们通过 import 引入了 lodash 库，并在 methods 中声明了一个 request 方法，使用 \_.debounce 包装了实际的请求方法。这样，在多次调用 request 方法时，实际的请求方法只会在最后一次调用后延迟 500 毫秒执行，避免了多次请求的问题。同时，我们在请求方法中添加了一个逻辑，用于在发送新请求前取消上一次请求。这样可以保证只有最后一次请求的结果会被存储到 result 变量中。

如果需要调整执行时间或者使用 throttle 方法，只需要修改 \_.debounce 的参数即可。
