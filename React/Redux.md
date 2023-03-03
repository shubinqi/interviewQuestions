<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:06:54
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 03:24:48
 * @Description: Redux 面试题（9题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\React\Redux.md
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

#### 柯里化函数两端的参数具体是什么？

#### Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理？

#### Redux 中异步的请求怎么处理？

#### Redux 和 Vuex 有什么区别，它们的共同思想？
