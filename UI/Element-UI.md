<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:07:13
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 13:58:18
 * @Description: Element-UI 面试题（2题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\UI\Element-UI.md
-->

#### Element-UI 怎么使用国际化功能？

Element-UI 是一个基于 Vue.js 的组件库，提供了非常实用的组件和功能。其中，国际化功能也是 Element-UI 中的一个非常重要的功能，可以让我们轻松地将应用程序本地化为不同的语言。

Element-UI 的国际化功能可以通过配置 i18n 实现，具体步骤如下：

安装并引入 **Vue-i18n**，可以通过 npm 安装：

```
npm install vue-i18n --save
```

然后在 main.js 中引入并注册：

```
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
```

在项目中创建 i18n 目录，并在该目录下创建对应语言的 .js 文件，例如中文简体对应的文件是 **zh-CN.js**，英文对应的是 **en-US.js**。

在这些文件中，可以定义对应语言的翻译文本，例如：

```
// zh-CN.js
export default {
  hello: '你好',
  world: '世界',
}

// en-US.js
export default {
  hello: 'Hello',
  world: 'World',
}
```

在 main.js 中创建 VueI18n 实例，并设置为全局属性：

```
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import zhCN from './i18n/zh-CN'
import enUS from './i18n/en-US'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言
  messages,
})

Vue.prototype.$i18n = i18n
```

在组件中使用 **$t()** 方法获取对应的翻译文本，例如：

```
<template>
  <div>{{ $t('hello') }} {{ $t('world') }}</div>
</template>
```

这里使用 $t('hello') 获取当前语言环境下的 hello 翻译文本。

在组件中切换语言时，可以通过 i18n 的 **setLocaleMessage()** 方法修改当前语言环境下的翻译文本，然后通过 **$i18n.locale** 属性设置当前语言环境。

```
// 切换为英文
this.$i18n.setLocaleMessage('en-US', {
  hello: 'Hello',
  world: 'World',
})
this.$i18n.locale = 'en-US'
```

通过以上步骤，就可以在 Element-UI 中实现国际化功能了。

#### Element-UI 怎么实现主题切换的？

Element-UI 是一个基于 Vue.js 的 UI 组件库，其支持主题定制功能，可以通过更改主题变量的方式来实现主题切换。具体步骤如下：

引入 Element-UI 的主题文件，例如 element-variables.scss。

在 element-variables.scss 文件中设置主题变量，例如设置主题色：

```
$--color-primary: #409EFF;
```

在 main.js 中引入 element-variables.scss 文件，并使用 Vue.use(ElementUI) 方法注册 Element-UI 组件。

在组件中使用 Element-UI 组件时，可以根据需要修改主题变量，例如：

```
<el-button type="primary">主题色按钮</el-button>
```

当主题色变量为 #409EFF 时，按钮为蓝色；当主题色变量变为其他颜色时，按钮颜色也会随之变化。

通过这种方式，可以在不改变代码结构的情况下实现 Element-UI 主题切换功能。
