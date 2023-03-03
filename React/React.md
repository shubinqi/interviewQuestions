<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:05:27
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 17:45:45
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

React 中有两种组件：Component 和 PureComponent。它们的区别在于 shouldComponentUpdate 方法的实现方式不同。以下是 React.Component 和 React.PureComponent 的区别：

React.Component

- 继承自 React.Component 的组件需要手动实现 shouldComponentUpdate(nextProps, nextState)方法。
- 在 shouldComponentUpdate 方法中手动比较当前 props 和 state 与下一个 props 和 state，如果有变化则返回 true，否则返回 false，以决定是否需要进行重新渲染。
- 如果 shouldComponentUpdate 方法返回 false，则不会进行重新渲染。

React.PureComponent

- 继承自 React.PureComponent 的组件会自动进行浅比较（shallow comparison）。
- 当组件的 props 或 state 发生改变时，React.PureComponent 会自动比较当前 props 和 state 与下一个 props 和 state，如果相同则不会进行重新渲染，否则会重新渲染。
- React.PureComponent 实现了 shouldComponentUpdate 方法，但不建议在继承自 React.PureComponent 的组件中手动实现 shouldComponentUpdate 方法。

浅比较是指只比较对象的引用是否相等，而不是比较对象的值是否相等。对于基本类型（如数字或布尔值），浅比较会检查它们的值是否相等。对于引用类型（如对象或数组），浅比较只会检查它们的引用地址是否相同，而不会比较对象的值是否相等。因此，如果我们只是更新了对象中的一个属性或数组中的一个元素，浅比较会认为新旧对象或数组相等，不会进行重新渲染。这也是为什么 React.PureComponent 比 React.Component 性能更好的原因。

需要注意的是，继承自 React.PureComponent 的组件不建议手动实现 shouldComponentUpdate 方法，因为这样可能会破坏 React.PureComponent 的性能优化。此时，应该让 React.PureComponent 自动进行浅比较。如果需要进行深比较，则应该使用 React.Component 并手动实现 shouldComponentUpdate 方法。

#### React 高阶组件是什么？和普通组件有什么区别？有什么适用场景？

React 高阶组件（HOC）是一种基于 React 的组合特性而形成的设计模式，用于复用组件逻辑。HOC 是一个函数，接受一个组件作为参数并返回一个新组件。新组件可以访问被包装组件的 props，并可以在渲染过程中增强其行为。与普通组件相比，HOC 具有以下区别：

- HOC 是一个函数，而不是一个组件。
- HOC 接受一个组件作为参数，并返回一个新的组件。
- HOC 可以访问被包装组件的 props，并可以在渲染过程中增强其行为。
- HOC 不会修改被包装组件本身，而是通过包装来提供额外的功能。

适用场景：

- 代码复用，避免重复编写相似的代码。
- 在不修改现有组件代码的情况下，增加组件的功能。
- 在多个组件之间共享功能。

以下是一个简单的示例，演示如何使用 HOC 来增强组件的功能：

```
// 定义一个高阶组件
function withLogging(Component) {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    render() {
      // 通过 {...this.props} 将所有 props 传递给被包装组件
      return <Component {...this.props} />;
    }
  }

  return WithLogging;
}

// 定义一个普通组件
function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

// 使用高阶组件增强 MyComponent 的功能
const EnhancedComponent = withLogging(MyComponent);

// 渲染增强后的组件
ReactDOM.render(<EnhancedComponent name="World" />, document.getElementById('root'));
```

在上面的示例中，withLogging 函数是一个高阶组件，它接受一个组件作为参数，并返回一个增强了功能的新组件。EnhancedComponent 是一个增强后的组件，它可以访问 MyComponent 的 props，并且在渲染过程中增加了日志输出的功能。

#### 哪些方法会触发 React 重新渲染？

React 重新渲染是指在 React 应用程序中，当需要使用新数据更新 UI 时，React 会重新渲染组件。以下是一些方法会触发 React 重新渲染：

- 改变组件的 state 或 props 会触发组件重新渲染。默认情况下，当组件的 state 或 props 改变时，组件将重新渲染。例如，当调用 setState()函数来更新组件的状态时，React 会在下一次渲染时更新组件。在下面的例子中，当在 onClick 事件监听器中调用 setState() 时，组件的状态将被更新，并且组件将重新渲染。

```
class App extends React.Component {
  state = {
    a: 1,
  };
  render() {
    console.log('render');
    return (
      <React.Fragment>
        <p>{this.state.a}</p>
        <button
          onClick={() => {
            this.setState({ a: 1 });
          }}
        >
          Click me
        </button>
      </React.Fragment>
    );
  }
}
```

- 调用 forceUpdate() 函数可以强制组件重新渲染。如果组件的 render() 方法依赖于一些其他的数据，你可以告诉 React 组件需要通过调用 forceUpdate()重新渲染。例如，当组件的某些变量不在 state 上，但你又想达到这个变量更新的时候，刷新 render 时，可以手动调用 forceUpdate() 自动触发 render。
- 在 React 类组件中，可以利用 shouldComponentUpdate() 或者 PureComponent 来减少因父组件更新而触发子组件的重新渲染，从而达到目的。shouldComponentUpdate() 方法可以决定是否组件是否重新渲染，如果不希望组件重新渲染，返回 false 即可。PureComponent 是一个自动实现了 shouldComponentUpdate() 的 React 组件，如果组件的 props 和 state 没有变化，PureComponent 将不会重新渲染。
- 在 React 函数组件中，可以使用 React.memo() 来缓存组件的渲染，避免不必要的更新。React.memo() 是 React 16.6 新的一个 API，与 PureComponent 十分类似，但不同的是， React.memo() 只能用于函数组件。例如，在下面的例子中，当 count 发生变化时，TestC 组件将重新渲染。

```
let TestC = (props) => {
    console.log('Rendering TestC :', props)
    return (
        <div>
        { props.count }
        </>
    )
}
TestC = React.memo(TestC,arePropsEqual);
function arePropsEqual(prevProps, nextProps) {
  // your code
  return prevProps === nextProps;
}
```

#### 重新渲染 render 会做些什么？

当 React 重新渲染时，它会经历一个称为渲染阶段的过程。以下是渲染阶段发生的情况：

- React 基于 JSX 代码创建了一个新的虚拟 DOM 树。
- React 将新的虚拟 DOM 树与旧的树进行比较，以确定需要更新的内容。
- React 使用检测到的更改更新 DOM。

当调用 setState() 时，React 通常会触发重新渲染。

然而，在某些情况下，setState() 不会导致重新渲染，例如当新状态与旧状态相同时。另一方面，调用 setState(null) 不会导致重新呈现。

为了优化渲染，React 提供了几种技术：

1. shouldComponentUpdate() 或 PureComponent 可用于减少由父组件更新导致的重新渲染次数。
1. React.memo() 可用于缓存功能组件的呈现，并避免不必要的更新。

但是，它只能与功能组件一起使用。

即使组件的状态或属性没有改变，也可以使用 forceUpdate() 手动触发重新渲染。

在渲染阶段，React 使用双缓冲区技术来维护两个光纤树：当前树和正在进行的工作树。当前树表示 DOM 的当前状态，而正在进行的工作树表示需要进行的更改。在建工程树完成后，它将成为新的当前树，流程将重新开始。

ReactDOM.render() 是实现 React Fiber 算法和构建 Fiber 树的核心 API。

它接受一个元素和一个容器，并将该元素渲染到容器中。

总之，当 React 重新渲染时，它将经历渲染阶段，该阶段包括创建一个新的虚拟 DOM 树，将其与旧树进行比较，并使用更改更新 DOM。

setState() 通常会触发重新渲染，但在某些情况下不会触发。

为了优化渲染，React 提供了 shouldComponentUpdate() 、React.memo() 和 forceUpdate() 等技术。

在渲染阶段，React 使用双缓冲区技术来维护两个光纤树。

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
