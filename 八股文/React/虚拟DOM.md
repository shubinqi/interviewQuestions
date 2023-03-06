<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-03 14:58:25
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-06 14:13:14
 * @Description: 八股文：虚拟DOM（4题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\React\虚拟DOM.md
-->

#### 对 React 虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？

React 虚拟 DOM 是 React 框架的核心概念之一，用于提高渲染效率。虚拟 DOM 本身是一个纯 JavaScript 对象，用来描述真实 DOM 的层次结构、属性和内容等信息。虚拟 DOM 中包含了真实 DOM 所有的信息，但它并不直接操作真实 DOM，而是通过比对新旧虚拟 DOM 的差异，然后批量更新真实 DOM，从而减少了对真实 DOM 的频繁操作，提高了页面渲染的性能。

虚拟 DOM 主要做了以下几件事情：

1. **初始化**：通过调用 React.createElement() 函数创建虚拟 DOM 对象。
1. **渲染**：将虚拟 DOM 对象转换为真实 DOM 对象，并插入到页面中。
1. **更新**：在组件状态改变时，通过比较新旧虚拟 DOM 的差异，找出需要更新的部分，并进行更新操作。
1. **销毁**：当组件被销毁时，也会同时销毁对应的虚拟 DOM。

React 虚拟 DOM 的实现，使得开发者不用关注具体的 DOM 操作，只需要通过操作虚拟 DOM 来更新 UI，从而提高了开发效率。同时，通过虚拟 DOM 的比对算法，React 可以避免不必要的 DOM 操作，从而提高了性能。

#### React 的虚拟 DOM 和 Vue 的虚拟 DOM 有什么区别？

React 和 Vue 都使用了虚拟 DOM 技术来实现高效的页面更新，但它们的实现方式略有不同。

React 的虚拟 DOM 是通过 React.createElement() 方法或 JSX 语法创建的 JavaScript 对象，称为 React 元素，包含了组件的名称、属性和子元素等信息。React 将每个组件渲染成一个虚拟 DOM 树，组件的状态发生变化时，React 会比较新旧虚拟 DOM 树的差异，并仅更新需要改变的部分。

Vue 的虚拟 DOM 是通过模板语法和 Vue 组件生成的，称为 VNode（Virtual Node）对象，包含了节点类型、节点属性、节点子元素等信息。当组件状态变化时，Vue 会重新渲染组件，生成一个新的 VNode 树，然后将新的 VNode 树和旧的 VNode 树进行比较，然后再将变化的部分更新到真实 DOM 上。

因此，React 的虚拟 DOM 更加轻量级和简单，因为它只包含组件需要渲染的信息，而 Vue 的虚拟 DOM 包含了所有节点的信息，因为 Vue 会在生成 VNode 树时记录所有节点信息，这也使得 Vue 的渲染效率比 React 稍低。但是，Vue 的虚拟 DOM 可以通过使用 key 属性来优化节点的更新，而 React 没有类似的优化手段。
