<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:06:54
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-06 14:57:20
 * @Description: Redux 面试题（16题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端框架\React\Redux.md
-->

#### 对 Redux 的理解，主要解决了什么问题？

Redux 是一个状态管理工具，它主要解决了以下问题：

- 在组件之间共享状态时，如果状态管理不当，会导致代码难以维护。Redux 提供了一个集中式的状态管理容器，使得状态的管理更加规范化和易于维护。
- 在 React 应用中，当组件之间需要共享状态时，如果使用 React 自带的状态管理方式，可能会导致组件之间状态的耦合度过高，使得代码难以维护。Redux 提供了一种解耦的方式，使得组件之间的状态共享更加灵活。
- Redux 提供了一种可预测的状态更新方式，使得状态更新的过程更加规范化和可控。通过使用纯函数 reducer 来执行状态的更新，使得状态的更新过程更加清晰和可维护。

总之，Redux 主要解决了 React 应用中状态管理的问题，使得状态共享、状态更新等操作更加规范化和易于维护。

#### Redux 原理及工作流程？

Redux 是一个用于 JavaScript 应用程序的状态管理库。Redux 通过将应用程序状态存储在一个单一的中心位置来帮助构建可维护的应用程序，并使用 reducer 函数更新状态。以下是 Redux 的原理和工作流程：

**Redux 的原理：**

- Redux 的核心是一个存储应用程序状态的 store，这个 store 是一个 JavaScript 对象。
- Store 不能直接修改，只能通过 dispatch action 来修改 store 中的数据。
- Action 是一个描述应用程序中发生事件的对象，它包含了一个 type 属性和一个可选的 payload 属性。
- Reducer 是一个纯函数，接收当前状态和一个 action，返回一个新的状态。
- Reducer 函数的作用是根据 action 的 type 属性更新 store 中的数据。
- 当 store 中的数据发生变化时，React 组件会重新渲染。

**Redux 的工作流程：**

- 创建一个 Redux store，将 reducer 函数传递给 store。
- 当组件需要更新 store 中的数据时，组件会 dispatch 一个 action。
- Redux store 调用 reducer 函数，并将当前状态和 action 作为参数传递给 reducer 函数。
- Reducer 函数根据 action 的 type 属性更新状态，并返回一个新的状态。
- Redux store 将新状态存储在 store 中，并通知所有订阅了 store 的组件进行重新渲染。

Redux 的工作流程可以用以下代码示例进行说明：

```
// 创建 Redux store
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

// Dispatch action
import { addTodo } from './actions';
store.dispatch(addTodo('Buy milk'));

// Reducer 函数
const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}

// 订阅 store
store.subscribe(() => {
  console.log(store.getState());
});
```

这个示例创建了一个 Redux store，并将一个 reducer 函数传递给 store。当 dispatch 一个 addTodo action 时，store 将调用 reducer 函数，并更新 store 中的数据。最后，通过订阅 store，可以在 store 中的数据发生变化时获取通知，并进行相应的操作。

#### Redux 有哪些优点？

Redux 的主要优点包括：

1. **单一数据源**：Redux 采用单一的 Store 来存储整个应用的状态，所有组件都从同一个地方获取数据，方便状态管理和共享。
1. **预测性**：Redux 的状态变化是通过纯函数来进行的，这保证了任何时候，对于相同的输入，都可以得到相同的输出，使得状态的变化变得可预测。
1. **可扩展性**：Redux 提供了一些 API 来扩展它的功能，例如中间件、Store 增强器等，这使得 Redux 可以方便地与其他库和框架进行集成。
1. **开发工具支持**：Redux 提供了一系列的开发工具来帮助开发者进行调试和开发，例如 Redux DevTools、redux-logger 等。
1. **单向数据流**：Redux 采用单向数据流的设计模式，使得数据的流动更加清晰明了，方便状态的管理和维护。
1. **代码组织**：Redux 规定了一种代码组织方式，使得代码更加清晰、易于维护和重用。

综上所述，Redux 的优点包括了单一数据源、预测性、可扩展性、开发工具支持、单向数据流、代码组织等方面。

#### Redux 遵循的三个原则是什么？

Redux 遵循以下三个原则：

1. **单一数据源**：整个应用程序的 state 被存储在单个 store 中，也就是说整个应用程序中只有一个 state。
1. **State 是只读的**：唯一改变 state 的方式是通过 action。
1. **使用纯函数来执行修改**：为了描述 action 如何改变 state tree ，你需要编写 reducers。Reducer 只是一个纯函数，它接收先前的 state 和 action，并返回新的 state。

这三个原则是为了保证应用程序状态的可预测性、易于调试和可维护性。

#### 你对“单一数据源”有什么理解？

“单一数据源”是 Redux 中的一个重要概念，它指的是应用的整个 state 存储在一个单一的 JavaScript 对象中，这个对象被称为“状态树”，或者“store”。所有组件的状态都来自于这个“状态树”，并且这个“状态树”也是整个应用唯一的数据源。

这个原则主要有以下几个优点：

1. 方便统一管理和控制应用的状态，对于整个应用来说，数据是共享的，而不是相互独立的。
1. 可以方便地实现状态的快照和恢复，便于调试和测试。
1. 便于跨组件的状态共享，避免了 props 层层传递的问题。

但是也需要注意，过度地使用“单一数据源”可能会导致应用的复杂度增加，状态树变得越来越臃肿，开发和维护成本也会增加。因此，需要根据具体情况来考虑是否使用“单一数据源”。

#### Store 在 Redux 中的意义是什么？

在 Redux 中，Store 是应用的核心，它保存着应用的状态(state)。Store 用于管理应用的状态数据，它是一个对象，包含了应用的全部状态数据，同时还有一些管理状态数据的方法。Store 中的状态数据是只读的，这意味着应用的状态只能通过 Dispatch Action 来改变，而不能直接修改状态。

Store 的主要作用是为应用提供一个中心化的状态管理，它可以帮助我们更好地组织和管理应用的数据流。通过 Store 中提供的方法，我们可以监听状态变化，订阅状态更新，以及派发 Action 来触发状态变化。

总之，Store 在 Redux 中的意义可以概括为：

1. 存储整个应用的状态数据
1. 提供了管理状态数据的方法
1. 提供了订阅状态更新的方法
1. 提供了派发 Action 的方法来触发状态变化

#### 使用过哪些 Redux 中间件？

Redux 中间件是一个第三方扩展点，它可以在分发操作和到达 reducer 的时刻之间提供额外的功能。最常用的 Redux 中间件是处理异步事件的中间件，这些中间件包括 redux-thunk、redux-promise 和 redux-saga 等。下面是一些常用的 Redux 中间件：

1. **Redux-Thunk**: Redux Thunk 是一个让你的 action creator 返回一个函数而不是一个 action 对象的函数，这个函数可以在内部执行异步操作并分派一个真正的 action 对象。它允许你的 action creator 在应用程序中执行异步操作，如 API 调用和路由导航。下面是一个使用 Redux-Thunk 的示例代码：

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
```

2. **Redux-Promise**: Redux-Promise 是一个中间件，它使您的操作创建器可以返回一个 Promise，该 Promise 解析为一个包含有效载荷的 action 对象。这个中间件允许你在应用程序中执行异步操作，如 API 调用和路由导航。下面是一个使用 Redux-Promise 的示例代码：

```
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
);
```

3. **Redux-Saga**: Redux-Saga 是一个使用 ES6 生成器函数来管理应用程序副作用的库。它允许你处理异步操作，如 API 调用和路由导航。下面是一个使用 Redux-Saga 的示例代码：

```
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
```

总之，Redux 中间件提供了一种简单的方法来扩展 Redux，以便处理异步操作和其他中间件。在 Redux 应用程序中使用中间件可以帮助开发人员更好地管理应用程序的状态，并使代码更加容易测试和维护。

#### Redux 中间件是什么？接受几个参数？

Redux middleware 是一个函数，它可以在 action 发送到 reducer 前被执行，并且可以将 action 修改、延迟、忽略、拦截等。Redux middleware 是 Redux 的扩展点，它提供了一种机制来增强 Redux 的功能。中间件可以用于日志记录、异步请求、路由跳转等场景，以此来改变 action。

Redux 中间件的作用是：

- 对 store.dispatch 方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
- 提供了一个分类处理 action 的机会。在 middleware 中，我们可以检阅每一个流过的 action，并挑选出特定类型的 action 进行相应操作，以此来改变 action。
- 处理 Redux 异步事件的中间件，绝对占有举足轻重的地位。

常用的 Redux 中间件有：

- redux-thunk：用于异步操作。
- redux-logger：用于日志记录。
- redux-saga：用于管理 Redux 应用异步操作。

接受几个参数？

- applyMiddleware 函数接受多个中间件作为参数，并返回一个增强版的 createStore 函数。
- createStore 函数接受一个 reducer 函数和一个可选的初始状态，返回一个 store 对象。
- 中间件函数接受三个参数：getState、dispatch 和 next。

例如，下面是一个使用 applyMiddleware 的示例代码：

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
```

在上面的示例中，applyMiddleware 接受了两个中间件函数，thunk 和 logger。然后，使用 applyMiddleware 函数将这两个中间件应用在 createStore 上，最后得到一个增强版的 store。

#### 柯里化是什么？柯里化函数两端的参数具体是什么？

柯里化是一种函数式编程的概念，它可以将一个多参数函数转化为一系列单参数函数的组合。这种转化的过程可以理解为将函数进行“分步骤”传参的过程。具体来说，柯里化的实现方式是通过返回一个新的函数，该函数接收一个参数，然后返回一个新的函数，不断重复这个过程直到最后一个参数传入，最终返回结果。在 JavaScript 中，柯里化函数的两端参数的具体含义是：

- 第一个参数：需要进行柯里化的原函数。
- 第二个参数：柯里化函数的初始参数，也就是原函数的第一个参数。如果原函数的第一个参数是一个对象或数组，可以将该对象或数组作为柯里化函数的第二个参数传入。

以下是实现柯里化的代码示例：

```
function curry(fn) {
    // 获取剩余参数 将类数组转化成数组
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.contact(innerArgs);
        return fn.apply(null, finalArgs);
    }
}
```

另一种实现方式是使用闭包和递归，代码示例如下：

```
const curry = function (fn) {
    return function nest(...args) {
        if (args.length === fn.length) {
            return fn(...args);
        } else {
            return function (arg) {
                return nest(...args, arg);
            }
        }
    }
}
```

对于柯里化函数的使用，可以通过以下步骤实现：

- 定义原函数。
- 使用柯里化函数对原函数进行柯里化，得到一个新的函数。
- 对新函数进行分步调用，每次传入一个参数，直到所有参数都传入完成，得到最终的结果。

以下是柯里化函数的使用示例：

```
function add(a, b, c) {
    return a + b + c;
}
const curriedAdd = curry(add, 5);
console.log(curriedAdd(3)); // 8
```

在这个示例中，我们使用 curry 函数对 add 函数进行柯里化，然后传入初始参数 5，得到一个新的函数 curriedAdd。接着我们对 curriedAdd 进行分步调用，先传入 3，得到结果 8。

#### Redux 如何实现多个组件之间的通信？多个组件使用相同状态如何进行管理？

Redux 可以用于管理 React 应用中多个组件共享的状态，因此可以通过 Redux 实现多个组件之间的通信，具体实现方法如下：

1. 在 Redux 中创建一个 Store，用于存储应用的状态数据。Store 是一个 JavaScript 对象，内部维护了应用的状态数据和 Reducer 函数，可以通过 getState()方法获取状态数据，通过 dispatch(action) 方法分发事件，触发 Reducer 函数调用，通过 subscribe(listener) 方法发布，通知组件重新渲染。
2. 在组件中使用 connect() 函数将组件连接到 Redux 的 Store，获取应用的状态数据和分发事件的方法，实现与 Redux 的通信。connect() 函数接受两个参数，一个是 mapStateToProps 函数，用于将 Store 中的状态数据映射到组件的 props 中，另一个是 mapDispatchToProps 函数，用于将分发事件的方法映射到组件的 props 中。
3. 在组件中使用 Provider 组件将整个应用包裹起来，使得所有的组件都可以连接到 Redux 的 Store，实现组件之间的通信。

如果多个组件使用相同的状态数据，可以将这些状态数据定义为全局状态，在 Redux 的 Store 中进行管理。这样所有的组件都可以通过 connect() 函数连接到 Store，获取相同的状态数据，实现状态的共享管理。

下面是一个示例代码，演示了如何使用 Redux 实现组件之间的通信：

```
// 定义 action 类型和 action 创建函数
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(text) {
  return { type: ADD_TODO, text };
}

function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

// 定义 Reducer 函数
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

// 创建 Redux 的 Store
import { createStore } from 'redux';
const store = createStore(todos);

// 在组件中使用 connect() 函数连接到 Redux 的 Store
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text));
    },
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    }
  };
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);

// 在应用中使用 Provider 组件包裹所有的组件
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
```

在上述代码中，首先定义了两个 action 类型和对应的 action 创建函数，用于描述要执行的行为。

#### Redux 中异步的请求怎么处理？

在 Redux 中异步的请求可以通过使用中间件来处理。常用的中间件包括 redux-thunk 或 redux-saga。以下是使用 redux-thunk 处理异步 action 的步骤：

1. 安装 redux-thunk：npm i redux-thunk
2. 在 /store/index.js 中引入并返回一个增强版的 store，重新定义仓库：

```
import thunk from "redux-thunk"
let createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleWare(reducer,composeEnhancers())
```

3. 创建异步 action，这里以一个请求新闻数据为例：

```
export function fetchNews(id) {
  return function (dispatch) {
    return fetch(`/api/getNews`, {id})
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch({
          type: 'ADD_NEWS',
          data: json
        })
      )
  }
}
```

4. 在组件中使用异步 action：

```
import { connect } from 'react-redux'
import { fetchNews } from './actions'

class MyComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews(1))
  }

  render() {
    // ...
  }
}

export default connect()(MyComponent)
```

或者

```
import { connect } from 'react-redux'
import { fetchNews } from './actions'

class MyComponent extends React.Component {
  componentDidMount() {
    this.props.fetchNews(1).then(() => {
      console.log(this.props.news)
    })
  }

  render() {
    // ...
  }
}

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = {
  fetchNews
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

#### Redux 和 Vuex 有什么区别，它们的共同思想？

Redux 和 Vuex 是用于管理全局状态的 JavaScript 库。它们的共同思想是通过 Store 来管理全局状态。在这个 Store 中，状态是只读的，不能直接修改。它们也都遵循了单向数据流的思想。在这个单向数据流中，数据的变化只能通过派发一个 action 来触发，action 是一个纯对象，用于描述数据的变化。这个 action 会被发送到一个 reducer 或 mutation 函数中，用于更新 Store 中的状态。以下是 Redux 和 Vuex 的区别和共同点：

共同点：

- 都是通过 Store 来作为全局状态的存储；
- 不能直接修改 Store 中状态，只允许同步操作；

Redux 和 Vuex 的不同点：

- Vuex 只展示组件，全局根部植入直接访问 store，而 Redux 中展示组件通过容器组件连接 store。
- Vuex 改进了 Redux 中的 Action 和 Reducer 函数，以 mutations 变化函数取代 Reducer，无需 switch，只需在对应的 mutation 函数里改变 state 值即可。
- Vuex 由于 Vue 自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的 State 即可。
- 在 Redux 中，每一个组件都需要显示的用 connect 把需要的 props 和 dispatch 连接起来。而在 Vuex 中，组件中既可以 dispatch action 也可以 commit updates。
- 对于大型项目，当应用状态数据过于复杂，可以划分状态，这样便于管理数据流向。Redux 可以通过 combineReducers()结合各个组件的 reducer，各个组件可以单独管理自己的状态，最后合并为一个 reducer 用于生成一个 store；Vuex 这方面用 Module 这个概念划分 store，与 Redux 一样，可以多层嵌套子状态。
- 将状态数据绑定到视图：Redux 将状态映射到视图可以通过 React-redux 映射到 React 组件，当然也可以直接使用 Redux 自己提供的 store.subscribe()订阅 store 的改变，从而更新视图，因此 Redux 不仅仅可以用于 React，也可以用于其他框架如 Vue；而 Vuex 只能用于 Vue，它提供了 mapState、mapAction、mapMutations 等 API 将 store 映射到 Vuex 各个组件，这个参考了 React-redux 的 mapStateToProps。
- Redux 得益于中间件机制，可以利用 redux-thunk 等中间件实现异步可控的概念，而 Vuex 在之前的版本中的 state 可以直接修改，这将让 state 的改变不可预测，且状态管理不够坚固。
