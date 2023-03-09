<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:04:28
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-09 14:39:20
 * @Description: Vue 2.X面试题（65题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端框架\Vue\Vue2.md
-->

Vue 面试题剖析，建议查看：https://www.bilibili.com/video/BV1YM411w7Zc

### 一、Vue 基础

#### Vue 是什么？

Vue 是用于构建用户界面的渐进式 JavaScript 框架（Vue 并没有完全遵循 MVVM 模型，）。

渐进式 JavaScript 框架是一种允许开发人员按需使用其功能的框架。这意味着，与传统的 JavaScript 框架不同，它们不要求在项目中使用所有功能，而是可以根据需要逐步增加。

渐进式 JavaScript 框架的目标是提供更灵活的开发方式，同时保持框架的性能和可维护性。这种框架通常采用模块化的设计，允许开发人员在需要时选择性地导入所需的模块。这种方式可以降低项目的复杂性，同时还可以减小项目的体积和加载时间。

Vue 是一种渐进式 JavaScript 框架的典型例子。它提供了一组核心特性，如数据绑定、组件化和路由等，但也允许开发人员按需使用其他特性，如状态管理和服务器端渲染等。这种方式使得 Vue 可以适用于不同规模和复杂度的应用程序，并且可以灵活地满足开发人员的需求。

#### 什么是 SPA 单页面应用？

SPA（Single Page Application）即单页面应用，是一种 Web 应用程序的架构方式，它通过 Ajax 或 WebSockets 等技术，在一个单页面中动态加载内容并更新页面，使得 Web 应用具有更加流畅的用户体验。

与传统的多页面应用不同，SPA 仅有一个 HTML 文件，通过路由机制实现在一个单页面中展示多个内容。当用户访问不同的路由时，SPA 只需要动态的替换页面中的部分内容，而不需要重新加载整个页面。

SPA 应用有以下几个特点：

1. 只有一个 HTML 文件；
1. 路由机制实现页面间的切换；
1. 页面间的数据传递使用 Ajax 等技术；
1. 前后端通过 API 进行数据交互。

由于 SPA 不需要每次切换页面都重新加载整个页面，所以在响应速度、用户体验、数据传递等方面有很大的优势。但是 SPA 也存在一些缺点，例如不利于 SEO，前端代码过于庞大复杂，对浏览器的兼容性要求较高等。

#### Vue 的常用指令及作用？

1. **v-on** 给标签绑定函数，可以缩写为@，例如绑定一个点击函数 函数必须写在 methods 里面
1. **v-bind** 动态绑定 作用： 及时对页面的数据进行更改, 可以简写成：冒号
1. **v-slot** 缩写为#, 组件插槽
1. **v-for** 根据数组的个数, 循环数组元素的同时还生成所在的标签
1. **v-show** 显示内容
1. **v-if** 显示与隐藏
1. **v-else** 必须和 v-if 连用 不能单独使用 否则报错
1. **v-else-if** 必须和 v-else 连用 不能单独使用 否则报错
1. **v-text** 解析文本
1. **v-html** 解析 html 标签

#### computed 和 watch 的区别？

computed 和 watch 都是 Vue 中用于观察数据变化的方法，但它们有以下区别：

1. 计算属性 computed 是计算一个新的属性值，并将结果缓存起来，只有当其依赖的响应式数据发生变化时，才会重新计算，因此 computed 是有缓存的，只要其依赖的数据没有发生变化，就不会重新计算；而 watch 则是监听一个特定的值，当该值变化时，执行相应的回调函数。
1. computed 是用来处理多个相关联的数据属性的，通过计算返回一个新值，而 watch 则用于观察一个特定的数据属性，只要该属性变化就会执行回调函数。
1. computed 是在模板渲染时被调用的，因此只有当 computed 的值被用到的时候才会执行相关的计算，而 watch 是一个响应式的监听器，当监听的数据发生变化时就会执行回调函数。

因此，它们的使用场景也不同。computed 适合用于需要依赖其他属性计算的属性，例如将字符串格式化为日期、将货币格式化为金额等，而 watch 则适合用于监控某个属性的变化并进行相应的操作，例如当一个表单输入框的值改变时，需要实时更新其他表单元素或者触发一个异步请求等。

总之，computed 和 watch 都是 Vue 中非常有用的数据观察工具，可以根据具体场景灵活选择使用。

#### computed 和 methods 的区别？

在 Vue 中，computed 和 methods 都可以用来定义计算属性，但是它们之间有以下几个区别：

1. **缓存机制不同**：computed 的计算结果会被缓存，只有在依赖的数据发生变化时才会重新计算，而 methods 每次调用都会重新计算。
1. **用法不同**：computed 定义的是属性，需要用 this 访问；而 methods 定义的是方法，需要用 this 调用。
1. **作用不同**：computed 适用于需要依赖其他数据计算出来的属性，比如过滤、排序等；而 methods 适用于需要执行一些逻辑操作的方法，比如点击事件、表单提交等。
1. **对响应式侦测的影响不同**：当依赖的数据发生变化时，computed 会触发更新，methods 不会影响到响应式侦测。

因此，我们需要根据具体的业务场景来选择合适的方式来定义计算属性。如果需要缓存计算结果且不需要实时更新，可以使用 computed；如果需要实时计算，可以使用 methods。

#### 常见的事件修饰符及其作用？JS 怎么阻止事件冒泡？

常见的事件修饰符及其作用如下：

1. **.stop**：阻止事件冒泡
1. **.prevent**：阻止事件默认行为
1. **.capture**：事件捕获阶段触发处理函数
1. **.self**：只有事件在该元素本身触发时才触发处理函数
1. **.once**：只触发一次处理函数
1. **.passive**：告知浏览器该事件处理函数不会调用 preventDefault() 方法，可以优化滚动等操作的性能

JS 阻止事件冒泡的方法是通过调用 event.stopPropagation() 方法，可以阻止事件向上冒泡到父级元素。例如，在一个点击事件处理函数中，可以通过以下代码来阻止事件冒泡：

```
function handleClick(event) {
  // 阻止事件冒泡
  event.stopPropagation();
  // 其他操作
}
```

#### .sync 的修饰符的作用是什么？实现原理？

在 Vue.js 中，.sync 是一个语法糖，用于简化父组件和子组件之间双向数据绑定的写法。它的作用是在子组件中修改父组件传递过来的 props 属性时，同时也会触发一个自定义事件（事件名称为 update:propName）来通知父组件更新相应的属性值。

例如，在父组件中使用子组件时，可以这样写：

```
<template>
  <ChildComponent :foo.sync="bar" />
</template>
```

在子组件中使用 props 来接收父组件传递的数据：

```
<template>
  <div>
    <input type="text" :value="foo" @input="updateFoo" />
  </div>
</template>

<script>
export default {
  props: ['foo'],
  methods: {
    updateFoo(e) {
      this.$emit('update:foo', e.target.value);
    }
  }
}
</script>
```

这样，在子组件中修改 foo 属性时，会同时触发一个名为 update:foo 的自定义事件，父组件可以监听该事件来更新 bar 属性的值。

.sync 的实现原理是通过自定义事件和属性的结合来实现双向数据绑定的。当子组件触发自定义事件时，父组件会通过 v-on 指令来监听该事件，并根据事件名称更新相应的属性值。由于事件名称与属性名称是相关联的，所以可以方便地进行双向数据绑定的实现。

#### v-if 和 v-show 的区别？v-if 和 v-for 优先级哪个高？为什么不能连用？

v-if 和 v-show 是 Vue 中两个常用的指令，它们都可以控制元素的显示和隐藏，但是它们的实现机制不同，因此使用场景也不同。

v-if 指令的作用是根据表达式的真假值来决定是否渲染元素。当表达式为真时，元素被渲染；当表达式为假时，元素不被渲染。在切换条件时，v-if 每次都会重新渲染整个元素。

v-show 指令的作用也是根据表达式的真假值来控制元素的显示和隐藏，但是它并不会重新渲染整个元素，而是通过修改元素的 display 样式来实现显示和隐藏。因此，v-show 比 v-if 的切换开销要小，适用于需要频繁切换显示和隐藏的元素。

在 Vue 中，v-for 指令的优先级高于 v-if 指令，因为 v-for 的优先级比较高，所以 v-if 和 v-for 不能连用。如果需要根据条件筛选 v-for 的结果，可以在计算属性中对数据进行过滤，或者使用 v-for 模板中的 v-if 条件渲染。

#### 插槽 是什么？有什么作用？

在 Vue 中，插槽（slot）是一种将内容分发到组件特定位置的方式。它允许我们在组件内部定义一些可以被外部调用者覆盖的区域，使得组件更加灵活。

插槽有两种类型：具名插槽和默认插槽。具名插槽允许我们在组件中定义多个插槽，可以在父组件中指定要插入的具名插槽，从而控制插槽的渲染位置。默认插槽则是一个未命名的插槽，当父组件没有指定具名插槽时，会将内容渲染到默认插槽中。

使用插槽，我们可以将父组件的模板内容传递到子组件中，并在子组件内部使用插槽来渲染这些内容。这样可以让我们在开发可复用组件时，更加方便地定制组件的外部样式和行为，提高组件的复用性和灵活性。

#### Vue 中 key 的作用？

vue 中 key 值的作用可以分为两种情况来考虑：

- 第一种情况是 **v-if** 中使用 key。由于 Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。因此当使用 v-if 来实现元素切换的时候，如果切换前后含有相同类型的元素，那么这个元素就会被复用。如果是相同的 input 元素，那么切换前后用户的输入不会被清除掉，这样是不符合需求的。因此可以通过使用 key 来唯一的标识一个元素，这个情况下，使用 key 的元素不会被复用。这个时候 key 的作用是用来标识一个独立的元素。
- 第二种情况是 **v-for** 中使用 key。用 v-for 更新已渲染过的元素列表时，它默认使用“就地复用”的策略。如果数据项的顺序发生了改变，Vue 不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处的每个元素。因此通过为每个列表项提供一个 key 值，来以便 Vue 跟踪元素的身份，从而高效的实现复用。这个时候 key 的作用是为了高效的更新渲染虚拟 DOM。

key 是为 Vue 中 vnode 的唯一标记，通过这个 key，diff 操作可以更准确、更快速

1. **更准确**：因为带 key 就不是就地复用了，在 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况。所以会更加准确。
1. **更快速**：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快

#### key 值的作用是什么？除了 v-for 还有哪里可以使用？

key 是用来帮助 Vue 进行高效的 DOM 重渲染的，它的作用是在进行列表渲染时，给每个子节点设置一个唯一的标识符，以便在数据变化时能够尽可能地复用已有的节点，而不是全部重新渲染。使用 key 可以有效提升 Vue 应用的性能。

除了在 v-for 中使用 key 以外，还可以在 Vue 的其他一些指令和组件中使用 key，如：

- 在 &lt;transition&gt; 组件中，用来标识过渡元素的状态，以便正确地触发过渡效果。
- 在动态组件中，用来标识不同的组件，以便在切换组件时能够正确地触发组件的生命周期钩子。
- 在一些需要手动控制组件显示隐藏的场景中，用来标识不同的组件状态，以便正确地控制组件的显示和隐藏。
- v-if 切换表单项时，给 input 添加 key 值可以在切换回来后保持原来填写的数据。

总之，key 是一个非常重要的属性，在 Vue 应用中的应用非常广泛，可以帮助我们提升应用的性能，同时也可以帮助我们更好地掌控组件的状态和行为。

#### data 为什么是函数返回而不是直接一个对象？

在 Vue 组件中， data 选项通常被用来存储组件的初始状态，这些状态会被 Vue 响应式系统所跟踪，一旦状态发生变化，组件的视图会自动更新以反映这些变化。在 Vue 2.x 版本中， data 属性的值必须是一个返回对象的函数，而不能直接是一个对象，而在 Vue 3.x 版本中则取消了这个限制，可以直接使用对象了。

这个函数返回的对象是组件的状态对象，每个组件实例都需要拥有自己独立的状态，所以需要返回一个新的对象而不是一个单例对象，否则会导致组件之间共享状态，这种情况下，当一个组件的状态发生改变时，所有共享同一状态的组件都会更新，这可能导致一些无法预期的行为。

因此，将 data 定义为函数可以确保每个组件实例都有自己的状态对象，避免状态共享的问题。

#### 给 data 中的对象添加一个属性是否会更新视图？如何解决？$set 是什么？

给 data 中的对象添加一个属性并不会自动触发视图更新，因为在 Vue.js 中，只有当一个属性在模板中被使用，它才会被加入到 Vue 实例的响应式系统中。在组件实例创建时，data 函数会被执行，返回一个对象作为组件实例的初始数据。这个过程中，Vue.js 会使用 Object.defineProperty() 方法将每个属性转换成 getter/setter，这样当属性值被修改时，Vue.js 就能监听到并通知组件重新渲染。

如果要给已有的属性添加一个新的响应式属性，可以使用 Vue 提供的 $set 方法或者 Vue.set 方法。这两个方法的用法相同，都是接收三个参数：目标对象、属性名、属性值。例如：

```
this.$set(this.obj, 'newProperty', 123)
```

这样添加的 newProperty 就会被加入到 obj 对象的响应式系统中，从而触发视图更新。

#### v-model 是什么？实现原理？怎么用 v-model 实现父子组件通信？

v-model 是 Vue 中的一个指令，可以用于实现表单元素和数据的双向绑定。它的实现原理主要是通过对输入事件和数据变更事件的监听，来实现数据的双向绑定。

v-model 的使用方式主要分为两种情况：

1. 用于表单元素的双向绑定，如 &lt;input&gt;、&lt;textarea&gt;、&lt;select&gt; 等。
   在这种情况下，v-model 实际上是将表单元素的 value 属性与 Vue 实例中的数据属性进行了双向绑定。当表单元素的 value 属性发生变化时，会触发一个 input 事件，Vue 会监听该事件并更新数据属性的值；反之，当数据属性的值发生变化时，也会将新的值赋给表单元素的 value 属性，从而更新视图。
   例如，以下代码演示了如何使用 v-model 来实现一个简单的文本框双向绑定：

```
<template>
  <div>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>
```

2. 用于自定义组件的双向绑定。
   在这种情况下，v-model 实际上是通过对自定义组件的 value 属性和 input 事件进行监听，来实现自定义组件和父组件之间的双向绑定。具体实现方式可以通过在组件中定义 model 选项来完成。
   例如，以下代码演示了如何使用 v-model 来实现一个自定义组件的双向绑定：

```
<template>
  <div>
    <my-input v-model="message"></my-input>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'

export default {
  components: {
    MyInput
  },
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>
```

子组件

```
<!-- MyInput.vue -->
<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    value: String
  }
}
</script>
```

对于父子组件通信，可以通过在子组件中使用 v-model，并在父组件中监听 update:modelValue 事件来实现。具体来说，子组件需要接收一个 modelValue 属性，并在 input 事件中触发一个 update:modelValue 事件来更新该属性的值。父组件中则需要监听 update:modelValue 事件，并更新相应的数据属性来完成父子组件的数据通信。

#### 讲一下 Vue2 的自定义指令？怎么实现一个自定义指令？

Vue2 的自定义指令可以用来扩展 Vue 的模板语法，让我们可以自定义指令来操作 DOM、绑定事件、监听数据等等。自定义指令可以全局注册或者局部注册，全局注册的指令在任意组件中都可以使用，而局部注册的指令只能在注册的组件内使用。

下面是一个简单的自定义指令例子，用于在元素上添加指定颜色的背景：

```
// 注册一个全局的自定义指令
Vue.directive('bg-color', {
  bind: function (el, binding) {
    el.style.backgroundColor = binding.value;
  }
})
```

在上面的代码中，我们通过 Vue.directive 全局注册了一个名为 bg-color 的自定义指令，该指令会在绑定的元素上添加指定的背景颜色。自定义指令包含了一些钩子函数，其中 bind 钩子函数会在指令第一次绑定到元素上时调用，可以在这个函数中操作 DOM。

自定义指令的用法如下：

```
<template>
  <div v-bg-color="'red'"></div>
</template>
```

在上面的代码中，我们在元素上使用 v-bg-color 指令来绑定一个红色的背景颜色。

除了 bind 钩子函数，自定义指令还有其他一些钩子函数，如 inserted、update、componentUpdated 和 unbind 等。这些钩子函数可以用来监听指令的生命周期，例如 inserted 钩子函数会在指令所在元素插入到父节点后调用，可以在这个函数中添加一些对 DOM 的操作。

自定义指令的优点是能够封装一些常用的 DOM 操作，让我们的代码更加简洁和易于维护。但是需要注意的是，自定义指令可能会降低代码的可读性和可维护性，需要根据具体情况权衡利弊来使用。

#### $nextTick 是什么？实现原理？

$nextTick 是 Vue.js 中的一个方法，用于在下次 DOM 更新循环结束之后执行延迟回调。可以用它来确保在修改数据之后，对于 DOM 的操作在修改后才进行。

$nextTick 的实现原理：

在 Vue.js 中，每当触发数据变化时，会进行一次异步更新，在同一事件循环中，Vue.js 会将所有数据变化触发的回调函数存储到一个队列中。当所有的异步更新完成之后，Vue.js 会在队列中的所有回调函数执行前，先执行 $nextTick 注册的回调函数。

具体实现原理是：在 Vue.js 中，每个组件都有一个 Watcher 实例对象，用来监视组件中的数据变化，触发重新渲染。在调用 $nextTick 方法时，会将传入的回调函数作为一个用户 Watcher 放入当前组件的 Watcher 队列中，等到组件的数据更新完成之后，再统一执行 Watcher 队列中所有的回调函数，保证了在 DOM 更新后回调函数才会被执行。

使用 $nextTick 的场景：在改变数据后，需要等待 Vue.js 更新 DOM 后，再执行某些操作，比如获取某个 DOM 元素的尺寸、位置等。

示例代码：

```
<template>
  <div>
    <div ref="box">{{ message }}</div>
    <button @click="changeMessage">改变 message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue.js!'
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Hello, World!';

      this.$nextTick(() => {
        console.log(this.$refs.box.offsetWidth);
      });
    }
  }
};
</script>
```

上述代码中，当点击按钮改变 message 值时，会调用 $nextTick 方法，并在回调函数中获取 box 元素的宽度。由于 $nextTick 的存在，确保了获取到的宽度值为 DOM 更新后的最新值。

#### 对 SSR 的理解？

SSR（Server-Side Rendering，服务器端渲染）是指在服务器端把动态生成的 HTML 直接输出到浏览器端，与传统的单页面应用（SPA）通过 AJAX 获取数据并且通过 JavaScript 动态渲染不同。SSR 的实现一般是在服务器端使用一些模板引擎或框架，如 Vue.js 的 Nuxt.js、React 的 Next.js 等，将数据获取和页面渲染都放在服务器端完成，然后将渲染好的 HTML 直接返回给客户端浏览器，最终呈现给用户的页面就已经具备了完整的结构和内容。

SSR 的优势：

- 更好的 SEO
- 首屏加载速度更快

SSR 的缺点：

- 开发条件会受到限制，服务器端渲染只支持 beforeCreate 和 created 两个钩子；
- 当需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于 Node.js 的运行环境；
- 更高的服务端负载。

#### 过滤器的作用？如何实现一个过滤器？

过滤器（Filter）是 Vue.js 中一个非常有用的功能，它可以用来对数据进行一些特定格式的处理。通常我们使用过滤器来格式化数据的输出，比如将时间戳格式化为可读性更好的时间格式、将字符串按照一定规则转换为其他形式等等。

Vue.js 的过滤器可以全局定义，也可以在组件内部定义，它的核心原理是函数式编程。一个过滤器就是一个全局可用的函数，它接收一个输入参数并返回处理后的结果。我们可以在模板中使用管道符(|)来调用过滤器，如下所示：

```
{{ message | capitalize }}
```

上面的代码中，message 是一个变量，capitalize 是一个过滤器，用于将变量的值转换为大写。

在 Vue.js 中定义过滤器非常简单，只需要在 Vue 实例或组件中的 filters 选项中添加一个函数即可，例如：

```
Vue.filter('capitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
```

上面的代码中，我们定义了一个名为 capitalize 的全局过滤器，它接收一个输入参数 value，并将其转换为大写后返回。在模板中使用时，可以这样调用：

```
{{ message | capitalize }}
```

此时，Vue.js 会自动调用 capitalize 过滤器，并将 message 作为输入参数传递给它。过滤器的处理结果将替换原来的 message 值。

需要注意的是，过滤器只能用于输出格式化，不能用于替换原有的值或者修改原有的数据。如果需要修改数据，应该使用计算属性或者方法。

总之，Vue.js 的过滤器是一个非常方便的功能，可以大大简化我们对模板数据的处理和格式化工作。

#### Vue 中的 mixin 是什么？如何使用？

在 Vue 中，mixin 是一种可复用的组件选项。它允许在多个组件之间共享相同的选项，例如生命周期钩子、计算属性和方法等。

使用 mixin 可以将一些常见的逻辑和功能抽象出来，然后混入到需要使用这些逻辑和功能的组件中，避免重复编写相似的代码，提高了代码的复用性和可维护性。

在 Vue 中使用 mixin 非常简单，只需要在一个普通的 JavaScript 对象中定义你需要混入的选项，然后将这个对象传递给 Vue.mixin() 方法即可。下面是一个示例：

```
// 定义一个 mixin 对象
const myMixin = {
  created() {
    console.log('mixin created');
  },
  methods: {
    sayHello() {
      console.log('hello');
    }
  }
};

// 使用 mixin
Vue.mixin(myMixin);
```

通过这样的方式，我们定义了一个名为 myMixin 的 mixin 对象，并将其混入到了 Vue 中，那么这些选项就会被注入到每个新创建的组件中。在组件中，我们可以像使用普通的选项一样使用混入的选项，例如：

```
export default {
  created() {
    console.log('component created');
  },
  methods: {
    handleClick() {
      this.sayHello();
    }
  }
};
```

这里的组件中混入了 myMixin 对象中的 created 和 methods 选项，我们可以在组件中使用 handleClick 方法来调用混入的 sayHello 方法。

#### Vue 中的 extends 是什么？如何使用？

在 Vue 中，extends 是一种组件的复用方式，可以让一个组件基于另一个组件进行扩展。通过使用 extends，一个组件可以继承另一个组件的所有选项，包括数据、计算属性、方法、生命周期钩子等。

extends 可以让一个组件基于另一个组件进行扩展，使得代码的复用更加简单和高效。与 mixin 不同的是，extends 会继承所有选项，包括生命周期钩子，而不是只继承数据和方法。

使用 extends 可以让代码更加简洁和易于维护，同时也可以提高代码的复用性和灵活性。

下面是一个使用 extends 的示例：

```
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
import BaseComponent from './BaseComponent.vue';

export default {
  extends: BaseComponent,
  data() {
    return {
      content: 'This is the content of the extended component',
    };
  },
};
</script>
```

在上面的示例中，我们创建了一个名为 BaseComponent 的组件，并将其作为父组件传递给了一个名为 ExtendedComponent 的子组件。ExtendedComponent 通过 extends 继承了 BaseComponent 的所有选项，并且添加了一个新的数据项 content。

在实际开发中，我们可以使用 extends 来复用和扩展组件，从而提高代码的复用性和灵活性。

### 二、Vue 生命周期

#### Vue 的生命周期有哪些？一般在哪个生命周期请求异步数据？

Vue 2.x 的生命周期钩子函数共有 8 个：

1. **beforeCreate**：实例刚在内存中被创建出来，此时还没有初始化好 data 和 methods 属性，因此无法访问这两个属性，可以在这里做一些全局的配置，如注册全局组件、全局指令等。
1. **created**：实例已经在内存中创建完成，此时 data 和 methods 都已经被初始化好了，可以访问这两个属性，如果想和后端交互，可以在这里使用 axios 等库。
1. **beforeMount**：此时模板已经在内存中编译完成，但尚未挂载到页面中。
1. **mounted**：此时模板已经挂载到页面中，用户可以看到渲染好的页面。可以在这里做一些初始化页面的操作，如获取页面中的 DOM 元素、对获取的数据进行进一步处理等。
1. **beforeUpdate**：状态更新之前触发，此时可以对状态进行更新之前的操作，如更新状态之前获取页面的 scrollTop 等。
1. **updated**：状态更新之后触发，此时可以对更新后的状态进行操作，如操作更新后的 DOM 元素等。
1. **beforeDestroy**：实例在销毁之前调用，可以在这里进行善后工作，如清除定时器、清除非 Vue 插件等。
1. **destroyed**：实例已经销毁，这个时候就不能再访问实例中的 data 和 methods 属性了，可以在这里进行垃圾回收等工作。

Vue 3.x 相比 Vue 2.x，增加了两个生命周期钩子函数：

1. **beforeUnmount**：在卸载组件之前调用，此时组件实例仍然可用，可以在这里进行一些清理工作，如清除定时器、解除事件监听等。
1. **unmounted**：在卸载组件之后调用，此时组件实例已经不再可用，无法访问组件实例中的任何属性和方法。

通常在 created、beforeMount、mounted 钩子函数中请求异步数据，因为此时实例已经被创建完成，data 和 methods 属性也已经被初始化好了，可以访问这两个属性。

#### 父子组件生命周期顺序？

父子组件的生命周期顺序如下：

加载渲染过程：

1. 父组件 beforeCreate。
1. 父组件 created。
1. 父组件 beforeMount。
1. 子组件 beforeCreate。
1. 子组件 created。
1. 子组件 beforeMount。
1. 子组件 mounted。
1. 父组件 mounted。

更新过程：

1. 父组件 beforeUpdate
1. 子组件 beforeUpdate
1. 子组件 updated
1. 父组件 updated

销毁过程：

1. 父组件 beforeDestroy
1. 子组件 beforeDestroy
1. 子组件 destroyed
1. 父组件 destoryed

在父组件中使用 v-if 条件渲染时，子组件的 beforeCreate 和 created 钩子函数会在父组件的 beforeMount 钩子函数之前执行，因此在子组件的这两个钩子函数中无法访问父组件的 props 数据。

#### Vue 在什么阶段才能操作访问 DOM？

Vue 在生命周期的 mounted 阶段才能访问和操作 DOM。在这个阶段，Vue 实例已经被挂载到了实际的 DOM 上，并且可以使用原生 DOM API 进行操作。在 mounted 阶段之前，Vue 的模板已经被编译成虚拟 DOM，并且还没有渲染成实际的 DOM，因此无法直接访问和操作 DOM。

#### created 和 mounted 的区别？

在 Vue 实例中，created 和 mounted 都是生命周期函数，它们有以下的区别：

1. **调用时机不同**：created 在 Vue 实例被创建时调用，此时模板和虚拟 DOM 都未渲染；mounted 在虚拟 DOM 渲染成真实 DOM 后调用。
1. **使用方式不同**：created 中可执行异步操作，如发起数据请求、创建定时器等，一般用于初始化数据；mounted 适合操作 DOM、实例中的数据等。
1. **生命周期的作用不同**：created 用于实例化完成之后进行的操作，如获取数据、监听事件等；mounted 用于模板渲染完成之后进行的操作，如 DOM 操作、启动定时器等。

在父子组件中，父组件的 mounted 会先于子组件的 mounted 执行。

#### keep-alive 的理解？它是如何实现的？keep-alive 的生命周期有哪些？

&lt;keep-alive&gt; 是 Vue.js 中的一个抽象组件，它的主要作用是缓存组件。在一个有大量组件需要频繁切换的页面中，使用 &lt;keep-alive&gt; 可以提高页面的性能，减少因频繁创建和销毁组件而产生的性能消耗。

具体实现原理如下：

1. 首先在 &lt;keep-alive&gt; 组件内部创建一个 cache 对象，用于缓存组件实例。
1. 当一个组件被包裹在 &lt;keep-alive&gt; 组件内时，会根据该组件的 name 或者组件自身的唯一标识符（如 key 属性）在 cache 对象中查找是否有缓存的实例。如果找到了缓存的实例，则直接使用缓存的实例渲染组件，并且调用其 activated 钩子函数；否则创建新的组件实例，并将其缓存到 cache 对象中。
1. 当一个被缓存的组件再次被渲染时，会调用其 deactivated 钩子函数，并将其从 DOM 中移除，但是组件实例仍然被缓存到 cache 对象中。
1. 如果缓存的组件实例过多，超出了设置的 max 属性值，则会按照 LRU 算法（最近最少使用算法）将最不常用的组件实例从 cache 对象中移除。

总之，&lt;keep-alive&gt; 的实现原理是将缓存的组件实例存储在内存中，以达到提高页面性能的目的。

keep-alive 组件经历的生命周期包括以下几个钩子函数（其中 **activated** 和 **deactivated** 是 keep-alive 独有的生命周期）：

1. **beforeMount**: 在 keep-alive 组件第一次挂载时调用，此时 keep-alive 会缓存第一个子组件；
1. **beforeUnmount**: 在 keep-alive 组件被卸载前调用，此时 keep-alive 会销毁所有缓存的子组件；
1. **activated**: 在 keep-alive 组件激活时调用，此时 keep-alive 会渲染缓存的子组件；
1. **deactivated**: 在 keep-alive 组件停用时调用，此时 keep-alive 会停用缓存的子组件。

在父子组件的生命周期顺序中，父组件的生命周期钩子函数会在子组件之前调用，也就是说父组件的 activated 钩子函数会在子组件的 mounted 钩子函数之前调用，父组件的 deactivated 钩子函数会在子组件的 beforeUnmount 钩子函数之后调用。因此，如果在 activated 或 deactivated 钩子函数中需要访问子组件的数据或方法，需要特别注意生命周期顺序的影响。

### 三、Vue 路由

#### Vue 路由是什么？有什么优缺点？

Vue 路由是 Vue.js 官方提供的一种实现前端页面跳转、刷新、回退等页面管理的机制。它通过监听 URL 变化，匹配路由规则并展示相应的组件，实现了单页应用（SPA）的前端路由功能。

Vue 路由的优点包括：

1. 单页应用，路由切换速度快；
1. 通过路由实现组件懒加载，加速页面加载；
1. 可以通过路由传递参数，方便组件间的数据传递和通信；
1. 可以通过路由钩子函数实现路由拦截，对用户权限进行控制。

Vue 路由的缺点包括：

1. 需要前端路由管理，对 SEO 不友好；
1. 路由配置复杂，需要考虑多个页面的嵌套和组件之间的通信；
1. 页面数据需要通过 API 获取，增加了前端请求的负载。

总的来说，Vue 路由作为一种前端页面管理的机制，可以在一定程度上提升用户体验和页面加载速度，但也需要在项目设计和开发过程中注意一些问题的处理，如路由配置和 SEO 问题等。

#### 路由模式 hash 和 history 有什么区别？

Vue Router 中的路由模式有两种：hash 模式和 history 模式。

1. hash 模式：在 URL 中使用 # 符号来模拟一个完整的 URL，当 URL 改变时，页面不会重新加载。hash 值的改变只会引起浏览器滚动条位置的改变。
1. history 模式：使用 HTML5 提供的新特性，改变浏览器地址栏的 URL，不会带有 # 符号。当 URL 改变时，页面会重新加载。与 hash 模式相比，history 模式更符合人类直观理解的 URL 地址，更具有语义化。

在使用 Vue Router 时，可以通过指定 mode 属性来设置路由模式，如下所示：

```
const router = new VueRouter({
  mode: 'history', // 路由模式为 history 模式
  routes: [...]
})
```

需要注意的是，当使用 history 模式时，需要在服务端进行相应的配置，以避免在直接访问页面时出现 404 错误。

#### 路由模式怎么切换？在哪里切换？

在 Vue Router 中，路由模式有两种：hash 模式和 history 模式。

默认情况下，Vue Router 使用的是 hash 模式，即在 URL 中使用 # 来表示当前路由地址。当需要切换到 history 模式时，可以在创建 router 实例时传入 mode: 'history' 选项。例如：

```
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

在切换路由模式后，需要注意以下几点：

- hash 模式下，无需配置服务器，就可以使用路由功能，因为只是在 URL 中添加了一个 # 号。
- history 模式下，需要配置服务器来处理每个路由请求，否则会返回 404 错误。在开发环境中，可以使用 vue-cli 脚手架自带的 dev server 来处理。
- 在 history 模式下，需要在服务器中添加一个重定向规则，将所有请求都指向 index.html，这样在刷新页面或直接输入 URL 访问页面时才能正确加载路由。

#### 路由钩子函数有哪些？beforeEach afterEach 常用来做什么？

Vue Router 提供了多个路由钩子函数，常用的路由钩子函数包括：

1. **beforeEach**: 在路由跳转之前调用，可以用来做用户权限验证或全局路由拦截等操作。
1. **beforeResolve**: 在路由解析之前调用，在组件被解析之后调用（几乎不使用）。
1. **afterEach**: 在路由跳转完成后调用，可以用来做页面访问统计等操作。
1. **beforeEnter**：在路由进入之前调用。
1. **beforeRouteEnter**: 在路由进入之前调用，但是此时组件实例还未被创建，所以无法访问 this，通常用来做异步数据加载等操作。
1. **beforeRouteUpdate**: 在路由参数更新时调用，可以在此处做异步数据加载等操作。
1. **beforeRouteLeave**: 在离开当前路由时调用，可以用来做页面离开前的数据保存或用户确认等操作。

其中，beforeEach 和 afterEach 是全局的路由钩子函数，可以在 router 对象上定义。其他钩子函数是在组件内定义的。

beforeEach 常用来做用户权限验证或全局路由拦截等操作，如用户未登录跳转到登录页面、判断用户角色是否有权限访问某些页面等操作。afterEach 常用来做页面访问统计等操作，如记录用户访问的页面路径、页面停留时间等信息。

#### route 和 router 是什么？params 和 query 的区别？

在 Vue Router 中，route 表示当前的路由信息，包含当前路由的路径、参数、查询参数等信息；而 router 表示路由实例，用于实现路由的跳转、监听等功能。

params 和 query 都是用于在路由中传递参数的方式。其中，params 用于传递必须参数，通常用于动态路由，如 /users/:id，而 query 则用于传递可选参数，通常在路由跳转时携带，如 /users?name=xxx。在路由组件中可以通过 \$route.params 和 \$route.query 来获取参数的值。

具体而言，params 传递的参数会被解析为路由路径中的占位符参数，例如路由定义为 /users/:id，则可以通过 \$route.params.id 获取该参数的值。而 query 传递的参数则会被解析为查询字符串，例如 /users?name=xxx 中的 name 参数可以通过 \$route.query.name 获取。

总的来说，params 和 query 都是用于在路由中传递参数的方式，但其区别在于传递的数据形式和用途不同。

#### Vue 中的动态路由是什么？

在 Vue 中，动态路由是指可以根据不同参数动态生成的路由。通常情况下，我们会定义一些基本路由，但是有时候需要根据不同的需求和情况，动态地生成一些路由。这时候就可以使用动态路由。

例如，我们可能有一个路由，用于显示不同的用户信息。但是不同的用户数量可能是不确定的，我们无法提前定义所有的路由。这时候，我们可以使用动态路由，根据用户 id 动态地生成路由，实现根据不同的 id 展示不同用户信息的功能。

在 Vue 中，我们可以通过在路由定义中使用冒号（:）来指定动态参数，例如：

```
{
  path: '/user/:id',
  component: User
}
```

在这个例子中，:id 是一个动态参数，它可以匹配任何路径以/user/开头的路由。我们可以在组件内通过$route.params.id来获取动态参数的值。例如，在上面的路由中，如果路径是/user/123，则$route.params.id 的值为 123。

动态路由的实现方式和静态路由基本相同，只需要在路由配置中添加动态参数即可。同时，我们还可以使用 Vue Router 提供的其他功能，例如路由守卫和路由元信息等。

#### 怎么实现路由懒加载？

路由懒加载可以提高应用的性能和加载速度，它的实现可以通过异步组件来实现。异步组件是指只有在组件需要被使用时才进行加载和解析的组件。

在 Vue Router 中，路由懒加载可以通过配合 Webpack 的 import 函数和 webpackChunkName 注释来实现。下面是实现路由懒加载的示例代码：

```
const Foo = () => import(/* webpackChunkName: "foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "bar" */ './Bar.vue')

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
```

在这个示例代码中，使用箭头函数来定义异步组件，通过 import() 方法来加载组件文件。webpackChunkName 注释用来指定 Webpack 打包后的文件名，可以让我们更清晰地知道每个文件对应的组件。

需要注意的是，使用路由懒加载的同时，也需要使用 webpack 的 Code Splitting 功能来实现代码的分块，以便按需加载。

#### 路由拦截器是什么？怎么实现登录拦截和登陆成功保存 token 到 sessionstorage 中？

路由拦截器是一种在用户访问某些页面时，通过判断用户是否具有相应的权限来进行拦截的技术。在 Vue 中，可以使用 vue-router 提供的钩子函数 beforeEach 来实现路由拦截器。具体实现步骤如下：

1. 定义路由时，可以在 meta 属性中添加一个自定义字段 requireAuth，用于判断该路由的访问是否需要登录。

```
const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    },
    {
        path: '/myIndex',
        name: 'myIndex',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component: myIndex
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
```

2. 在 beforeEach 函数中，通过判断路由的 meta 属性中是否存在 requireAuth 字段，以及当前应用是否存在 token 来决定是否进行拦截。

```
router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
        // 通过sessionStorage获取当前的token是否存在
        if (sessionStorage.getItem('token')) {
            next();
        }
        else {
            next({
                path: '/login',
                // 将跳转的路由path作为参数，登录成功后跳转到该路由
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})
```

3. 登录成功后，可以将 token 保存到 sessionStorage 中。

```
axios.post('/login', {
    username: this.username,
    password: this.password
}).then(response => {
    sessionStorage.setItem('token', response.data.token);
    // 登录成功后跳转到目标路由
    router.push(this.$route.query.redirect || '/');
}).catch(error => {
    console.log(error);
});
```

4. 在 http request 拦截器中，可以在每个 http header 中加上 token，以便后端进行身份验证。

```
axios.interceptors.request.use(
    config => {
         // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (sessionStorage.getItem('token')) {
            config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
```

5. 在 http response 拦截器中，可以根据返回状态码进行拦截处理，例如在返回 401 状态码时，清除 token 信息并跳转到登录页面。

```
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    sessionStorage.removeItem('token');
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)
    });
```

#### Vue 路由权限怎么根据后台返回的数据生成？

Vue 路由权限通常是通过在前端获取后端返回的用户信息，根据用户的角色和权限动态生成路由来实现的。

具体实现步骤如下：

1. 登录成功后，前端从后端获取当前用户的角色和权限信息。
1. 根据获取到的用户信息，前端根据规则动态生成路由配置。
1. 在 Vue Router 的路由配置中，可以使用动态路由和路由元信息来定义路由权限。
   - a. 动态路由：可以根据不同的角色和权限，动态生成路由。
   - b. 路由元信息：可以在路由配置中添加一些元信息，例如当前路由需要的角色和权限等，以供路由守卫进行判断。
1. 在路由守卫中，根据当前用户的角色和权限，判断用户是否有权限访问当前路由。
   - a. 如果有权限，继续访问当前路由。
   - b. 如果没有权限，跳转到登录页面或者提示用户没有权限访问当前页面。

以下是一个示例代码：

```
// 动态生成路由配置
const generateRoutes = (roles) => {
  const routes = []
  // 根据角色和权限生成路由
  if (roles.includes('admin')) {
    routes.push({
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        roles: ['admin']
      }
    })
  }
  if (roles.includes('editor')) {
    routes.push({
      path: '/editor',
      name: 'Editor',
      component: Editor,
      meta: {
        requiresAuth: true,
        roles: ['editor']
      }
    })
  }
  return routes
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
        roles: ['admin', 'editor']
      }
    },
    // 其他静态路由
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  if (requiresAuth) {
    const roles = store.getters.roles
    const hasRole = roles.some(role => to.meta.roles.includes(role))
    if (hasRole) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 获取用户信息，并生成路由
getUserInfo().then(response => {
  const roles = response.data.roles
  const routes = generateRoutes(roles)
  router.addRoutes(routes)
})
```

在上面的示例代码中，我们使用 generateRoutes 方法根据角色和权限动态生成路由配置，并通过 addRoutes 方法将路由配置添加到 Vue Router 中。在路由守卫中，根据当前用户的角色和权限，判断用户是否有权限访问当前路由，如果没有权限则跳转到登录页面或者提示用户没有权限访问当前页面。同时，在路由配置中添加了 meta 元信息，用于保存当前路由需要的角色和权限信息，以供路由守卫

### 四、Vue 组件通信

#### Vue 2 组件通信有哪些方式？

在 Vue 2 中，组件通信主要有以下几种方式：

1. **父子组件通信**：通过 props 和 $emit 实现父子组件之间的数据传递和事件传递。
1. **子父组件通信**：通过在子组件中使用 this.$parent 或者 $root 访问父组件实例，从而实现对父组件数据和方法的访问。
1. **非父子组件通信**：可以通过一个空的 Vue 实例作为中央事件总线（Event Bus），用它来触发事件和监听事件，实现任意组件间的通信。
1. **Vuex**：它是 Vue.js 官方提供的集中式状态管理方案，适用于中大型单页应用中多个组件共享数据的情况。
1. **$attrs 和 $listeners**：在父子组件通信时，通过 $attrs 和 $listeners 访问子组件的属性和事件。

以上是 Vue 2 中常见的组件通信方式，不同的场景和需求可以选择不同的方式来进行组件通信。

### 五、Vue 项目

#### Vue 和 React 的区别？

Vue 和 React 是两个非常流行的前端框架，它们有很多相似之处，同时也有很多不同点，以下是一些主要的区别：

1. **组件化方式不同**：Vue 使用 template 和单文件组件 (.vue)，而 React 使用 JSX 和 JavaScript。
1. **数据绑定方式不同**：Vue 使用双向数据绑定 (v-model)，而 React 使用单向数据流。
1. **状态管理方式不同**：Vue 使用 Vuex，而 React 使用 Redux。
1. **生命周期不同**：Vue 的生命周期钩子更加细粒度，而 React 的生命周期更加简单直接。
1. **渲染方式不同**：Vue 使用虚拟 DOM，而 React 使用 Fiber 架构。
1. **打包工具不同**：Vue 使用 Vue CLI，而 React 使用 Create React App。

此外，Vue 和 React 在语法上也有很多不同，例如 Vue 使用指令 (directives) 控制 DOM 元素，而 React 使用组件 (components) 渲染 UI，Vue 倾向于提供更多的语法糖和简化开发体验，而 React 更加强调代码的可组合性和灵活性。同时，Vue 在中小型项目上使用更加方便，而 React 在大型项目上更加有优势，因为其更加适合于团队协作和状态管理。

#### MVC/MVVM 的区别？

MVC（Model-View-Controller）和 MVVM（Model-View-ViewModel）是两种常见的应用程序架构模式。

MVC 模式将应用程序分为三个部分：模型、视图和控制器。模型用于存储应用程序数据，视图用于展示数据，而控制器用于管理模型和视图之间的交互。

MVVM 模式也将应用程序分为三个部分：模型、视图和视图模型。模型和视图在 MVVM 中的作用与 MVC 相同。视图模型是一个中介层，它将视图和模型之间的交互进行解耦。视图模型将数据从模型层转换为视图层，同时也处理视图层的交互事件，将其转换为模型层能够处理的操作。

MVC 和 MVVM 的主要区别在于它们的数据流和数据绑定方式。MVC 中，视图和控制器之间的通信是通过控制器来进行的，而视图和模型之间的通信是通过控制器来协调的。MVVM 中，视图和视图模型之间的通信是通过双向数据绑定来实现的，而视图模型和模型之间的通信是通过视图模型来协调的。

总的来说，MVVM 相对于 MVC 来说，它更加注重视图与数据之间的关系，通过双向数据绑定的方式让数据的变化能够自动同步到视图中。而 MVC 则更加注重模块化和可扩展性，将应用程序按照模块进行划分，降低模块之间的耦合度。

#### Vue 初始化过程中（new Vue(options)）都做了什么？

在初始化 Vue 实例的过程中，Vue 做了以下几件事情：

1. **合并选项**：Vue 会将传入的选项与全局配置进行合并，生成最终的选项对象。合并顺序：先将局部组件选项合并为一个新的对象，然后合并到 Vue 构造函数的 options 属性上，再合并全局选项。
1. **初始化生命周期**：Vue 会在实例上初始化一些属性和内部状态，比如 \$options、\$el、\$data、\$props 等，同时还会定义一些私有属性和方法，例如\\\_update()、$watch()等。
1. **初始化事件系统**：Vue 初始化了一些核心事件，包括生命周期钩子函数、v-model 指令、自定义事件等，并且实现了相关方法和工具函数，如\$on()、\$off()、\$once()、\$emit()等。
1. **初始化渲染**：Vue 在初始化的过程中会创建一个渲染函数，即 Vue 的 compile 编译器，将模板(template)编译为渲染函数(render)，并生成虚拟 DOM，然后将虚拟 DOM 渲染到页面上。
1. **初始化注入**：Vue 会在实例化的时候对全局注入进行处理，包括组件、指令、过滤器、transition 等，并提供了相关的方法和钩子函数。
1. **初始化状态**：最后，Vue 会初始化实例的状态，包括响应式数据、计算属性、观察者等，这也是 Vue 最为重要的部分之一，负责实现 MVVM 模式的数据绑定。

以上就是 Vue 在初始化过程中做的主要事情。

#### Vue 项目做过哪些性能优化？

Vue 项目的性能优化可以从多个方面入手，包括以下几个方面：

1. **使用异步组件和路由懒加载**：这样可以减少首屏加载的资源数量，加快页面渲染速度。
1. **避免不必要的计算**：使用 computed 属性和 watch 属性来避免不必要的计算，尽量减少 DOM 操作。
1. **合理使用 v-if 和 v-for 指令**：v-if 指令在控制组件的显示隐藏时比 v-show 指令更加高效，v-for 指令遍历大量数据时应尽量使用 key 值优化性能。
1. **减少 HTTP 请求**：使用 webpack 的 code splitting 和 lazy loading，尽量减少不必要的网络请求。
1. **图片懒加载**：使用 Vue 的插件 vue-lazyload 对图片进行懒加载，减少页面加载时间。
1. **使用 CDN 加速静态资源**：将静态资源如图片、样式等放到 CDN 上，可以减少服务器压力，加速页面加载速度。
1. **使用生产环境构建**：在打包构建时使用生产环境的配置，可以去除开发环境的调试代码和警告信息，减少代码体积和请求次数。

以上仅是 Vue 项目性能优化的几个方面，实际上还有很多其他优化方法，需要根据具体的项目情况和需求来综合考虑和实现。

#### 骨架屏是什么？要怎么使用？

骨架屏（Skeleton Screen）是一种优化用户体验的方式，它是在页面还未加载完成之前先展示一些类似于页面框架的结构，用来占位，让用户感受到页面正在加载，提高用户体验。

在实际应用中，可以使用 CSS 或 JS 实现骨架屏。使用 CSS 实现骨架屏的方法比较简单，可以通过设置元素的背景色、渐变色、动画等方式来模拟出一个页面的结构。使用 JS 实现骨架屏的方法则需要先对页面的结构进行分析，然后根据分析结果动态生成页面的骨架屏结构。

在 Vue 项目中，可以使用第三方库如 vue-skeleton-webpack-plugin 或 vue-content-loader 来快速实现骨架屏。这些库会在构建时自动生成骨架屏，并将其作为组件注入到页面中。

在使用骨架屏时，需要注意不要让用户等待时间过长，否则反而会影响用户体验。另外，骨架屏也需要适当的配合页面加载动画，以保证用户在等待页面加载时的良好体验。

#### Vue 配置文件有哪些功能？

Vue 配置文件主要包含以下功能：

1. 配置开发服务器 devServer，包括代理、热更新等。
1. 配置打包后的输出路径 output，包括路径、文件名、静态资源路径等。
1. 配置代码处理 loader，包括对 js、css、图片等文件的转换和处理。
1. 配置插件 plugins，包括 HtmlWebpackPlugin、CleanWebpackPlugin 等常用插件。
1. 配置代码模块化处理方式 module，包括 CommonJS、ES6 Module 等。
1. 配置代码压缩优化 optimization，包括压缩代码、提取公共代码、分割代码等。
1. 配置开发环境变量等其他一些特殊需求。

#### 封装 Vue 组件过程？

封装 Vue 组件是在 Vue.js 中实现可复用 UI 的一种方式，它是一个独立的、可复用的组合，包括模板、样式和逻辑代码。下面是封装 Vue 组件的一般步骤：

在其他组件中使用组件：通过在其他组件中使用组件标签的方式来使用组件，可以通过 props 的方式传递属性给组件，从而渲染出组件的视图。

1. **创建组件的构造器（Vue.extend()）**：通过调用 Vue.extend() 方法创建一个 Vue 组件的构造器，该构造器可以用来生成多个 Vue 组件实例。
1. **定义组件的模板（template）**：定义组件的模板，模板中可以使用 Vue 的模板语法，例如插值、指令等等。
1. **定义组件的属性（props）**：定义组件需要接受的属性，这些属性可以在组件的模板中使用。
1. **定义组件的数据（data）**：定义组件需要的数据，在组件中使用的数据需要通过函数返回一个对象的方式定义。
1. **定义组件的方法（methods）**：定义组件需要的方法，在组件中使用的方法需要定义为一个对象的方式。
1. **注册组件（Vue.component()）**：通过调用 Vue.component() 方法注册组件，将组件注册到全局。
1. **使用组件**：在需要使用组件的地方，使用组件名称来使用组件。
1. **细化组件**：为了提高组件的复用性和可维护性，可以将组件进行进一步的封装。例如，将组件的样式和模板独立出来，或者将组件的逻辑代码分解为更小的模块。
1. **测试和维护**：在开发完组件后，需要进行测试和维护。测试可以使用各种测试框架进行自动化测试，维护可以包括修复组件中的 bug、添加新功能或升级组件版本等。

封装 Vue 组件需要注意的事项（**高内聚低耦合可重用**原则）：

1. 组件名称应该是唯一的，不能与其他组件或 HTML 元素的名称相同。
1. 组件应该具有良好的可重用性，可以在不同的场景下使用。
1. 组件应该具有清晰的界面和可维护的代码。
1. 组件的逻辑应该与其他代码分离，可以在多个项目中重复使用。

需要注意的是，在 Vue 2.x 版本中，可以使用单文件组件（.vue 文件）的方式来封装 Vue 组件，这种方式更加方便和灵活，也更加推荐使用。

#### Vue 的 template 和 React 的 jsx 的有什么分别？

在 Vue 中，模板(template)是用于定义组件结构和渲染逻辑的一种方式，而 JSX 则是使用类似 HTML 的语法来构建 Vue 组件的一种方式。下面是一些 template 和 JSX 的区别：

1. **语法形式**：template 使用 HTML 模板语法，而 JSX 使用 JavaScript 语法和标签。
1. **组件结构**：template 可以更直观地描述组件的结构，而 JSX 更容易混淆，因为它将 HTML 和 JavaScript 结合在一起。
1. **数据绑定**：template 使用双向数据绑定，而 JSX 则通过使用 JavaScript 表达式来实现数据绑定。
1. **插槽（slot）**：template 的插槽写法更加简洁明了，而 JSX 的插槽使用 JavaScript 的语法来进行描述。
1. **集成性**：Vue 官方更加推荐使用 template 的方式，而 JSX 则需要使用第三方库进行支持。
1. **可读性**：对于开发者而言，template 的可读性更高，更容易理解。

总的来说，template 和 JSX 都是用于构建 Vue 组件的方式，但是它们的语法和风格有所不同，开发者可以根据自己的需求和喜好来选择使用哪种方式。

#### Vue2 怎么内部监听生命周期钩子（hook）？

Vue2 内部监听生命周期钩子（hook）是通过调用 Vue 实例上的 $emit 方法实现的。在 Vue2 中，每个生命周期钩子都对应着一个事件，例如 beforeCreate 钩子对应的事件名是 hook:beforeCreate，mounted 钩子对应的事件名是 hook:mounted。

在 Vue 初始化时，会将生命周期钩子对应的事件名通过 initLifecycle 方法挂载到 Vue 实例上，然后在 callHook 方法中通过 $emit 方法触发这些事件。具体实现可以参考 Vue2 的源码。

除了 Vue 内部自动触发生命周期钩子外，我们也可以手动调用 $emit 方法触发这些事件，来达到自定义生命周期钩子的效果。

#### 怎样理解 Vue 的单向数据流？

Vue 的单向数据流指的是数据的流动方向是单向的，即数据只能从父组件传递到子组件，而子组件不能直接修改父组件的数据。这样的数据流动方式使得应用程序的数据流动更加清晰可控，避免了数据的混乱和不可预测性。

在 Vue 中，组件之间的数据通信有两种方式，即 props 和事件。父组件通过 props 将数据传递给子组件，而子组件通过 $emit 方法触发事件，向父组件传递数据。这样的数据流动方式确保了数据只能从父组件流向子组件，而子组件不能修改父组件的数据。

在实际开发中，我们可以通过在子组件中触发事件的方式，将数据传递给父组件，然后在父组件中修改数据，这样就可以实现数据的更新和双向绑定。这种单向数据流的方式使得数据流动更加清晰可控，提高了代码的可维护性和可读性。

#### 白屏是什么？多久算白屏？

白屏是指在页面加载时，浏览器窗口内什么都没有，只有一个空白页面。在网页打开之后，用户可以在页面上看到正在加载的图标，但无法看到页面内容。这个过程中，用户不能与页面交互。

通常情况下，白屏时间应该尽可能地短，用户一般希望在几秒钟之内能够看到页面内容。如果用户等待时间过长，可能会放弃等待并离开网站。因此，一般来说，白屏时间超过 5 秒就会被视为过长，需要进行优化。

#### Vue 首页加载白屏怎么解决？（建议写博客）

Vue 首页加载白屏可以通过以下方式解决：

1. **优化静态资源加载**：尽可能地将静态资源文件（如样式、脚本等）放到页面顶部，避免首屏加载时因资源文件下载阻塞而导致页面白屏。
1. **拆分代码**：将大型的 JavaScript 文件拆分成多个较小的文件，这样可以避免在页面加载时，大量的 JavaScript 代码一次性加载，导致页面阻塞。
1. **使用骨架屏技术**：在页面未加载完成之前，可以先显示一些页面的大概布局，以及一些占位信息，这样可以避免页面一片空白，提升用户体验。
1. **使用懒加载技术**：对于一些不必要首次加载的资源（长列表、路由模块化），可以使用懒加载技术，在需要使用时再进行加载，减轻页面的加载压力。
1. **优化 Vue 组件的加载方式**：可以使用异步组件，让组件在需要使用时再进行加载，提高首屏渲染速度。

以上这些方式都可以有效地减少 Vue 首页加载白屏的问题。

#### 刷新页面数据丢失怎么办？（建议写博客）

当页面刷新时，Vue 应用的数据会丢失，这是因为 Vue 是在内存中运行的，而不是在持久化存储中。为了解决这个问题，可以使用一些技术，例如：

1. 使用浏览器的 Local Storage 或 Session Storage 将数据保存到本地。这样在刷新页面时，可以将数据从本地存储中读取出来，并将其用作 Vue 应用的初始数据。
1. 在页面刷新之前，将数据发送到服务器。在页面重新加载时，可以从服务器重新获取数据，以恢复应用程序状态。
1. 在 Vue 应用中使用 Vuex 或 Pinia 等状态管理库，将应用程序状态保存在全局状态中心中。在页面刷新时，可以从状态中心重新获取数据。
1. 如果数据可以被缓存，可以使用浏览器缓存（例如使用 HTTP 缓存）来减少对服务器的请求。

总的来说，解决页面刷新数据丢失的问题，需要根据具体的应用场景和需求来选择最合适的解决方案。

#### 怎么解决 Vue 项目的 SEO 问题？

Vue 是一个单页应用（SPA）框架，因此在默认情况下，搜索引擎无法获取应用程序中的所有页面和内容，这可能会影响应用程序的 SEO。以下是一些可以解决 Vue 项目 SEO 问题的方法：

1. **使用服务端渲染（SSR）**：Vue 可以使用服务端渲染将页面渲染为静态 HTML，并在服务器上进行处理，从而使搜索引擎可以看到所有内容。使用 SSR 可以提高应用程序的 SEO，但需要更多的服务器资源和开发时间。
1. **使用预渲染（Prerendering）**：预渲染可以在构建时将应用程序中的页面转换为静态 HTML 文件。这些静态 HTML 文件可以用于 SEO，而在浏览器中加载时，应用程序会像 SPA 一样运行。与 SSR 相比，预渲染需要更少的服务器资源和开发时间。
1. **使用 vue-meta**：vue-meta 是一个 Vue 插件，可帮助在每个页面中添加 meta 标签。这些标签可以用于 SEO，例如页面标题、描述和关键字等。
1. **确保应用程序中的内容是可访问的**：使用合适的 HTML 标记和属性，确保搜索引擎可以正确识别应用程序中的内容。
1. **使用合适的路由配置**：使用合适的路由配置，确保应用程序中的每个页面都有一个唯一的 URL。这有助于搜索引擎正确识别和索引您的内容。

#### Vue 初始化页面闪动问题怎么解决？

使用 Vue 开发时，在 Vue 初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于{{message}}的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。

首先：在 css 里加上以下代码：

```
[v-cloak] {
  display: none;
}
```

如果没有彻底解决问题，则在根元素加上 style="display: none;"

```
:style="{display: 'block'}"
```

#### Vue 项目怎么实现国际化功能？

Vue 实现国际化功能需要使用 **Vue I18n** 库。它是一个 Vue.js 插件，提供了一种简单的方式来实现多语言应用程序。以下是使用 Vue I18n 库实现国际化功能的一般步骤：

安装 Vue I18n：可以使用 npm 或 yarn 安装 Vue I18n，例如：

```
npm install vue-i18n --save
```

创建语言文件：创建一个 JSON 文件，其中包含您的应用程序支持的语言和相应的翻译。例如，如果您的应用程序支持英语和西班牙语，则可以创建两个文件 en.json 和 es.json，格式如下：

en.json:

```
{
  "hello": "Hello",
  "world": "World"
}
```

es.json:

```
{
  "hello": "Hola",
  "world": "Mundo"
}
```

在 Vue 中注册 Vue I18n：

```
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
```

创建 VueI18n 实例并添加语言文件：

```
const messages = {
  en: require('./en.json'),
  es: require('./es.json')
}

const i18n = new VueI18n({
  locale: 'en', // 默认显示英语
  messages // 添加语言文件
})
```

在组件中使用翻译：

```
<template>
  <div>
    <p>{{ $t('hello') }} {{ $t('world') }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  mounted() {
    console.log(this.$t('hello')) // 输出 "Hello"
    console.log(this.$t('world')) // 输出 "World"
  }
}
</script>
```

在这个示例中，我们使用 $t 方法来翻译我们的文本。$t 方法将根据当前语言环境返回相应的翻译。

#### Vue 项目怎么实现主题切换功能？

Vue 的主题切换功能可以通过以下步骤实现：

在项目中定义多个主题的 CSS 样式文件，例如 theme1.css、theme2.css 等。

在 Vue 组件中动态地加载对应的主题样式。可以通过以下两种方式实现：

使用 import 动态加载对应的 CSS 文件：

```
export default {
  methods: {
    changeTheme(theme) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `./${theme}.css`; // 加载对应的 CSS 文件
      document.head.appendChild(link);
    },
  },
};
```

使用 style-loader 和 css-loader 加载对应的 CSS 文件：

```
export default {
  methods: {
    changeTheme(theme) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = require(`./${theme}.css`); // 加载对应的 CSS 文件
      document.head.appendChild(style);
    },
  },
};
```

在组件中提供主题切换的入口，例如按钮、下拉框等。在对应的事件处理函数中，调用上述动态加载主题样式的方法即可。

需要注意的是，动态加载样式文件可能会导致页面闪烁，需要根据具体情况进行优化。另外，如果需要实现全局的主题切换功能，可以将主题切换的方法定义在 Vue 的原型对象中，以便在所有组件中使用。

#### Vue 项目怎么封装 axios？主要封装哪方面？

在 Vue 项目中，我们可以将 axios 进行封装，以方便在不同组件中使用。主要的封装方面包括以下几个方面：

1. **封装 axios 的默认配置**。可以设置一些全局的请求头、响应头等信息，减少重复代码的编写。
1. **封装请求拦截器**。可以在请求发送之前对请求进行处理，例如在请求头中添加 token 等信息。
1. **封装响应拦截器**。可以在响应返回后对响应进行处理，例如判断响应状态码是否正确，统一处理错误信息等。
1. **封装公共方法**。可以将一些通用的请求方法进行封装，例如 get、post、put、delete 等方法。

以下是一个简单的 axios 封装示例：

```
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 接口的基础路径
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
  },
  error => {
    // 处理请求错误
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据进行处理
    const res = response.data;
    if (res.code !== 200) {
      // 处理错误信息
      console.log(res.msg);
      return Promise.reject(new Error(res.msg));
    } else {
      return res.data;
    }
  },
  error => {
    // 处理响应错误
    console.log(error);
    return Promise.reject(error);
  }
);

// 封装get请求
export function get(url, params) {
  return service({
    url,
    method: 'get',
    params
  })
}

// 封装post请求
export function post(url, data) {
  return service({
    url,
    method: 'post',
    data
  })
}

// 封装put请求
export function put(url, data) {
  return service({
    url,
    method: 'put',
    data
  })
}

// 封装delete请求
export function del(url) {
  return service({
    url,
    method: 'delete'
  })
}
```

通过这样的封装，我们可以在组件中使用封装好的方法来发送请求，例如：

```
import { get, post } from '@/api';

export default {
  methods: {
    fetchData() {
      get('/api/data').then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    },
    postData() {
      post('/api/data', { name: 'Tom', age: 18 }).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
```

这样可以大大简化请求代码的编写，提高开发效率。

#### Vue 项目权限管理怎么做？怎么实现控制到按钮级别的权限？

在 Vue 中进行权限管理，可以采用路由拦截和动态渲染两种方式。

1. **路由拦截**：路由拦截是指在路由跳转时，根据用户的角色或权限，判断该用户是否有权访问该路由。可以在路由配置文件中设置 meta 属性，用来存储该路由的访问权限信息，然后在路由跳转前，通过路由守卫进行权限验证，如果没有权限，则跳转到指定的页面。

例如，可以在路由配置文件中设置 meta 属性：

```
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true //需要登录才能访问
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requireAdmin: true //需要管理员权限才能访问
      }
    }
  ]
})
```

然后在路由跳转前进行权限验证：

```
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { //需要登录才能访问
    if (user.loggedIn) { //已登录
      next()
    } else { //未登录
      next({
        path: '/login',
        query: { redirect: to.fullPath } //将要访问的页面路径作为参数传递给登录页面，登录成功后可以跳转到该页面
      })
    }
  } else if (to.meta.requireAdmin) { //需要管理员权限才能访问
    if (user.isAdmin) { //是管理员
      next()
    } else { //不是管理员
      next({
        path: '/403' //跳转到没有权限访问的页面
      })
    }
  } else {
    next()
  }
})
```

2. **动态渲染**：动态渲染是指根据用户的角色或权限，动态生成页面内容，例如隐藏某些按钮或链接。可以在组件中通过 v-if 或 v-show 指令根据用户的角色或权限控制组件的显示或隐藏。

例如，在组件中可以使用 v-if 指令根据用户的角色或权限控制按钮的显示或隐藏：

```
<template>
  <div>
    <button v-if="user.isAdmin" @click="handleDelete">删除</button>
    <button v-if="user.isManager" @click="handleEdit">编辑</button>
    <button v-if="user.isMember" @click="handleAdd">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        isAdmin: true,
        isManager: false,
        isMember: true
      }
    }
  },
  methods: {
    handleDelete() {
      //处理删除操作
    },
    handleEdit() {
      //处理编辑操作
    },
    handleAdd() {
      //处理添加操作
    }
  }
}
</script>
```

这样，根据用户的角色或权限，只有符合条件的按钮会被渲染出来，从而实现控制到按钮级别的权限，可以在每个按钮的 v-if 或者 v-show 中进行权限控制，比如：

```
<el-button v-if="$store.getters.hasPermission('addUser')">添加用户</el-button>
```

其中 $store.getters.hasPermission('addUser') 方法是从 Vuex 的 getters 中获取当前用户是否有添加用户的权限，如果有则返回 true，按钮可以展示；如果没有则返回 false，按钮就不会被渲染。

在实现权限管理时，需要考虑到以下几点：

1. 在登录成功后，需要获取当前用户的权限列表并保存到 Vuex 的状态中；
1. 针对不同的路由或页面，需要判断当前用户是否有权限访问；
1. 对于不同的操作，需要判断当前用户是否有权限执行，比如添加、编辑、删除等；
1. 在进行权限判断时，需要考虑到细节问题，比如在路由嵌套时如何正确获取父子路由的权限等。

另外，为了提高开发效率，可以封装一个基于路由的权限控制指令，在页面中使用时只需要在需要进行权限控制的元素上添加 v-permission 指令即可，比如：

```
<el-button v-permission="'addUser'">添加用户</el-button>
```

其中指令的实现可以参考以下代码：

```
import store from '@/store'

export default {
  // 指令定义
  inserted(el, binding) {
    const { value } = binding
    const permissions = store.getters.permissions

    if (value && value instanceof Array) {
      if (value.length > 0) {
        const hasPermission = permissions.some((permission) => {
          return value.includes(permission)
        })

        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    } else {
      throw new Error('需要指定权限列表，如：v-permission="[\'addUser\', \'editUser\']"')
    }
  }
}
```

在指令的 inserted 钩子函数中，获取当前用户的权限列表并与指令传递的权限列表进行比较，如果当前用户没有指定权限之一，则将元素从 DOM 中移除。这样可以使得权限控制的逻辑更加简洁易懂，避免重复的判断逻辑。

### 六、Vue 原理

#### Vue 的基本原理？

当一个 Vue 实例创建时，Vue 会遍历 data 中的属性，用 Object.defineProperty（Vue3.0 使用 Proxy ）将它们转为 **getter/setter**，并且**在内部追踪相关依赖，在属性被访问和修改时通知变化**。 每个组件实例都有相应的 **watcher 程序实例**，它会在组件渲染的过程中把属性记录为依赖，之后**当依赖项的 setter 被调用时**，会**通知 watcher 重新计算**，从而致使它关联的组件得以更新。

#### 双向数据绑定的原理？

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

主要分为以下几个步骤：

1. 需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就监听到了数据变化
1. compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
1. Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
   a. 在自身实例化时往属性订阅器（dep）里面添加自己
   b. 自身必须有一个 update() 方法
   c. 待属性变动 dep.notice() 通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化 (input) -> 数据 model 变更的双向绑定效果。

#### 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

使用 Object.defineProperty() 进行数据劫持的主要缺点是性能问题，特别是当需要劫持的属性比较多时，会造成严重的性能问题。这是因为 Object.defineProperty() 是基于 JavaScript 的 getter 和 setter 实现的，每个属性的 getter 和 setter 都是独立的，并且需要在每次访问和设置属性时进行函数调用，从而导致性能开销较大。

此外，Object.defineProperty() 不能劫持整个对象的变化，只能对对象属性进行劫持，所以如果需要对整个对象进行劫持，则需要使用递归的方式进行遍历。这样会增加代码的复杂性和维护成本。

因此，Vue3 使用了 Proxy 对象来替代 Object.defineProperty() 进行数据劫持，以提高性能和效率。Proxy 对象具有更好的性能表现，支持拦截整个对象的变化，而不仅仅是属性，而且还可以支持动态修改拦截器，可以更加灵活地处理数据劫持。

#### 讲一下 Diff 算法？Diff 算法的原理？

Diff 算法是 虚拟 DOM（Virtual DOM） 的核心算法，用于比较两个 虚拟 DOM（Virtual DOM） 树的差异，并将差异应用到实际 DOM 上，从而实现高效的视图更新。

Diff 算法的原理如下：

1. 对比新旧节点是否是同一个节点，如果不是则直接将新节点替换旧节点，结束这个节点的对比，开始对比下一个节点。
1. 如果新旧节点是同一个节点，那么对比它们的子节点：
   a. 如果新旧节点都没有子节点，则认为它们是相等的，不需要更新。
   b. 如果新节点没有子节点，但是旧节点有子节点，则将旧节点的子节点全部删除。
   c. 如果旧节点没有子节点，但是新节点有子节点，则将新节点的子节点全部添加到旧节点中。
   d. 如果新旧节点都有子节点，则递归调用 Diff 算法，对比它们的子节点。
1. 对比新旧节点的属性是否有变化，如果有变化，则更新属性。
1. 对比新旧节点的子节点列表是否有变化，如果有变化，则更新子节点列表。

通过以上步骤，Diff 算法能够找出新旧节点的差异，从而高效地更新视图。

需要注意的是，Diff 算法并不是完全精确的，它只能找到最小的差异，并尽可能地减少对实际 DOM 的操作次数。因此，在实际开发中，需要合理地设计组件结构，减少不必要的 Diff 计算，提高性能。

#### 什么是虚拟 DOM？为什么要用虚拟 DOM？

虚拟 DOM（Virtual DOM）是一种浏览器中的概念，它是用 JavaScript 对象来表示真实的 DOM 元素以及其属性和内容，通常被用于优化 Web 应用程序的性能。

在 Web 应用程序中，每当数据发生变化时，浏览器都需要重新计算整个 DOM 树，然后更新渲染。这个过程非常昂贵，因为在每次更新时，浏览器都需要执行许多计算和重新渲染操作。

虚拟 DOM 的作用是在计算出哪些部分需要被更新之后，它只更新真正需要被更新的部分，而不是整个 DOM 树。这样可以大大提高应用程序的性能和响应速度。

虚拟 DOM 的原理是将真实 DOM 结构抽象成 JavaScript 对象，每次更新时，先将虚拟 DOM 更新，然后再将新旧虚拟 DOM 进行比对，找出需要更新的部分，并将这些部分更新到真实 DOM 上。在这个过程中，使用一些优化算法，如同层比较（diffing）等，可以减少不必要的 DOM 操作，提高应用程序的性能。

总之，虚拟 DOM 的优点在于它可以通过将 DOM 操作的成本降低到最小来提高性能，同时还可以简化组件之间的通信，使代码更易于维护。

#### Vue 多次点击请求接口，怎么只执行最后一次接口请求？

在 Vue 中，可以使用 lodash 库的 debounce 或者 throttle 方法来实现多次点击时只执行最后一次请求。

其中，debounce 方法会在最后一次调用后延迟一段时间再执行，而 throttle 方法则会在一定时间内只执行一次。

以下是一个使用 debounce 方法的示例代码：

```
// 引入 lodash 库
import _ from 'lodash'

export default {
  data() {
    return {
      // 声明一个变量存储请求结果
      result: null,
      // 声明一个变量存储上一次请求的 CancelToken
      prevRequest: null
    }
  },
  methods: {
    // 使用 debounce 包装请求方法
    request: _.debounce(function(params) {
      // 如果上一次请求还未完成，取消上一次请求
      if (this.prevRequest) {
        this.prevRequest.cancel()
      }
      // 发送请求
      this.prevRequest = axios.get('/api', { params })
        .then(res => {
          // 存储请求结果
          this.result = res.data
        })
        .catch(err => {
          console.error(err)
        })
    }, 500) // 延迟 500 毫秒执行请求
  }
}
```

在上面的代码中，我们通过 import 引入了 lodash 库，并在 methods 中声明了一个 request 方法，使用 \_.debounce 包装了实际的请求方法。这样，在多次调用 request 方法时，实际的请求方法只会在最后一次调用后延迟 500 毫秒执行，避免了多次请求的问题。同时，我们在请求方法中添加了一个逻辑，用于在发送新请求前取消上一次请求。这样可以保证只有最后一次请求的结果会被存储到 result 变量中。

如果需要调整执行时间或者使用 throttle 方法，只需要修改 \_.debounce 的参数即可。
