<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 22:32:47
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-02 01:27:24
 * @Description: 八股文：响应式原理 Proxy
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\响应式原理Proxy.md
-->

#### Vue 3 响应式原理是什么？

Vue 3 的响应式原理主要是通过 Proxy 对象实现的。

当一个 Vue 3 实例创建时，Vue 会将 data 对象中的属性都转换成响应式的数据，这些数据被存储在一个名为 reactiveData 的 Map 对象中。每一个属性都会被代理成一个 Proxy 对象，当这个属性的值发生变化时，Proxy 对象会通知对应的组件进行更新。

Vue 3 在响应式原理上做了一些优化，例如在创建 Proxy 对象时，只会对访问过的属性进行代理，这样可以减少不必要的代理，提高性能。此外，Vue 3 中还提供了一个 readonly 函数，可以创建一个只读的响应式对象，避免数据被意外修改。

总的来说，Vue 3 的响应式原理通过 Proxy 对象实现了数据的双向绑定，从而使得数据的变化可以自动地更新到视图中，提高了开发效率。

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
