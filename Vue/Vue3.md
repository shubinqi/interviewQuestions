<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:04:46
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-28 18:34:07
 * @Description: Vue 3.X 面试题（18题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Vue\Vue3.md
-->

#### Vue 2.X 与 Vue 3.X 的区别？

Vue 2.x 和 Vue 3.x 是同一框架的不同版本，虽然在许多方面相似，但是也有很多不同点。下面列出一些主要的区别：

1. **性能优化**：Vue 3.x 在编译和运行时进行了大量的性能优化，例如使用 Proxy 替代 Object.defineProperty，提高响应式系统的性能，还引入了静态提升和基于事件的 DOM 操作优化。
1. **指令和组件名的变化**：Vue 3.x 中一些常用的指令和组件名称发生了变化，例如 v-if 和 v-for 之间可以互相嵌套，而 v-bind 和 v-on 指令被简化为 : 和 @。
1. **Composition API**：Vue 3.x 引入了 Composition API，它提供了更加灵活的组合式 API，可以更好地组织和重用代码，替代了 Vue 2.x 中的 Mixin 和 HOC（Higher Order Component）。
1. **Tree-shaking**：Vue 3.x 通过使用 ES Module 的方式导入模块，实现了更好的 Tree-shaking，可以更轻松地剔除未使用的代码，减小打包体积。
1. **支持 TypeScript**：Vue 3.x 完全支持 TypeScript，包括核心库和生态系统中的所有插件。
1. **其他细节变化**：例如 Vue 3.x 中取消了 filters，引入了 teleport、suspense、watchEffect 等新特性，以及对 IE11 的支持降级。

总的来说，Vue 3.x 引入了一些新特性和性能优化，使得它比 Vue 2.x 更加高效、灵活和易用。但是由于 API 和一些细节的变化，Vue 3.x 的学习成本可能会更高一些，而且一些第三方库和插件可能还不完全支持 Vue 3.x。因此在迁移项目时需要谨慎考虑。

#### Tree-shaking？

Tree-shaking 是一种代码优化技术，它通过静态分析代码，识别和移除不需要的代码，从而减小打包后的文件大小。

具体来说，Tree-shaking 是通过 ES6 的模块语法和静态分析的方式实现的。在 ES6 模块中，每个文件都可以看作是一个独立的模块，它们之间的依赖关系是静态确定的，因此编译器可以在编译时分析出哪些模块被使用了，哪些没被使用，进而去掉没被使用的代码。

在 webpack 中，Tree-shaking 是通过使用 ES6 模块语法和一些工具插件来实现的。在 webpack 配置中，通过设置 mode 为 production，webpack 会自动启用 Tree-shaking 功能。此外，还需要安装 babel 和 babel-plugin-transform-es2015-modules-commonjs 插件，以将 ES6 模块语法转换成 CommonJS 模块语法，从而使 webpack 能够正确识别模块的依赖关系。

总之，Tree-shaking 是一种非常有效的代码优化技术，可以显著减小打包后的文件大小，提高应用程序的性能和加载速度。

#### Vue 3 的 Proxy 和 Vue2 的 Object.defineProperty 比有什么优势?

在 Vue 3 中，使用 Proxy 代替了 Object.defineProperty() 来实现对响应式对象的监听。相比于 Vue 2，Vue 3 中的 Proxy 有以下优势：

1. **更好的性能**：Proxy 在监听对象时，会比 Object.defineProperty() 更快，因为 Proxy 是在 JavaScript 引擎层面实现的，而 Object.defineProperty() 是在运行时通过调用方法实现的。
1. **更好的语法**：使用 Proxy 可以让代码更简洁和直观，也更符合 JavaScript 的语法规范。
1. **更好的扩展性**：Proxy 可以监听更多类型的对象，包括 Map、Set 等，而 Object.defineProperty() 只能监听对象的属性。
1. **更好的错误提示**：使用 Proxy 可以更容易地发现错误，因为在使用 Proxy 时会抛出异常，而 Object.defineProperty() 不会。
1. **更好的 TypeScript 支持**：Proxy 更符合 TypeScript 的类型推导和类型约束，可以更方便地进行开发和维护。

总的来说，Vue 3 中使用 Proxy 相比于 Vue 2 中使用 Object.defineProperty()，具有更好的性能、语法、扩展性、错误提示和 TypeScript 支持等优势。

#### Vue 3 的 diff 算法 和 Vue2 的比有什么优势？

Vue 3 中的 diff 算法与 Vue 2 中有很大的区别，主要体现在两个方面：性能优化和精度优化。

1. 在性能优化方面，Vue 3 通过采用静态标记和源码分析，将 diff 的精度和效率都进行了优化。Vue 3 中的编译器会在编译阶段对模板进行静态分析，标记出哪些部分是静态的，哪些是动态的。这样在渲染时只需要对动态部分进行 diff，避免了不必要的计算。
1. 在精度优化方面，Vue 3 引入了递归式的 diff 算法，用于解决 Vue 2 中存在的一些问题，例如两个相邻的兄弟节点交换位置时会导致整个子树重新渲染等问题。递归式的 diff 算法可以在比较两个节点时，同时比较它们的子树，从而更准确地找到变化的节点。

总之，Vue 3 的 diff 算法相比于 Vue 2 更加高效和准确，能够提高应用的渲染性能。

#### Vue 3 的生命周期？

Vue 3 的生命周期是通过 createComponentInstance 函数创建组件实例时，在组件实例上定义生命周期函数的方式来实现的。

在 Vue 3 中，组件实例是通过 createComponentInstance 函数创建的，该函数会在创建组件实例时，为组件实例上定义生命周期函数。在组件实例创建后，Vue 3 会根据组件的生命周期阶段依次调用这些生命周期函数。

Vue 3 的生命周期函数包括：

1. **beforeCreate**: 在实例初始化之后，数据观测和事件配置之前被调用。
1. **created**: 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。但是 DOM 元素还未生成，可以在这个钩子函数里访问数据，进行数据请求，初始化等操作。$el 属性目前不可见。
1. **beforeMount**: 在挂载开始之前被调用：此时 template 模板已编译成 render 函数，但是 DOM 节点还没有被创建。
1. **mounted**: 在挂载完成之后被调用，此时组件的 DOM 节点已经生成，可以在这个钩子函数里访问 DOM 元素，进行 DOM 操作。
1. **beforeUpdate**: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前，可以在这个钩子函数里访问更新前的状态数据，进行一些更新前的操作。
1. **updated**: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用，可以在这个钩子函数里访问更新后的状态数据，进行一些更新后的操作。
1. **beforeUnmount**: 组件卸载之前被调用，可以在这个钩子函数里访问组件的状态数据，进行一些清理操作。
1. **unmounted**: 组件卸载之后被调用，组件对应的 DOM 元素已经被删除，可以在这个钩子函数里进行一些清理操作。
1. **errorCaptured**: 当捕获一个来自子孙组件的错误时被调用。

Vue 3 生命周期的调用顺序为：beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeUnmount -> unmounted。

需要注意的是，Vue 3 生命周期中没有了 beforeDestroy 和 destroyed，取而代之的是 beforeUnmount 和 unmounted。这是因为在 Vue 3 中，组件实例被销毁时并不会立即调用 unmounted，而是先执行 beforeUnmount 钩子函数，等到组件实例被完全卸载之后才会调用 unmounted 钩子函数。

#### 组合式 API 与 选项式 API 的区别？

在 Vue 3 中，除了传统的选项式 API 之外，还引入了新的组合式 API，二者的主要区别在于代码的组织方式和可复用性。

选项式 API 是 Vue 2 中的主要 API，使用方式是在 Vue 组件中定义一组选项对象（options object），例如 data、methods、computed、watch、created、mounted 等等。这些选项描述了组件的状态和行为，并且在 Vue 实例化和渲染组件时，Vue 将使用这些选项来生成组件的实例。选项式 API 通常适用于简单的组件，但随着组件的复杂性增加，选项会变得冗长且难以维护。

组合式 API 是 Vue 3 中引入的新 API，通过将逻辑分组为功能性逻辑组合（composition function）并将这些组合组合成可复用的逻辑块（composition block）来提高组件的可复用性和维护性。每个功能性逻辑组合使用一个或多个响应式引用或响应式方法来描述它的状态和行为。组合式 API 通常适用于更复杂的组件，可以更好地处理复杂业务逻辑和大量重复代码的情况。

相比之下，选项式 API 具有更好的可读性和简洁性，对于简单组件和快速原型验证而言，可能是更好的选择。组合式 API 则更适合处理较为复杂的业务逻辑和组件。在实际开发中，开发者可以根据实际情况选择使用不同的 API。

#### Composition API 与 React Hook 很像，区别是什么？

Composition API 和 React Hook 确实有一些相似之处，它们都提供了一种更灵活和易于组合的方式来处理组件中的状态和副作用。但是它们在实现方式和用法上有一些区别：

1. **实现方式**：React Hook 是在函数组件内部使用的特殊函数，而 Composition API 是一组函数式 API，可以在选项式 API 和组合式 API 中使用。
1. **使用方式**：React Hook 只能在函数组件的顶层使用，不能在循环、条件语句等内部使用；而 Composition API 可以在任何地方使用，不受限制。
1. **命名规范**：React Hook 的命名规范以 use 开头，如 useState、useEffect 等；而 Composition API 的命名规范以 use 开头或以 $ 开头，如 useSetup、useRefs、$computed 等。
1. **静态分析**：由于 React Hook 是 JavaScript 函数，因此必须在静态位置使用，并且不能将其传递给其他组件或函数。相比之下，Composition API 可以通过 Tree-shaking 进行静态分析，因此可以更好地进行代码优化。

总之，虽然 Composition API 和 React Hook 有一些相似之处，但它们是两种不同的实现方式，它们的设计目的和使用场景也有所不同。

#### 介绍一下 setup 函数？

setup 函数是 Vue 3 中新增的一个组件选项，用于设置组件的初始状态和行为。它接收两个参数：`props` 和 `context`。

1. **props**：是组件接收的属性的响应式代理，可以直接访问和修改。
2. **context**：是一个包含了当前组件的属性和方法的对象，包括：
   - **attrs**：一个对象，包含了父组件传递下来的非 prop 属性，但不包括 class 和 style。
   - **slots**：一个函数，用于渲染组件的插槽内容。
   - **emit**：一个函数，用于触发父组件的事件。

setup 函数可以返回一个对象，也可以是一个函数，由函数来返回一个对象。返回的对象中包含了组件的响应式数据和方法，可以在模板中直接使用。使用 ref 创建的变量，可以使用 `.` 访问属性，使用 reactive 创建的变量，需要使用 `.` 或者 `$` 访问属性。

相对于 Vue 2.x 中的 data、computed、methods 等选项，setup 函数更加灵活，组合式 API 的出现也让代码更加模块化和可重用。

#### &lt;script setup&gt; 是什么？

&lt;script setup&gt; 是 Vue 3 中新增的语法糖，用于简化组件的编写。通过 &lt;script setup&gt;，可以将组件的逻辑和模板结构紧密绑定，让代码更加简洁易懂。使用 &lt;script setup&gt;，可以将组件的逻辑部分和模板部分的代码都写在同一个区域中，让代码更加集中和可维护。

在 &lt;script setup&gt; 中，可以使用 Vue 3 的组合式 API 来编写组件的逻辑，而不需要使用以前的选项式 API。这样可以让代码更加简洁，同时也可以让组件的逻辑更加清晰和易于理解。同时，&lt;script setup&gt; 还可以自动地将模板中的变量和方法导入到组件的作用域中，使得代码更加简洁易懂。

#### watch 和 watchEffect 的区别？

watch 和 watchEffect 都是 Vue 3.x 中的响应式 API，用于观察数据变化并执行相应的副作用。它们的主要区别如下：

1. 使用方式不同：watch 通过传递要监听的数据和回调函数来实现，而 watchEffect 直接接收一个回调函数。
1. watchEffect 是一个立即执行的副作用，当其所依赖的响应式数据变化时会重新执行回调函数，而 watch 可以设置 immediate 选项来指定是否在初始渲染时立即执行回调函数。
1. watch 可以对多个数据进行监听，可以使用数组的形式，也可以使用对象的形式；而 watchEffect 只能对一个数据进行监听。
1. watch 可以手动停止监听，而 watchEffect 不支持手动停止。

总体来说，watch 更加灵活，可以监听多个数据变化，可以指定是否立即执行回调函数，还可以手动停止监听。而 watchEffect 则更加简单和易用，适合于只需要监听一个数据变化并执行相应副作用的情况。

#### ref 和 reactive 的区别？

ref 和 reactive 是 Vue 3 中用于创建响应式数据的 API，它们的主要区别在于它们能够处理的数据类型不同。

ref 主要用于将基本类型数据（如数字、布尔值等）转换为响应式数据，返回一个包含属性 value 的响应式对象，当该对象被赋予新值时，视图会自动更新。示例代码：

```
import { ref } from 'vue'

const count = ref(0)  // count 是响应式对象
console.log(count.value) // 0

count.value++  // 视图自动更新
```

reactive 则可以将对象转换为响应式数据，可以对对象的任何属性进行监听。返回的是一个响应式对象，当该对象的属性值被修改时，视图会自动更新。示例代码：

```
import { reactive } from 'vue'

const obj = reactive({ foo: 'bar' })  // obj 是响应式对象
console.log(obj.foo) // 'bar'

obj.foo = 'baz'  // 视图自动更新
```

因此，可以简单理解为 ref 用于处理基本类型数据，而 reactive 用于处理对象类型数据。同时，ref 可以通过 .value 获取或设置它的值，而 reactive 直接访问属性即可。

#### Vue3 中 reactive 的实现原理？

Vue 中的 reactive 是实现响应式数据的核心 API，它的实现原理是基于 ES6 中的 Proxy 对象。

当我们使用 reactive 函数将一个对象转化为响应式对象时，reactive 函数会对这个对象进行拦截，返回一个代理对象。这个代理对象会监听这个对象的变化，当这个对象的属性发生变化时，会触发响应式更新，即更新视图。

具体来说，reactive 函数会使用 Proxy 对象对传入的对象进行代理，设置一个 get 拦截器和一个 set 拦截器。get 拦截器用来监听对象的读取操作，当读取对象时，会触发依赖收集。set 拦截器用来监听对象的修改操作，当修改对象时，会触发响应式更新。

以下是一个简单的 reactive 函数的实现示例：

```
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 收集依赖
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      // 触发更新
      trigger(target, key, value, oldValue)
      return result
    }
  })
}
```

其中 track 和 trigger 函数是依赖收集和触发更新的核心函数。track 函数用来收集当前属性的依赖，trigger 函数用来触发属性更新，通知所有依赖此属性的组件进行更新。

#### reactive、 shallowReactive 函数？

reactive 和 shallowReactive 是 Vue 3 提供的两个函数，都是用于创建响应式对象的。

1. **reactive 函数** 会递归地将一个对象转化成响应式对象，使其属性变为响应式的。
2. **shallowReactive 函数** 只会对对象的第一层属性进行响应式转换，不会递归地转换其子属性。

reactive 函数会递归地将一个对象转化成响应式对象，使其属性变为响应式的。具体来说，reactive 函数会对对象的每个属性调用 reactive 函数，这样就能将对象的每个属性都变成响应式的。例如：

```
import { reactive } from 'vue'

const obj = {
  foo: 1,
  bar: {
    baz: 2
  }
}

const reactiveObj = reactive(obj)

reactiveObj.foo = 2
console.log(obj.foo) // 2

reactiveObj.bar.baz = 3
console.log(obj.bar.baz) // 3
```

可以看到，当修改 reactiveObj 的属性时，obj 对象的属性也随之改变，因为它们是同一个响应式对象。

而 shallowReactive 函数只会对对象的第一层属性进行响应式转换，不会递归地转换其子属性。例如：

```
import { shallowReactive } from 'vue'

const obj = {
  foo: 1,
  bar: {
    baz: 2
  }
}

const reactiveObj = shallowReactive(obj)

reactiveObj.foo = 2
console.log(obj.foo) // 2

reactiveObj.bar.baz = 3
console.log(obj.bar.baz) // 2
```

可以看到，当修改 reactiveObj 的第一层属性 foo 时，obj 的 foo 属性也随之改变。但是当修改 reactiveObj 的第二层属性 bar.baz 时，obj 对象不会随之改变，因为 bar 对象并没有转换成响应式对象。

#### ref、 shallowRef 、isRef、toRefs 函数？

在 Vue 3 中，ref 和 shallowRef 是创建响应式数据的函数，isRef 用于判断一个对象是否是 ref 对象，toRefs 用于将一个响应式对象转换成普通对象，使其每个属性都成为一个 ref 对象。

1. **ref**：接受一个参数作为响应式对象的初始值，返回一个包含响应式对象的 ref 对象。响应式对象可以是基本类型、对象或数组。
2. **shallowRef**：与 ref 类似，但是只会对响应式对象的第一层属性进行响应式处理。当响应式对象包含多层嵌套时，使用 shallowRef 可以提高性能。
3. **isRef**：用于判断一个对象是否是 ref 对象。返回布尔值。
4. **toRefs**：将一个响应式对象转换成普通对象，使其每个属性都成为一个 ref 对象。该函数返回一个新对象，新对象的每个属性都是 ref 对象。

**ref**：接受一个参数作为响应式对象的初始值，返回一个包含响应式对象的 ref 对象。响应式对象可以是基本类型、对象或数组。当通过 ref 对象修改响应式对象的值时，组件会更新视图。

例如：

```
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

**shallowRef**：与 ref 类似，但是只会对响应式对象的第一层属性进行响应式处理。当响应式对象包含多层嵌套时，使用 shallowRef 可以提高性能。
例如：

```
import { shallowRef } from 'vue'

const user = shallowRef({
  name: 'Alice',
  age: 18,
  hobbies: ['reading', 'music']
})
console.log(user.value) // { name: 'Alice', age: 18, hobbies: ['reading', 'music'] }
user.value.name = 'Bob'
console.log(user.value) // { name: 'Bob', age: 18, hobbies: ['reading', 'music'] }
```

**isRef**：用于判断一个对象是否是 ref 对象。返回布尔值。

例如：

```
import { ref, isRef } from 'vue'

const count = ref(0)
console.log(isRef(count)) // true

const obj = { name: 'Alice' }
console.log(isRef(obj)) // false
```

**toRefs**：将一个响应式对象转换成普通对象，使其每个属性都成为一个 ref 对象。该函数返回一个新对象，新对象的每个属性都是 ref 对象。这个新对象可以让我们在组件中访问这些属性，使得这些属性可以进行响应式的绑定。

例如：

```
import { reactive, toRefs } from 'vue'

const user = reactive({
  name: 'Alice',
  age: 18
})
const userRef = toRefs(user)
console.log(userRef) // { name: { value: 'Alice' }, age: { value: 18 } }
```

使用 toRefs 函数后，我们在模板中访问对象的属性时需要加上 .value，例如：{{ userRef.name.value }}。

#### readonly、isReadonly、shallowReadonly 函数？

readonly、isReadonly 和 shallowReadonly 是 Vue 3 中提供的响应式 API 之一，用于创建只读的响应式对象。

1. **readonly 函数**可以将对象转换为一个只读的响应式代理对象，防止对其进行更改，但仍然允许对其内部属性进行更改。
1. **isReadonly 函数**可以检查给定对象是否为只读的响应式代理对象。
1. **shallowReadonly 函数**与 readonly 类似，但是只处理对象自身的响应式属性，而不是递归处理其嵌套属性。

这些函数的使用示例：

```
import { readonly, isReadonly, shallowReadonly } from 'vue';

// 创建响应式对象
const original = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming']
};

// 创建只读的响应式代理对象
const readonlyObj = readonly(original);

// 检查对象是否为只读的响应式代理对象
console.log(isReadonly(readonlyObj)); // true

// 创建浅层只读的响应式代理对象
const shallowReadonlyObj = shallowReadonly(original);

// 修改只读的响应式代理对象的属性
readonlyObj.age = 31; // 会产生警告，不会改变对象

// 修改浅层只读的响应式代理对象的属性
shallowReadonlyObj.age = 31; // 会产生警告，但是可以改变对象

// 修改只读的响应式代理对象的嵌套属性
readonlyObj.hobbies.push('running'); // 会产生警告，会改变对象

// 修改浅层只读的响应式代理对象的嵌套属性
shallowReadonlyObj.hobbies.push('running'); // 不会产生警告，会改变对象
```

需要注意的是，这些函数仅仅是为了创建只读的响应式代理对象，它们并不能保证完全的不可更改性。因此，在编写代码时，应该根据具体的需求选择不同的函数来确保响应式对象的正确性和可维护性。

#### Vue 3 组件通信有哪些方式？

Vue 3 中组件通信的方式和 Vue 2 有一些区别，主要有以下几种方式：

1. **Props 和 Emit**：和 Vue 2 中相同，通过 Props 将父组件中的数据传递给子组件，通过 Emit 在子组件中触发自定义事件通知父组件。不同的是，在 Vue 3 中可以使用 v-model 的新写法 v-model:modelName，直接绑定子组件中的 Prop 和 Emit。
1. **Provide 和 Inject**：提供了一种祖先组件向所有子孙组件传递数据的方式，它们的用法类似于 React 中的 Context。使用 Provide 向下传递数据，使用 Inject 在子孙组件中接收数据。
1. **Ref 和 Teleport**：Ref 可以将子组件的实例或 DOM 元素传递给父组件进行操作，可以用于访问子组件的方法或属性。Teleport 则是一个新的组件，可以将子组件渲染到父组件 DOM 树之外的地方，如弹窗、模态框等。
1. **Reactive 和 Computed**：Vue 3 中引入了 Composition API，可以使用 Reactive 和 Computed 这两个 API 在组件之间进行响应式数据共享，相比于 Vue 2 中的 Mixin 和 Provide/Inject 更加灵活和简洁。

总之，在 Vue 3 中，通过 Composition API 的方式，组件通信的方式更加灵活多样，可以根据具体场景选择不同的方式。

#### Vue3 的 computed、watch 函数？

在 Vue 3 中，computed 和 watch 函数依然存在，但与 Vue 2 中有一些不同之处。

computed 函数：

1. computed 函数可以是一个简单的返回值的箭头函数，也可以是一个包含 get 和 set 函数的对象。
1. computed 函数的返回值不再是一个响应式对象，而是一个 ref 对象，需要通过 .value 访问其值。
1. 可以使用 shallowRef 创建浅响应式的 computed。

示例：

```
import { computed, ref, shallowRef } from 'vue'

// 简单的 computed 函数
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// 包含 get 和 set 函数的 computed 对象
const firstName = ref('John')
const lastName = ref('Doe')
const fullName2 = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(val) {
    const parts = val.split(' ')
    firstName.value = parts[0]
    lastName.value = parts[1]
  }
})

// 创建浅响应式的 computed
const shallow = shallowRef({ count: 0 })
const doubleCount = computed(() => shallow.value.count * 2)
```

watch 函数：

1. watch 函数可以监听一个响应式对象的变化，也可以监听一个函数的返回值。
1. watch 函数返回一个 stop 函数，用于停止监听。
1. watch 函数支持选项参数，如 immediate、deep、flush 等。

示例：

```
import { watch, ref } from 'vue'

// 监听响应式对象的变化
const count = ref(0)
watch(count, (newVal, oldVal) => {
  console.log(`count changed from ${oldVal} to ${newVal}`)
})

// 监听函数的返回值
const fullName = ref('')
watch(() => `${firstName.value} ${lastName.value}`, (newVal, oldVal) => {
  console.log(`fullName changed from ${oldVal} to ${newVal}`)
})

// 选项参数
watch(count, (newVal, oldVal) => {
  console.log(`count changed from ${oldVal} to ${newVal}`)
}, { immediate: true })
```

#### Vue3 中 v-if 和 v-for 的优先级哪个高？

在 Vue 3 中，v-for 指令的优先级比 v-if 高。这意味着如果同时使用了 v-if 和 v-for，那么 v-for 将会先被执行，然后才会执行 v-if。

在一些情况下，使用 v-for 和 v-if 可能会导致性能问题，因为它们会增加渲染的复杂度。如果需要使用 v-if 进行条件渲染，可以考虑使用计算属性或者 v-show 来代替 v-if。计算属性可以根据需要进行缓存，并在数据更改时自动更新，而 v-show 只是简单地在元素上添加或移除样式。

例如，如果需要仅在某些条件下渲染列表中的某些项，可以使用一个计算属性来过滤列表，然后在模板中使用 v-for 渲染过滤后的列表。

```
<template>
  <ul>
    <li v-for="item in filteredItems" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1', condition: true },
        { id: 2, text: 'Item 2', condition: false },
        { id: 3, text: 'Item 3', condition: true }
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.condition)
    }
  }
}
</script>
```

这样可以避免在模板中使用 v-if 和 v-for 导致的性能问题。

#### Vue 3 没有了过滤器，我们可以用什么实现？

在 Vue 3 中，过滤器被废弃了，可以用下面的方式来实现原来过滤器的功能：

在组件内部使用方法来实现过滤功能：

```
<template>
  <div>{{ message | filterMethod }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    filterMethod(value) {
      return value.toUpperCase();
    }
  }
};
</script>
```

使用计算属性来实现过滤功能：

```
<template>
  <div>{{ filteredMessage }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    };
  },
  computed: {
    filteredMessage() {
      return this.message.toUpperCase();
    }
  }
};
</script>
```

这两种方式都能够实现原来过滤器的功能，但是使用计算属性的方式更加清晰和易于理解。
