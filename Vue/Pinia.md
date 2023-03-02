<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:04:58
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-28 17:39:40
 * @Description: Pinia 状态管理模式（6题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Vue\Pinia.md
-->

#### 讲一下 Pinia 的核心属性？

Pinia 是一个状态管理库，它的核心属性包括以下几个：

1. **store**: 表示状态的存储。它包含了所有状态，例如数据、方法等等。在使用 Pinia 的时候，我们需要定义一个 store，然后把这个 store 暴露出去。
1. **state**: 表示状态的数据。它是一个响应式对象，用来保存我们的数据。它可以通过直接赋值的方式进行修改。
1. **getters**: 表示计算属性。它们的作用是根据 store 中的数据，动态地计算出一个值。这些计算属性通常用来派生数据。
1. **actions**: 表示异步操作。它们通常用来执行一些异步的操作，例如获取数据等等。在执行异步操作之前，我们可以在 action 中执行一些同步操作，例如修改 state 中的数据。

这些核心属性使得 Pinia 成为了一个非常方便的状态管理库，它可以让我们更加容易地管理应用中的状态。

#### 为什么 Pinia 没有 mutations？

Pinia 采用了与 Vue 3 Composition API 类似的响应式设计，避免了使用 mutations 的方式去修改 state。

相对于 Vuex，Pinia 更加轻量级，没有 getters 和 mutations 等概念，所有的状态和逻辑都可以通过定义 actions 和 getters 实现。Pinia 中的 action 可以返回 Promise 或者是使用 async/await，可以方便地进行异步操作。而且由于没有 mutations，Pinia 更加容易进行测试，减少了测试的复杂度。

#### Pinia 的好处？有哪些特点？

Pinia 是一个由 Vue.js 生态系统提供的状态管理库，它有以下好处和特点：

1. **简单易用**：Pinia 的 API 设计简洁易懂，只需要少量的代码就能完成大多数状态管理的需求。
1. **类 Vuex**：Pinia 的设计灵感来自 Vuex，具有 Vuex 的优点，如全局单例、可扩展等。
1. **TypeScript 支持**：Pinia 是使用 TypeScript 编写的，并且支持使用 TypeScript 编写插件和插件的类型定义。
1. **高性能**：Pinia 内部使用的是 Vue.js 3 的 reactivity API，相比 Vuex 有更高的性能。
1. **模块化设计**：Pinia 支持将状态划分为不同的模块，让状态管理更加清晰和易于维护。
1. **插件机制**：Pinia 的插件机制让其非常易于扩展，可以通过插件实现一些高级的功能，如持久化状态、网络请求等。

总之，Pinia 是一个现代化的状态管理库，提供了简单易用、高性能、模块化、扩展性强等特点，非常适合使用 Vue.js 开发中大型应用程序。

#### Pinia 和 VueX 的区别？

Pinia 和 Vuex 都是 Vue.js 状态管理库，但它们之间也有一些区别：

1. **API 设计**：Pinia 更为简单和直接，提供了类似 Vuex 的 store 和 module 的概念，但没有 Vuex 中那么多的概念和 API。同时，Pinia 也支持 Vue 3 的新特性，如 ref 和 reactive。
1. **响应式**：Pinia 使用 Vue 3 的 reactive 和 computed 来处理状态的响应式更新，不像 Vuex 一样需要通过特殊的 commit 和 dispatch 方法来修改状态，也没有 Vuex 中的 getters。
1. **性能**：Pinia 在处理状态更新时比 Vuex 更为高效，因为它使用了 Vue 3 的新特性 Proxy 对状态进行了优化。同时，Pinia 还支持使用 localStorage 和 sessionStorage 进行状态持久化，也可以使用插件来实现更多的功能。
1. **TypeScript 支持**：Pinia 是完全使用 TypeScript 编写的，并且使用了大量的类型声明，使得开发者在使用 Pinia 时能够得到更好的类型提示和安全性。

总的来说，Pinia 更为轻量级和简单，同时也在性能和 TypeScript 支持方面具有优势，适合于小到中型的项目。而 Vuex 则适用于更为复杂的大型项目，因为它提供了更多的 API 和概念，并且已经经过了时间的考验，有着更为完善的生态和社区支持。

#### 怎么通过 Pinia 实现数据持久化？

Pinia 本身并不提供数据持久化的功能，但是可以与一些第三方库结合使用来实现数据持久化。

一种常见的实现方式是结合浏览器的 LocalStorage 或 IndexedDB API 来进行数据持久化。可以使用 Pinia 的插件机制，在 app.use(pinia) 前注入一个插件来实现。

下面是一个使用 LocalStorage 进行数据持久化的示例：

```
import { createPinia } from 'pinia'
import { createPersistedState, Storage } from 'pinia-plugin-persist'

const pinia = createPinia()

// 注册插件，使用 localStorage 进行数据持久化
pinia.use(createPersistedState({
  storage: window.localStorage as Storage,
  key: 'my-app-state'
}))
```

这样，Pinia 中的状态就可以在页面刷新后从 LocalStorage 中恢复。

需要注意的是，使用 LocalStorage 进行数据持久化时需要注意一些安全问题，比如敏感信息不能直接存储在 LocalStorage 中。此外，LocalSotrage 的存储容量也有限制，不能存储过多的数据。因此，在实际应用中需要综合考虑使用场景和需求来选择合适的数据持久化方案。
