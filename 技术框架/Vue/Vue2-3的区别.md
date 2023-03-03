<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-02 01:30:09
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-02 18:20:45
 * @Description: Vue2 和 Vue3 的区别（1题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Vue\Vue2-3的区别.md
-->

#### Vue2 和 Vue3 的区别？

重要改变总结：

1. **监测机制的改变**：从 Object.defineProperty 改为 Proxy
2. **根节点的改变**：Vue3 支持碎片(Fragments)，Vue3 中组件的 template 下可以包含多个根节点，而 Vue2 中组件的 template 下只能包含一个根节点。
3. **API 模式的改变**：Vue2 使用选项式 API（Options API），Vue3 组合式 API（Composition API）
4. **建立响应式数据的方式**：Vue2 把数据放入 data 属性中，Vue3 引入 ref 或 reactive 实现
5. **生命周期钩子**：可以用 setup () 替代 beforeCreate 和 created；组件卸载阶段生命周期的变更；增加了 onRenderTracked 和 onRenderTriggred 生命周期
6. **Diff 算法的改变**：Vue2 是全量 Diff，Vue3 是静态标记 + 非全量 Diff，Vue3 使用最长递增子序列优化了对比流程
7. **v-if 和 v-for**：在 Vue2 中，v-for 优先于 v-if 生效，每次都要先渲染才会进行条件判断，会带来性能的浪费。最好不要把 v-if 和 v-for 同时用在一个元素上。而在 Vue2 中，v-if 优先于 v-for 生效，把 v-if 和 v-for 同时用在一个元素上 Vue 会给我们报警告。
8. **去除了过滤器**；Vue 3 中 filter 被去除，我们可以通过 计算属性实现。
9. **支持 TypeScript**；Vue 3 对 TypeScript 的支持更加友好。

详细改变说明：

1. 监测机制的改变

- vue3 中使用了 ES6 的 Proxy API 对数据代理，监测的是整个对象，而不再是某个属性。
- 消除了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制
- vue3 可以监测到对象属性的添加和删除，可以监听数组的变化；
- vue3 支持 Map、Set、WeakMap 和 WeakSet。

2. Vue3 支持碎片(Fragments)

- Vue2 在组件中只有一个根节点。
- Vue3 在组件可以拥有多个根节点。

3. API 模式不同

Vue2 与 Vue3 最大的区别：Vue2 使用选项式 API（Options API）对比 Vue3 组合式 API（Composition API）

4. 建立数据的方式不同

- 从 vue 引入 ref 或 reactive
- 简单数据类型使用 ref() 方法处理，复杂类型数据用 reactive() 处理
- 使用 setup() 方法来返回我们的响应性数据，从而我们的 template 可以获取这些响应性数据
- Vue2：这里把数据放入 data 属性中
- Vue3：需要使用一个新的 setup() 方法，此方法在组件初始化构造的时候触发。

5. 生命周期钩子不同 — Lifecyle Hooks

若组件被 &lt;keep-alive&gt; 包含，则多出下面两个钩子函数

- onActivated()：被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行 。
- onDeactivated()：比如从 A 组件，切换到 B 组件，A 组件消失时执行。

- setup()：开始创建组件之前，在 beforeCreate 和 created 之前执行。创建的是 data 和 method
- onBeforeMount()：组件挂载到节点上之前执行的函数。
- onMounted()：组件挂载完成后执行的函数。
- onBeforeUpdate()：组件更新之前执行的函数。
- onUpdated()：组件更新完成之后执行的函数。
- onBeforeUnmount()：组件卸载之前执行的函数。
- onUnmounted()：组件卸载完成后执行的函数

Vue 3 中新增的两个生命周期钩子函数

onRenderTracked 和 onRenderTriggered 是 Vue 3 中的 Composition API 中的两个函数，用于性能分析和调试。

onRenderTracked 函数会在组件的每次渲染中被调用，它会接收到一个 DebuggerEvent 类型的参数，包含了组件的渲染相关的信息，例如组件的名称、更新的原因、依赖项等。我们可以利用这些信息进行性能分析和调试，例如查找一些不必要的重新渲染或优化组件的依赖项。

onRenderTriggered 函数会在组件的依赖项被触发时被调用，它也接收到一个 DebuggerEvent 类型的参数，包含了组件的渲染相关的信息。我们可以利用这些信息来确定组件的重新渲染原因，例如某个状态变量的变化导致了组件的重新渲染。

需要注意的是，这两个函数只在开发模式下有效，在生产模式下不会被调用。可以通过在创建 Vue 应用程序时设置 devtools: true 选项来启用这些函数的调用。例如：

```
const app = createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app', true); // 开启 devtools 选项
```

6. 父子传参不同，子组件通过 defineProps() 接收，并且接收这个函数的返回值进行数据操作。

总结： vue3 性能更高, 体积更小, 更利于复用, 代码维护更方便

#### defineProperty 和 proxy 的区别

Vue 在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。并 劫持各个属性 getter 和 setter，在数据变化时发布消息给订阅者，触发相应的监听回调，而这之间存在几个问题

1. 初始化时需要遍历对象所有 key，如果对象层次较深，性能不好
1. 通知更新过程需要维护大量 dep 实例和 watcher 实例，额外占用内存较多
1. Object.defineProperty 无法监听到数组元素的变化，只能通过劫持重写数方法
1. 动态新增，删除对象属性无法拦截，只能用特定 set/delete API 代替
1. 不支持 Map、Set 等数据结构

Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。相对于 Object.defineProperty()，其有以下特点：

1. Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。
1. 它的处理方式是在 getter 中去递归响应式，这样的好处是真正访问到的内部属性才会变成响应式，简单的可以说是按需实现响应式，减少性能消耗。
1. Proxy 可以监听数组的变化。

#### Vue3 Diff 算法和 Vue2 的区别

我们知道在数据变更触发页面重新渲染，会生成虚拟 DOM 并进行 patch 过程，这一过程在 Vue3 中的优化有如下

编译阶段的优化：

1. **事件缓存**：将事件缓存（如: @click），可以理解为变成静态的了
1. **静态提升**：第一次创建静态节点时保存，后续直接复用
1. **添加静态标记**：给节点添加静态标记，以优化 Diff 过程

由于编译阶段的优化，除了能更快的生成虚拟 DOM 以外，还使得 Diff 时可以跳过"永远不会变化的节点"，

Diff 优化如下

1. Vue2 是全量 Diff，Vue3 是静态标记 + 非全量 Diff
1. 使用最长递增子序列优化了对比流程

根据尤大公布的数据就是 Vue3 update 性能提升了 1.3~2 倍
