<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 22:32:05
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-02 01:22:41
 * @Description: 八股文：响应式原理defineProperty
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\响应式原理defineProperty.md
-->

#### 双向绑定原理

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

主要分为以下几个步骤：

1. 需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就监听到了数据变化
1. compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
1. Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
   - ① 在自身实例化时往属性订阅器（dep）里面添加自己
   - ② 自身必须有一个 update() 方法
   - ③ 待属性变动 dep.notice() 通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化 (input) -> 数据 model 变更的双向绑定效果。

#### 数据劫持是什么？

数据劫持是指在访问对象的属性时，拦截并对这个属性的读取和写入进行某些额外的操作，从而可以实现一些高级特性，例如数据绑定、观察者模式等。

在 JavaScript 中，数据劫持主要是通过对象的 getter 和 setter 方法来实现。当访问对象的属性时，会触发 getter 方法，当给对象的属性赋值时，会触发 setter 方法。通过在这些方法中加入自定义逻辑，就可以实现数据劫持。

下面是一个简单的示例，通过定义 getter 和 setter 方法，实现对对象属性的劫持：

```
const obj = {
  name: 'Tom',
  age: 18,
}

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get() {
      console.log(`访问了 ${key} 属性`)
      return value
    },
    set(newValue) {
      console.log(`设置了 ${key} 属性为 ${newValue}`)
      value = newValue
    },
  })
})

console.log(obj.name) // 访问了 name 属性，输出 "Tom"
obj.age = 20 // 设置了 age 属性为 20
console.log(obj.age) // 访问了 age 属性，输出 20
```

在上面的示例中，通过 Object.defineProperty 方法定义了 obj 对象的 name 和 age 属性的 getter 和 setter 方法，从而实现了对属性的劫持。当访问属性时，会输出相应的信息，并返回属性的值；当给属性赋值时，会输出相应的信息，并更新属性的值。

通过数据劫持，可以实现一些高级特性，例如数据绑定、观察者模式等。例如，可以在 setter 方法中加入通知逻辑，当属性的值发生变化时，自动通知相关的组件进行更新。

#### 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。

在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用 Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法。

#### 发布者-订阅者模式是什么？

**发布者-订阅者模式**（Publisher-Subscriber Pattern）是一种设计模式，用于解决应用程序中的事件处理问题。它包括两个主要组件：发布者和订阅者。发布者发布事件，订阅者订阅事件并在事件发生时得到通知并执行相应的处理。这个模式可以使应用程序组件之间的通信变得更加灵活。

具体来说，发布者-订阅者模式中，发布者会维护一个事件列表，订阅者可以向发布者订阅事件，并指定在事件发生时需要执行的处理函数。当事件发生时，发布者会通知所有订阅者，并执行相应的处理函数。

这个模式在前端开发中比较常见，例如在使用 Vue.js 框架时，可以通过在组件之间建立发布者-订阅者关系，实现组件之间的通信。又如在使用 Node.js 框架时，可以使用 EventEmitter 类实现发布者-订阅者模式，来处理事件。

在实现发布者-订阅者模式时，需要考虑事件的订阅和发布的实现。通常，可以使用观察者模式来实现发布者-订阅者模式，即让订阅者成为发布者的观察者，以实现事件的订阅和发布。另外，也可以使用事件总线等工具来实现该模式。

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