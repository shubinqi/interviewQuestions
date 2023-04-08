<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 12:25:20
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-10 16:22:26
 * @Description: Lodash（3题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Tool\Store\Lodash.md
-->

#### Lodash 是什么？有什么优缺点？

Lodash 是一个流行的 JavaScript 实用工具库，提供了大量的函数和工具类，用于简化 JavaScript 编程中的常见任务。Lodash 支持链式调用，可以让开发者更加便捷地进行数据操作、函数处理、对象处理、集合处理等。Lodash 的源代码开放并遵循 MIT 许可证，可以免费使用、修改和分发。

优点：

1. **功能丰富**：Lodash 提供了大量的实用函数和工具类，可以让开发者更加便捷地进行数据操作、函数处理、对象处理、集合处理等，减少了开发的工作量和时间。
1. **高性能**：Lodash 的代码经过了优化和压缩，运行速度快，并且提供了一些性能优化的方法，如使用缓存、避免不必要的计算等。
1. **安全可靠**：Lodash 的代码经过了大量的测试和验证，可以保证其质量和安全性。
1. **跨浏览器兼容性**：Lodash 可以在各种浏览器和环境中运行，保证了其跨平台和跨浏览器的兼容性。

缺点：

1. **体积较大**：Lodash 库的体积较大，尤其是在使用了全部函数的情况下，会占用一定的资源和带宽。
1. **可能会引入不必要的函数**：Lodash 提供了大量的函数，但有时候只需要其中的一部分，使用全部函数可能会导致引入一些不必要的函数，从而增加代码量和复杂度。

总的来说，Lodash 是一个非常实用的 JavaScript 工具库，提供了丰富的函数和工具类，可以大大简化 JavaScript 编程中的常见任务。它的优点是功能丰富、高性能、安全可靠、跨浏览器兼容性好，缺点是体积较大，可能会引入不必要的函数。

#### Lodash 有什么常用函数？

Lodash 提供了大量的函数和工具类，这里列举一些常用的函数：

1. **\_.get(object, path, [defaultValue])**：获取对象中指定路径的值，如果值不存在，则返回默认值。
1. **\_.set(object, path, value)**：设置对象中指定路径的值。
1. **.map(collection, [iteratee=.identity])**：对集合中的每个元素执行指定的函数，并返回处理后的结果。
1. **.filter(collection, [predicate=.identity])**：遍历集合中的每个元素，对元素执行指定的函数，将返回值为 true 的元素放入一个新的数组中。
1. **.reduce(collection, [iteratee=.identity], [accumulator])**：遍历集合中的每个元素，对元素执行指定的函数，将函数的返回值累加到累加器中，并返回最终的累加结果。
1. **.sortBy(collection, [iteratees=[.identity]])**：按照指定的迭代函数对集合中的元素进行排序，并返回排序后的新数组。
1. **\_.isEqual(value, other)**：比较两个值是否相等，包括对象、数组、日期、正则表达式等。
1. **\_.debounce(func, [wait=0], [options={}])**：创建一个延迟执行函数，用于处理需要等待一段时间后才执行的函数。
1. **\_.throttle(func, [wait=0], [options={}])**：创建一个节流函数，用于限制函数的调用频率，防止过于频繁的调用。
1. **\_.clone(value)**：创建一个浅拷贝的值，用于复制对象或数组。

以上列举的函数只是 Lodash 中的一部分常用函数，Lodash 提供了大量的函数和工具类，可以根据具体需求选择使用。
