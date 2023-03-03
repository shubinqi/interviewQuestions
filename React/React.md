<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:05:27
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 03:28:59
 * @Description: React 面试题（57题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\React\React.md
-->

#### React 和 Vue 的异同？

Vue 和 React 是两个流行的前端框架，它们都有着自己的优点和适用场景。以下是它们的异同点：

异同点：

1. 核心思想不同

- Vue 的核心思想是尽可能地降低前端开发的门槛，是一个灵活易用的渐进式双向绑定的 MVVM 框架。
- React 的核心思想是声明式渲染和组件化、单向数据流，React 既不属于 MVC 也不属于 MVVM 架构。

2. 数据的 reactivity 实现不同

- Vue 提供反应式的数据，当数据改变时，界面会自动更新。
- React 需要调用方法 setState()来更新组件的状态。

3. 性能优化方式不同

- React 整体是函数式的思想，在 React 中是单向数据流，推崇结合 immutable 来实现数据不可变。React 的性能优化需要手动去做。
- Vue 的性能优化是自动的，但是 Vue 的响应式机制也有问题，当 state 特别多的时候，Watcher 会很多，会导致卡顿。

4. 响应式机制不同

- React 是单向数据流，父组件通过 props 传递给子组件，子组件通过回调函数把数据传递回父组件。
- Vue 是双向绑定，当数据变化时，视图会自动更新，当视图变化时，数据也会自动更新。

5. 开发习惯不同

- Vue 更加灵活，易于上手，适合小型项目或快速原型开发。
- React 更加强调组件化开发，适合大型项目或需要高度定制化的场景。

扩展：声明式是什么意思？

声明式编程是相对于命令式编程而言的，命令式编程是指告诉计算机如何去执行某个任务，而声明式编程是告诉计算机需要完成什么任务，而不是如何完成任务。在 React 中，声明式渲染指的是通过 JSX 语法描述 UI 组件，React 会根据 JSX 描述生成虚拟 DOM，并通过 DOM diff 算法来更新 DOM 元素，而不是手动操作 DOM 元素。

#### React 事件机制？

React 事件机制是 React 库中的事件系统。React 事件系统是基于合成事件的，它是将原生 DOM 事件封装在一个单一的跨浏览器的 API 中，使得开发人员可以用相同的方式处理事件，而不用担心浏览器之间的差异。React 事件与原生事件不完全相同，因为 React 事件是基于合成事件的。合成事件是 React 提供的跨浏览器事件系统，它通过事件委托将所有事件都绑定到文档上，而不是将事件绑定到每个单独的元素上。这样做可以提高性能，并避免在组件卸载时出现内存泄漏的问题。

在 React 中，事件处理程序是通过 props 来传递的。事件处理程序必须是一个函数，当事件被触发时，该函数将被调用。React 中的事件处理程序与传统的 HTML 事件处理程序有所不同。例如，你不能通过返回 false 的方式来阻止默认行为，而是必须显式地调用 preventDefault() 方法。另外，在使用 ES6 class 语法定义组件时，通常将事件处理程序声明为 class 中的方法。在调用事件处理程序时，需要注意绑定 this。如果忘记绑定 this，并将该函数传递给 onClick，那么在调用该函数时，this 将指向 undefined。为了避免这种情况，可以使用 bind() 方法或箭头函数来绑定 this。

React 17 中，onScroll 事件在 React 中不再冒泡。这与浏览器的行为一致，并且避免了当一个嵌套且可滚动的元素在其父元素触发事件时造成混乱。

总之，React 事件机制是基于合成事件的，它提供了跨浏览器的事件处理方式，使得开发人员可以用相同的方式处理事件，并避免了在组件卸载时出现内存泄漏的问题。要注意绑定 this，并使用 preventDefault() 方法来阻止默认行为。在 React 17 中，onScroll 事件不再冒泡。

#### React.Component 和 React.PureComponent 的区别？

#### React 高阶组件是什么，和普通组件有什么区别，适用什么场景？

#### 哪些方法会触发 React 重新渲染？

#### 重新渲染 render 会做些什么？

#### React 如何判断什么时候重新渲染组件？

#### 对 React 中 Fragment 的理解，它的使用场景是什么？

#### 在 React 中如何避免不必要的 render？

#### React 如何获取组件对应的 DOM 元素？

#### 对 React 的插槽 (Portals) 的理解，如何使用，有哪些使用场景？

#### 对 React context 的理解，为什么 React 并不推荐优先考虑使用 Context？

#### React 中什么是受控组件和非控组件？

#### React 中 refs 的作用是什么？有哪些应用场景？

#### React 组件的构造函数有什么作用？它是必须的吗？

#### 类组件与函数组件有什么异同？

#### React setState 调用的原理？

#### React setState 调用之后发生了什么？是同步还是异步？

#### React 中的 setState 批量更新的过程是什么？

#### React 中有使用过 getDefaultProps 吗？它有什么作用？

#### React 中 setState 的第二个参数作用是什么？

#### React 中的 setState 和 replaceState 的区别是什么？

#### 在 React 中组件的 this.state 和 setState 有什么区别？

#### state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程？

#### React 组件的 state 和 props 有什么区别？

#### React 的生命周期有哪些？

#### React 废弃了哪些生命周期？为什么？

#### React 性能优化在哪个生命周期？它优化的原理是什么？

#### state 和 props 触发更新的生命周期分别有什么区别？

#### React 中发起网络请求应该在哪个生命周期中进行？为什么？

#### React 组件通信方式有哪些？（建议写博客）

#### React-Router 的实现原理是什么？

#### 如何配置 React-Router 实现路由切换？

#### React-Router 怎么设置重定向？

#### react-router 里的 Link 标签和 a 标签的区别？

#### React-Router 的路由有几种模式？

#### React-Router 4 的 Switch 有什么用？

#### 对 React Hook 的理解，它的实现原理是什么？

#### 为什么 useState 要使用数组而不是对象？

#### React Hooks 解决了哪些问题？

#### React Hook 的使用限制有哪些？

#### useEffect 与 useLayoutEffect 的区别

#### React Hooks 和生命周期的关系？

#### 对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？

#### React diff 算法的原理是什么？和 Vue 的有什么不同？

#### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的？

#### React 数据持久化有什么实践吗？
