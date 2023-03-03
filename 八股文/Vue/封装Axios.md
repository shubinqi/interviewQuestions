<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-03 22:10:05
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 22:10:15
 * @Description: 八股文：封装 axios
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\Vue\封装Axios.md
-->

#### Vue 项目怎么封装 axios？主要封装哪方面？

在 Vue 项目中，我们可以将 axios 进行封装，以方便在不同组件中使用。主要的封装方面包括以下几个方面：

1. **封装 axios 的默认配置**。可以设置一些全局的请求头、响应头等信息，减少重复代码的编写。
1. **封装请求拦截器**。可以在请求发送之前对请求进行处理，例如在请求头中添加 token 等信息。
1. **封装响应拦截器**。可以在响应返回后对响应进行处理，例如判断响应状态码是否正确，统一处理错误信息等。
1. **封装公共方法**。可以将一些通用的请求方法进行封装，例如 get、post、put、delete 等方法。

以下是一个简单的 axios 封装示例：

```
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 接口的基础路径
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
  },
  error => {
    // 处理请求错误
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据进行处理
    const res = response.data;
    if (res.code !== 200) {
      // 处理错误信息
      console.log(res.msg);
      return Promise.reject(new Error(res.msg));
    } else {
      return res.data;
    }
  },
  error => {
    // 处理响应错误
    console.log(error);
    return Promise.reject(error);
  }
);

// 封装get请求
export function get(url, params) {
  return service({
    url,
    method: 'get',
    params
  })
}

// 封装post请求
export function post(url, data) {
  return service({
    url,
    method: 'post',
    data
  })
}

// 封装put请求
export function put(url, data) {
  return service({
    url,
    method: 'put',
    data
  })
}

// 封装delete请求
export function del(url) {
  return service({
    url,
    method: 'delete'
  })
}
```

通过这样的封装，我们可以在组件中使用封装好的方法来发送请求，例如：

```
import { get, post } from '@/api';

export default {
  methods: {
    fetchData() {
      get('/api/data').then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    },
    postData() {
      post('/api/data', { name: 'Tom', age: 18 }).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
```

这样可以大大简化请求代码的编写，提高开发效率。
