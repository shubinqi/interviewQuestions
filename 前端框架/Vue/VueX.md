<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:05:12
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-28 17:42:53
 * @Description: VueX 面试题（15题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Vue\VueX.md
-->

#### VueX 的原理？为什么需要 VueX？

VueX 是一个状态管理模式，它是基于 Vue.js 构建的，用于在大型单页面应用程序中管理应用程序的状态。VueX 提供了一个中央存储库，用于保存所有组件的状态，并通过显式的方式将状态传递给组件，从而使组件之间的通信更加容易和高效。

VueX 的核心概念包括：

1. **State**：用于保存应用程序的状态数据。
1. **Mutation**：用于更改状态的函数，必须是同步函数。
1. **Action**：用于处理异步操作的函数，可以包含任意异步操作。
1. **Getter**：类似于计算属性，用于从状态中派生出新的数据。

VueX 的核心原理是响应式数据和单向数据流。VueX 将状态存储在一个中央存储库中，状态的更改是通过提交 Mutation 进行的，而不是直接更改状态。Mutation 是同步执行的，所以可以方便地跟踪状态的变化。Action 用于处理异步操作，它可以包含任何异步代码，并在完成操作后提交 Mutation。

VueX 的好处包括：

1. **简化组件间通信**：将状态集中存储在一个地方，可以简化组件间的通信和数据共享。
1. **方便调试和维护**：由于状态是集中管理的，所以可以方便地跟踪状态的变化，从而更容易调试和维护应用程序。
1. **可预测性**：由于状态的变化是通过提交 Mutation 进行的，而 Mutation 是同步执行的，所以状态变化是可预测的。

需要使用 VueX 的原因通常是应用程序需要管理的状态较多或较复杂，或者需要多个组件之间共享数据。使用 VueX 可以让应用程序更加灵活、可维护和可扩展。

#### VueX 是什么，有哪几种核心属性？

Vuex 是一个状态管理库，它被设计用于 Vue.js 应用程序的集中式状态管理。Vuex 的核心包含以下几个属性：

1. **state**：状态对象，即存储数据的地方。在 Vue 组件中，可以通过 $store.state 访问到它。
1. **getters**：类似计算属性，用于从 state 中派生出一些状态。Getters 可以访问 state 中的属性，也可以接收其他 getters 作为第二个参数。
1. **mutations**：操作状态的方法，每个 mutation 都有一个字符串类型的事件类型和一个回调函数。在回调函数中，可以通过第一个参数访问到 state 对象，并通过第二个参数（payload）传递数据。Mutation 必须是同步函数。
1. **actions**：异步操作状态的方法，每个 action 都有一个字符串类型的事件类型和一个回调函数。回调函数可以接收一个与 store 实例具有相同方法和属性的 context 对象，但不能直接修改 state，需要通过 commit 方法来触发 mutation。Action 可以返回一个 Promise 对象。
1. **modules**：模块化管理 state、getters、mutations 和 actions。可以将 store 分割成不同的模块，每个模块可以拥有自己的 state、getters、mutations、actions 和子模块。模块内部的 action、mutation 和 getter 等方法仍然注册在全局命名空间下，但 state 却是模块的局部状态，而不是全局状态。

以上这些属性组合起来，可以构建一个统一的、响应式的数据管理系统，用于管理 Vue.js 应用程序中的状态。

#### actions 和 mutations 的区别？

在 Vuex 中，actions 和 mutations 是两种用于处理状态变更的方法，它们的主要区别在于：

1. **操作方式不同**：mutations 是同步的，而 actions 是异步的。mutations 的变更操作应该是同步的，因为在数据流中，一个 mutation 操作可能会影响到其他的状态，并且需要保证在所有的状态处理完毕后才能更新视图。而 actions 一般用于处理异步操作，比如调用接口获取数据后再更新状态。
1. **触发方式不同**：mutations 是由组件内部的方法触发的，而 actions 可以被其他的 actions 触发。在 Vuex 中，只有 mutations 可以直接修改 state 中的数据，而 actions 必须通过 commit mutations 来修改 state。

综上所述，如果需要处理异步操作，可以使用 actions；如果是同步操作，则使用 mutations 更为合适。同时，由于 actions 和 mutations 之间是可以互相触发的，所以在实际开发中，也可以结合使用它们来处理复杂的状态变更。

#### VueX 和 localStorage 的区别？

VueX 和 localStorage 都是用于在客户端存储数据的技术，但是它们之间有一些区别：

1. **数据类型**：VueX 可以存储任何类型的 JavaScript 对象，包括函数和非 JSON 对象，而 localStorage 只能存储字符串类型的数据。
1. **存储大小**：VueX 的存储大小取决于浏览器的内存大小，而 localStorage 的存储大小一般限制在 5MB 左右。
1. **生命周期**：VueX 的数据存储在内存中，当页面刷新或关闭时数据会被清除，而 localStorage 的数据会一直存在，直到被手动删除或者浏览器清除缓存。
1. **数据共享**：VueX 的数据是针对单个应用程序的，不能被其他应用程序或页面访问，而 localStorage 的数据可以在同一域名下的不同页面或应用程序之间共享。

因此，在选择使用 VueX 还是 localStorage 时，需要根据实际的场景和需求来选择。如果需要存储大量数据或者需要在多个应用程序之间共享数据，则可以选择 localStorage；如果需要在应用程序内存中管理和共享数据，则可以选择 VueX。

#### Redux 和 VueX 有什么区别？它们的共同思想？

Redux 和 VueX 都是现代前端应用程序中流行的状态管理库。它们的共同思想是将应用程序状态抽象出来，并提供一种可预测的方法来管理状态的变化。它们都具有以下特点：

1. **单一数据源**：应用程序的状态被存储在单一的数据源中，简化了状态管理和调试。
1. **状态不可变性**：状态对象是不可变的，任何状态的更改都需要返回一个新的状态对象。
1. **动作**：状态的更改是通过触发动作来实现的，动作是一个包含有关状态更改的信息的简单对象。

VueX 与 Redux 的区别在于，VueX 更加适合与 Vue 框架配合使用，因为它是专门为 Vue 设计的，并利用了 Vue 的一些核心特性，如响应式数据。VueX 还提供了一些特殊的功能，如辅助函数，可以更容易地将状态注入到 Vue 组件中。而 Redux 则更为通用，可以与任何 JavaScript 应用程序一起使用。此外，VueX 通过使用 Vue 的生命周期方法来自动化订阅和取消订阅状态更改，而 Redux 则需要手动处理这些逻辑。

#### 为什么 VueX 的 mutation 中不能做异步操作？

在 VueX 中，Mutation 主要用于同步修改 state 中的数据，由于 VueX 采用了单一状态树的设计，Mutations 的执行必须是同步的，这样才能保证在一个状态变更的时候，其他的状态变量也可以同步更新，防止数据不一致的情况发生。如果在 Mutation 中执行异步操作，就会导致状态变更的时机不确定，从而无法保证状态的一致性。

如果需要在 VueX 中执行异步操作，可以使用 Actions 来进行异步操作。Actions 可以提交 Mutation 来修改 state 中的数据，而且 Actions 也可以返回 Promise，从而实现异步操作。

#### 为什么要用 VueX 或者 Redux？

VueX 和 Redux 都是用来管理应用程序状态的工具。它们的目的是解决应用程序中数据流的问题，特别是在大型复杂的应用程序中，状态管理很快就会变得混乱和难以维护。以下是一些使用 VueX 或 Redux 的好处：

1. **统一的状态管理**：通过集中管理应用程序的状态，使得状态变化更加可控、可预测。这样就可以更轻松地理解应用程序的状态，并且减少了状态管理的复杂性。
1. **组件通信更加简单**：通过 VueX 或 Redux，可以实现组件之间的通信，避免了通过 props 或事件总线等方式进行繁琐的数据传递。
1. **方便的调试和测试**：由于 VueX 和 Redux 都是使用单一数据源的模式，可以更容易地跟踪应用程序的状态变化。这样就更容易进行调试和测试，特别是在大型应用程序中。
1. **更好的可扩展性**：使用 VueX 或 Redux 可以更容易地扩展应用程序，使其更加模块化。这样就可以更好地管理应用程序的代码，并且更容易地添加新的功能和模块。

总之，VueX 和 Redux 可以帮助我们更好地管理应用程序的状态，并使得应用程序更加可控和可预测。它们的使用可以减少状态管理的复杂性，提高代码的可维护性和可扩展性。

#### VueX 的严格模式是什么？有什么作用？如何开启？

VueX 的严格模式（strict mode）是一种开发模式，用于检测应用程序中的状态变化是否合法。它可以帮助开发人员更好地调试代码，找出应用程序中的状态变化错误。

开启严格模式后，任何状态变化如果不是通过 mutation 函数进行的话，都会报出警告，禁止直接修改状态。这样做的好处是保证应用程序的数据流向是可追踪和可控制的，避免了状态变化的不可预测性和难以调试的问题。

开启 VueX 严格模式的方法是在创建 store 实例时通过 strict: true 的方式进行配置。例如：

```
import { createStore } from 'vuex'

const store = createStore({
  // ... 其他配置项
  strict: true
})
```

需要注意的是，开启严格模式可能会影响性能，因为它会导致 VueX 每次修改状态都会进行深度比较，以确保状态变化的合法性。因此，在开发环境下使用严格模式进行调试，而在生产环境下禁用严格模式来提高性能是一种常见的做法。

#### VueX 和单纯的全局对象有什么区别？

VueX 和单纯的全局对象的主要区别在于 VueX 提供了状态的集中管理和状态变化的追踪。具体来说：

1. **状态的集中管理**：在 VueX 中，所有的状态都存储在一个中心化的 store 中，而不是分散在各个组件中。这样做可以方便地对状态进行管理和维护，也便于状态在组件之间的共享和传递。
1. **状态变化的追踪**：在 VueX 中，状态的变化是通过 commit mutation 来完成的，所有的状态变化都有记录，并且可以通过开启严格模式来进行监控。这样做可以方便开发者追踪状态的变化，及时发现问题并进行修复。

而单纯的全局对象只是一个简单的变量存储空间，没有提供状态的集中管理和状态变化的追踪，也没有提供状态变化的通知机制，不利于大型项目的状态管理和维护。

#### 如何在组件中批量使用 VueX 的 getter 属性？

在组件中批量使用 VueX 的 getter 属性，可以使用 mapGetters 辅助函数。mapGetters 函数可以将 store 中的 getter 映射到组件的计算属性中，让我们可以直接使用 getter 函数名来调用 getter，而不必在组件中显式地引用它。

具体步骤如下：

1. 在组件中引入 mapGetters 辅助函数。

```
import { mapGetters } from 'vuex'
```

2. 在组件的 computed 选项中使用 mapGetters 函数。

```
computed: {
  ...mapGetters(['getter1', 'getter2', ...])
}
```

上述代码中，mapGetters 函数接收一个数组，数组中包含需要映射的 getter 函数名。mapGetters 函数将返回一个对象，对象中包含了所有映射后的计算属性，可以直接在模板中使用。

通过这种方式，我们可以批量地将 store 中的 getter 映射到组件的计算属性中，提高代码的可读性和可维护性。

#### 如何在组件中重复使用 VueX 的 mutation？

在组件中重复使用 Vuex 的 mutation，可以使用 Vuex 的辅助函数 mapMutations。

mapMutations 函数将 mutations 映射到局部计算属性中，返回一个对象。这个对象的属性名是一个字符串，代表着映射后的方法名；属性值是一个函数，用于调用该方法。

示例代码如下：

```
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    // 使用 mapMutations 映射 mutations
    ...mapMutations([
      'increment', // 映射 this.increment() 为 this.$store.commit('increment')
      'decrement'  // 映射 this.decrement() 为 this.$store.commit('decrement')
    ]),
    // ...
  }
}
```

在组件中，可以直接调用 increment 或 decrement 方法来触发对应的 mutation。

如果需要传递参数，可以将参数作为函数的参数传递进去。示例代码如下：

```
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment(amount) 为 this.$store.commit('increment', amount)
    ]),
    someMethod () {
      this.increment(10) // 触发 increment mutation，并传递参数 10
    }
  }
}
```

使用 mapMutations 可以减少组件中代码的冗余，并且让代码更易于维护。
