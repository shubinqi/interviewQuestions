<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-27 22:25:10
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-27 22:27:01
 * @Description: Performance
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\浏览器\Performance.md
-->

#### Performance API？

Performance API 是浏览器提供的一个用于性能监控的 API，它提供了一系列的方法和属性，用于获取当前网页加载性能的相关信息，包括页面加载时间、资源加载时间、JavaScript 执行时间等等。通过这些信息，可以对网站的性能进行监控和优化。

其中，Performance API 包含了两个核心对象：Performance 和 PerformanceEntry。

Performance 对象包含了一系列的方法和属性，用于获取性能相关信息，如 navigationStart、connectStart、responseStart 等等。这些属性提供了各种不同的性能指标，可以用于监控页面的性能表现。

PerformanceEntry 对象则提供了一组接口，用于获取各种类型的性能信息，如 ResourceTiming、PaintTiming、LongTaskTiming 等等。每个接口都提供了不同的性能指标，可以用于监控页面的不同方面的性能表现。

通过使用 Performance API，可以深入了解网页的性能表现，并对其进行优化，从而提高用户的体验。

#### Performance 有哪些属性和方法？

Performance 是浏览器提供的一个对象，提供了一些用于测量网页性能的 API。除了 performance.timing 用于测量页面加载时间以外，performance 还提供了其他属性和方法，下面是一些常见的属性和方法：

1. performance.navigation：提供了关于页面重定向和刷新操作的信息，包括 type（导航类型）、redirectCount（重定向次数）和 unloadEventStart（前一个页面卸载的时间）等。
1. performance.memory：提供了与内存使用相关的信息，包括 usedJSHeapSize（JavaScript 对象占用的堆内存大小）、totalJSHeapSize（堆内存大小的总量）和 jsHeapSizeLimit（堆内存大小限制）等。
1. performance.timeOrigin：返回性能测量开始的时间戳，通常是页面加载事件的发生时间。
1. performance.now()：返回当前时间相对于 performance.timeOrigin 的毫秒数，可以用于精确测量某段代码的执行时间。
1. performance.mark(name)：创建一个性能标记，用于标识某个特定的时间点，方便后续测量和分析。name 参数为标记的名称，必须是一个字符串。
1. performance.measure(name, startMark, endMark)：创建一个性能测量，用于测量两个标记之间的时间差，返回一个 PerformanceMeasure 对象。name 参数为测量的名称，必须是一个字符串；startMark 和 endMark 参数为标记的名称，用于确定测量的时间范围。
1. performance.getEntries()：返回一个包含所有已记录的性能测量和标记的数组，每个元素是一个 PerformanceEntry 对象。
1. performance.clearMarks() 和 performance.clearMeasures()：分别用于清除所有的性能标记和性能测量。

除了以上列出的属性和方法，performance 对象还提供了一些其他的属性和方法，可以根据需要进行使用。

#### Performance API 有哪些属性？

Performance API 中常见的属性包括：

1. navigation：提供了有关文档的导航和重定向过程的信息。
1. timing：提供了与文档的加载和处理相关的性能计时数据。
1. memory：提供了与内存使用情况相关的信息。
1. processor：提供了有关 CPU 核心和缓存的信息。
1. navigationTiming：提供了有关导航和文档处理时间的信息。
1. timeOrigin：提供了用于计算其他性能计时数据的基准时间。
1. performance.now()：返回当前时间戳，可用于测量性能。

这些属性可用于测量网站或应用程序的性能，并确定哪些部分需要进行优化。
