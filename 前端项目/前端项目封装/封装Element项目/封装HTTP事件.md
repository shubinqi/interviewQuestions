<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-03 19:36:49
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-03 20:50:50
 * @Description: HTTP 事件
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端项目\前端项目封装\封装Element项目\封装HTTP事件.md
-->

#### 封装 elementui beforeHttp 和 afterHttp 事件？

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

#### 封装 elementui 表格的 beforeHttp 和 afterHttp 事件？

在封装 Element UI 表格组件时，可以通过自定义属性的方式来添加 beforeHttp 和 afterHttp 事件。具体步骤如下：

在封装的表格组件中，定义 beforeHttp 和 afterHttp 两个属性，并且默认值为一个空函数。

```
props: {
  beforeHttp: {
    type: Function,
    default: () => {}
  },
  afterHttp: {
    type: Function,
    default: () => {}
  }
}
```

在表格数据请求之前调用 beforeHttp 函数，可以在此处添加 loading 状态等操作。

```
methods: {
  fetchData() {
    this.beforeHttp(); // 调用 beforeHttp 函数
    axios.get('/api/data').then(res => {
      this.tableData = res.data;
      this.afterHttp(); // 调用 afterHttp 函数
    }).catch(err => {
      console.error(err);
    });
  }
}
```

在使用表格组件的父组件中，使用 v-bind 指令绑定 beforeHttp 和 afterHttp 两个事件处理函数。

```
<template>
  <div>
    <my-table
      :beforeHttp="handleBeforeHttp"
      :afterHttp="handleAfterHttp"
    ></my-table>
  </div>
</template>

<script>
import MyTable from './MyTable.vue';

export default {
  components: {
    MyTable
  },
  methods: {
    handleBeforeHttp() {
      // 添加 loading 状态等操作
    },
    handleAfterHttp() {
      // 移除 loading 状态等操作
    }
  }
}
</script>
```

这样，就可以在表格组件的数据请求之前和之后分别执行 beforeHttp 和 afterHttp 事件处理函数，实现一些额外的操作，比如添加 loading 状态等。

#### 封装 elementui beforeHttp 和 afterHttp 事件？

ElementUI 的 beforeHttp 和 afterHttp 事件是在进行 http 请求之前和之后触发的，您可以通过封装来改变这些事件的行为。以下是一个示例封装：

```
import { Loading } from 'element-ui'

// 定义一个名为HttpLoader的类，用于处理http请求前后的loading效果
class HttpLoader {
  constructor() {
    this.loadingInstance = null
  }

  start() {
    this.loadingInstance = Loading.service({
      fullscreen: true,
      lock: true,
      text: 'Loading...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }

  finish() {
    if (this.loadingInstance) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

// 导出一个名为httpPlugin的插件对象
export const httpPlugin = {
  install(Vue) {
    // 注册一个名为$http的Vue实例方法
    Vue.prototype.$http = async function(options) {
      const loader = new HttpLoader()

      try {
        // 触发beforeHttp事件
        this.$emit('beforeHttp', options)

        // 显示loading
        loader.start()

        // 执行http请求
        const response = await this.$axios(options)

        // 隐藏loading
        loader.finish()

        // 触发afterHttp事件
        this.$emit('afterHttp', response)

        return response
      } catch (error) {
        // 隐藏loading
        loader.finish()

        throw error
      }
    }
  }
}
```

在上述示例中，我们定义了一个名为 HttpLoader 的类，用于处理 http 请求前后的 loading 效果。我们还定义了一个名为 httpPlugin 的插件对象，其中包含一个 install 方法，用于将$http方法添加到Vue实例中。在$http 方法中，我们使用 beforeHttp 和 afterHttp 事件来触发请求前和请求后的操作，同时使用 HttpLoader 类来处理 loading 效果。

要使用这个插件，您只需要在 Vue 项目中将其导入并安装即可：

```
import Vue from 'vue'
import axios from 'axios'
import { httpPlugin } from './httpPlugin'

Vue.use(httpPlugin)

Vue.prototype.$axios = axios.create({
  baseURL: 'https://example.com/api'
})
```

现在，您就可以在 Vue 组件中使用$http 方法进行 http 请求，并在请求前和请求后执行自定义的操作：

```
export default {
  methods: {
    async fetchData() {
      try {
        const response = await this.$http({
          method: 'get',
          url: '/data'
        })

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
```

#### 封装 elementui 表格 beforeHttp 和 afterHttp 事件？

ElementUI 的表格组件（Table）也提供了 beforeHttp 和 afterHttp 事件，用于在进行表格数据请求前和请求后执行自定义操作。以下是一个示例封装：

```
import { Loading } from 'element-ui'

// 定义一个名为TableLoader的类，用于处理表格数据请求前后的loading效果
class TableLoader {
  constructor() {
    this.loadingInstance = null
  }

  start() {
    this.loadingInstance = Loading.service({
      target: this.target,
      text: 'Loading...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }

  finish() {
    if (this.loadingInstance) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

// 导出一个名为tablePlugin的插件对象
export const tablePlugin = {
  install(Vue) {
    // 注册一个名为$table的Vue实例方法
    Vue.prototype.$table = async function(table, options) {
      const loader = new TableLoader()

      try {
        // 触发beforeHttp事件
        this.$emit('beforeHttp', table, options)

        // 显示loading
        loader.target = table.$el.querySelector('.el-table__body-wrapper')
        loader.start()

        // 执行表格数据请求
        await table.clearSort()
        await table.clearFilter()
        await table.loadTableData(options)

        // 隐藏loading
        loader.finish()

        // 触发afterHttp事件
        this.$emit('afterHttp', table)
      } catch (error) {
        // 隐藏loading
        loader.finish()

        throw error
      }
    }
  }
}
```

在上述示例中，我们定义了一个名为 TableLoader 的类，用于处理表格数据请求前后的 loading 效果。我们还定义了一个名为 tablePlugin 的插件对象，其中包含一个 install 方法，用于将$table方法添加到Vue实例中。在$table 方法中，我们使用 beforeHttp 和 afterHttp 事件来触发请求前和请求后的操作，同时使用 TableLoader 类来处理 loading 效果。

要使用这个插件，您只需要在 Vue 项目中将其导入并安装即可：

```
import Vue from 'vue'
import { tablePlugin } from './tablePlugin'

Vue.use(tablePlugin)
```

现在，您就可以在 Vue 组件中使用$table 方法进行表格数据请求，并在请求前和请求后执行自定义的操作：

```
export default {
  data() {
    return {
      tableData: [],
      tableLoading: false
    }
  },
  methods: {
    async fetchTableData() {
      try {
        this.tableLoading = true

        await this.$table(this.$refs.table, {
          url: 'https://example.com/api/tableData',
          method: 'get'
        })

        this.tableLoading = false
      } catch (error) {
        console.error(error)
        this.tableLoading = false
      }
    }
  }
}
```

在组件中，我们将$refs.table传递给$table 方法，它将自动调用 loadTableData 方法来获取表格数据。同时，我们在请求前和请求后触发了 beforeHttp 和 afterHttp 事件，以便您可以在这些事件中执行自定义的操作，例如显示 loading 效果或修改请求参数。例如，您可以这样使用 beforeHttp 事件：

```
export default {
  data() {
    return {
      tableData: [],
      tableLoading: false
    }
  },
  methods: {
    async handleBeforeHttp(table, options) {
      // 在请求前显示loading效果
      this.tableLoading = true

      // 在请求前修改请求参数
      options.params = {
        ...options.params,
        userId: this.userId
      }
    },
    async handleAfterHttp(table) {
      // 在请求后隐藏loading效果
      this.tableLoading = false
    }
  }
}
```

然后，在模板中使用 before-http 和 after-http 事件即可：

```
<template>
  <div>
    <el-table
      ref="table"
      :data="tableData"
      :loading="tableLoading"
      @beforeHttp="handleBeforeHttp"
      @afterHttp="handleAfterHttp"
    >
      <!-- 省略表格列定义 -->
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableLoading: false
    }
  },
  methods: {
    async handleBeforeHttp(table, options) {
      // 在请求前显示loading效果
      this.tableLoading = true

      // 在请求前修改请求参数
      options.params = {
        ...options.params,
        userId: this.userId
      }
    },
    async handleAfterHttp(table) {
      // 在请求后隐藏loading效果
      this.tableLoading = false
    }
  }
}
</script>

<style>
/* 省略样式定义 */
</style>
```

在上述示例中，我们在组件中定义了 handleBeforeHttp 和 handleAfterHttp 方法，并在模板中使用了 before-http 和 after-http 事件来触发这些方法。在 handleBeforeHttp 方法中，我们修改了请求参数并显示了 loading 效果，在 handleAfterHttp 方法中，我们隐藏了 loading 效果。这些自定义操作将在每次表格数据请求前后执行。
