<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-06 12:56:51
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-06 14:51:00
 * @Description: 八股文：Diff算法（4题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\React\Diff算法.md
-->

#### React diff 算法的原理是什么？和 Vue 的有什么不同？

React 的 diff 算法主要是基于同层比较的策略，它比较新旧虚拟 DOM 树的同一层节点，通过对节点的增、删、改操作尽可能地减少 DOM 操作，从而提高渲染性能。

React 的 diff 算法的具体实现步骤如下：

1. 比较树的根节点，如果不同，直接替换整棵树；
2. 如果根节点相同，则比较根节点的属性和状态，如果有变化，则更新根节点的属性和状态；
3. 逐层比较子节点，分别对新旧节点进行比较，比较规则如下：
   - 如果两个节点类型不同，则直接删除旧节点，插入新节点；
   - 如果两个节点类型相同，则比较节点属性和子节点：
     - 如果节点属性有变化，则更新节点属性；
     - 如果只有子节点有变化，则继续递归比较子节点。

与 React 不同，Vue 的 diff 算法则是采用了一种叫做“双端指针”的算法。该算法的核心思想是，新旧节点的比较不仅可以从头开始比较，也可以从尾部开始比较，通过先比较尾部的节点，尽可能减少节点的移动和操作，从而提高性能。

总体来说，React 和 Vue 的 diff 算法在核心原理上有所不同，但都是为了尽可能减少不必要的 DOM 操作，提高渲染性能。

#### React 的 Diff 算法和 Vue 的有什么区别？

React 和 Vue 都采用了虚拟 DOM 技术来优化页面渲染效率，其中的 diff 算法是优化的核心。

React 的 diff 算法和 Vue 的 diff 算法在一些细节处理上有所不同，主要表现在以下几个方面：

1. **同层级比较**：React 的 diff 算法会从顶层开始，一层一层地比较，如果发现同一层有不同的节点，就会把这一层的节点全部更新，这种做法有可能会导致一些无用的更新；而 Vue 的 diff 算法是采用双指针的方式，从头开始遍历，只要找到相同的节点就停止比较，然后再进行下一层的比较。
1. **key 值比较**：React 的 diff 算法会根据节点的 key 值来判断是否是同一节点，如果 key 值相同就认为是同一节点，如果 key 值不同就认为是不同的节点；而 Vue 的 diff 算法也会根据节点的 key 值来判断是否是同一节点，但是如果 key 值相同但是节点类型不同，Vue 会认为这是不同的节点。
1. **异步更新**：React 在更新过程中，会将所有需要更新的组件先加入到更新队列中，等到下一个事件循环时再进行更新，这样可以尽可能地减少 DOM 操作，提高更新效率；而 Vue 是采用异步更新策略，即在 nextTick 的时候进行批量更新，这种方式可以让更新效率更高，因为同一个 tick 内的更新都会被合并，减少 DOM 操作的次数。

总的来说，React 和 Vue 的 diff 算法在实现上有一些细节差异，但是它们的本质都是为了减少 DOM 操作次数，提高页面渲染效率。

#### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的？

在 React 中，key 是用来帮助 React 识别组件的唯一性的属性，它主要是解决在渲染列表时的性能问题。

当渲染列表时，React 会创建一个虚拟 DOM 数组来存储列表中每个元素对应的虚拟 DOM，然后通过比较前后两个虚拟 DOM 数组的差异来决定如何更新视图。如果列表中的元素没有唯一的标识符，比如 key 属性，那么当列表顺序变化或者新增或删除元素时，React 可能会错误地认为它们是同一个元素，从而导致不必要的更新。

因此，加上 key 属性可以帮助 React 确定每个元素的唯一性，从而避免不必要的更新，提高渲染性能。

React 中的 key 主要用于更新列表时的性能优化，而 Vue 的 key 则不仅可以用于列表的性能优化，还可以用于一些其他场景，例如在切换路由时，key 可以保证组件的状态不被重置。此外，Vue 的 key 属性还可以用于强制替换元素，而 React 并没有类似的功能。
