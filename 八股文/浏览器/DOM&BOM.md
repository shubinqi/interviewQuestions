<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-07 04:26:17
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-07 04:34:06
 * @Description: 八股文：DOM 和 BOM（8题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\浏览器\DOM&BOM.md
-->

#### DOM 是什么？BOM 是什么？

DOM 和 BOM 是 Web 浏览器中两个重要的组成部分：

1. **DOM（Document Object Model）**: 指的是用于访问和操作 HTML 或 XML 文档的编程接口。DOM 将文档解析为一个由节点和对象（包含属性和方法）组成的结构集合。开发人员可以使用 DOM API 来操纵页面上的元素，比如添加、修改、删除等操作。在 JavaScript 中，可以通过 document 对象来访问 DOM。
1. **BOM（Browser Object Model）**: 指的是与浏览器窗口进行交互的编程接口。它包括浏览器窗口和框架对象，提供了与浏览器交互的方法和接口，比如弹出新窗口、移动、缩放窗口、获取屏幕尺寸等。在 JavaScript 中，可以通过 window 对象来访问 BOM。

简而言之，DOM 是操作网页元素的 API，而 BOM 是与浏览器窗口交互的 API。

#### Window 对象由哪几个对象构成？

在浏览器中，Window 对象由以下几个对象构成：

1. **Document 对象**：代表当前窗口或标签页中的文档，提供了操作文档的方法和属性；
1. **Location 对象**：代表当前文档的 URL 信息，提供了访问和操作 URL 的方法和属性；
1. **Navigator 对象**：包含了浏览器的信息，提供了访问浏览器相关信息的方法和属性；
1. **History 对象**：代表当前窗口的浏览历史记录，提供了访问和操作浏览器历史记录的方法和属性；
1. **Screen 对象**：代表当前窗口的屏幕信息，提供了访问和操作屏幕相关信息的方法和属性；

#### DOM 的节点类型有哪几种？

在 Web 开发中，DOM（文档对象模型）提供了一种用于访问和操作文档内容的方式。DOM 是一种独立于任何编程语言的 API，它用一组对象来表示 HTML 或 XML 文档，并提供一组方法来访问和修改这些对象。

DOM 的类型通常分为以下几种：

1. **元素节点（element node）**：表示 HTML 元素，如&lt;div&gt;、&lt;p&gt;、&lt;ul&gt;等，是 DOM 树中最常见的节点类型。
1. **文本节点（text node）**：表示 HTML 文本内容，如&lt;p&gt;some text&lt;/p&gt;中的 some text，也是 DOM 树中常见的节点类型。
1. **属性节点（attribute node）**：表示 HTML 元素的属性，如&lt;div class="wrapper"&gt;中的 class 属性，也是 DOM 树中的节点类型。
1. **注释节点（comment node）**：表示 HTML 文档中的注释，如&lt;!-- This is a comment --&gt;，在 DOM 树中也是一种节点类型。
1. **文档节点（document node）**：表示整个 HTML 文档，每个文档只有一个文档节点。

#### 创建和插入 DOM 节点有哪些方式？

在 HTML 页面中插入 DOM 节点有以下几种方式：

1. **appendChild() 方法**：将新节点插入到父节点的子节点列表末尾；
1. **insertBefore() 方法**：将新节点插入到指定节点的前面；
1. **replaceChild() 方法**：替换指定节点的一个子节点；
1. **innerHTML 属性**：设置节点的 HTML 内容；
1. **outerHTML 属性**：替换整个节点，包括其所有子节点；
1. **createDocumentFragment() 方法**：创建一个文档片段，可以在其中插入节点，然后再将文档片段插入到页面中；
1. **createElement() 方法**：创建一个新的元素节点；
1. **createTextNode() 方法**：创建一个包含文本的新文本节点。

#### 删除节点有哪些方式？

删除节点的方式有以下几种：

1. **removeChild()**：通过父节点来删除子节点。
1. **parentNode.removeChild()**：通过子节点的父节点来删除子节点。
1. **replaceChild()**：通过父节点来替换子节点。
1. **innerHTML**：直接删除节点的 HTML 内容。
1. **outerHTML**：直接删除节点的 HTML 内容和节点本身。
1. **empty**：清空节点的所有子节点。

#### 获取元素节点有哪几种方式？

获取元素节点的方式有多种，以下是其中几种常见的方式：

1. 通过 id 属性获取元素节点：document.getElementById("elementId");
1. 通过标签名获取元素节点：document.getElementsByTagName("tagName");
1. 通过类名获取元素节点：document.getElementsByClassName("className");
1. 通过 CSS 选择器获取元素节点：
   - document.querySelector("selector");
   - document.querySelectorAll("selector");
1. 通过自定义属性获取元素节点：
   - document.querySelectorAll("\[attributeName=attributeValue]");

通过 id 属性获取元素节点

```
const element = document.getElementById("elementId");
```

通过标签名获取元素节点

```
const elements = document.getElementsByTagName("tagName");
```

通过类名获取元素节点

```
const elements = document.getElementsByClassName("className");
```

通过 CSS 选择器获取元素节点

```
const element = document.querySelector("selector");
const elements = document.querySelectorAll("selector");
```

其中 querySelector 方法返回的是匹配到的第一个元素节点，querySelectorAll 方法返回的是所有匹配到的元素节点。

通过自定义属性获取元素节点

```
const elements = document.querySelectorAll("[attributeName=attributeValue]");
```

其中 attributeName 是自定义属性的名称，attributeValue 是自定义属性的值。

除了上述方式，还可以通过 DOM 的父子、兄弟等关系进行节点遍历来获取元素节点。

#### DOM 中获取坐标的属性有哪些，它们有什么不同？

在 DOM 中获取坐标的属性有以下几种：

1. **clientX** 和 **clientY**: 鼠标点击位置相对于浏览器窗口视口（viewport）的 X 和 Y 坐标，不包括窗口滚动条的距离。
1. **pageX** 和 **pageY**: 鼠标点击位置相对于整个页面文档（document）的 X 和 Y 坐标，包括窗口滚动条的距离。
1. **screenX** 和 **screenY**: 鼠标点击位置相对于电脑屏幕左上角的 X 和 Y 坐标。

这些属性的主要区别在于它们所参考的坐标系统不同。在实际应用中，我们需要根据具体的需求来选择使用哪个属性。

#### 如何判断元素是否在可视区域？

判断元素是否在可视区域有多种方法，其中常见的几种方式如下：

1. **getBoundingClientRect()** 方法：getBoundingClientRect()方法可以获取元素的大小及其相对于视口的位置，该方法返回一个 DOMRect 对象，其中包含了 left、top、right、bottom、width、height 等属性。通过比较元素的位置和窗口的高度和宽度，就可以判断元素是否在可视区域内。例如：

```
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
```

2. **Intersection Observer API**：Intersection Observer API 是浏览器提供的一个新 API，它可以异步地观察目标元素和祖先元素的交叉状态。通过监听目标元素和祖先元素的交叉状态，可以判断元素是否在可视区域内。例如：

```
function isInViewport(element) {
  return new Promise((resolve, reject) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.disconnect();
          resolve(true);
        }
      });
    });
    observer.observe(element);
  });
}
```

3. **滚动事件**：通过监听窗口的滚动事件，可以判断元素是否在可视区域内。例如：

```
function isInViewport(element) {
  const top = element.offsetTop;
  const height = element.offsetHeight;
  let el = element;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  }
  return (
    top >= window.pageYOffset &&
    top + height <= window.pageYOffset + window.innerHeight
  );
}
```

需要注意的是，滚动事件会触发很多次，如果元素很多，会影响性能。因此，在实际应用中，可以使用节流函数来减少滚动事件的触发次数。

#### 如何遍历输出页面中的所有元素？

遍历输出页面中的所有元素可以使用递归来实现，递归函数遍历节点时，需要处理节点本身以及它的子节点。可以使用 childNodes 属性获取子节点，使用 nodeType 属性来判断节点类型。

下面是一个简单的示例代码：

```
function traverseDOM(element) {
  console.log(element); // 处理当前节点

  // 遍历子节点
  const childNodes = element.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];
    if (childNode.nodeType === 1) { // 判断节点类型是否为元素节点
      traverseDOM(childNode); // 递归遍历子节点
    }
  }
}

// 调用遍历函数，传入整个文档的根节点
traverseDOM(document.documentElement);
```

在实际应用中，需要根据具体需求进行修改，例如可以添加条件判断、过滤掉一些不需要的节点等等。

#### 常见 DOM 事件？

常见的 DOM 事件有：

1. **click**：当鼠标单击某个元素时触发。
1. **dblclick**：当鼠标双击某个元素时触发。
1. **mouseover**：当鼠标移动到元素上方时触发。
1. **mouseout**：当鼠标移出元素时触发。
1. **mousedown**：当鼠标在元素上按下时触发。
1. **mouseup**：当鼠标在元素上释放时触发。
1. **keydown**：当键盘上的键被按下时触发。
1. **keyup**：当键盘上的键被释放时触发。
1. **load**：当页面或图像加载完成时触发。
1. **unload**：当页面或图像卸载时触发。
1. **submit**：当表单提交时触发。
1. **change**：当表单元素的值被改变时触发。
1. **resize**：当窗口大小被改变时触发。
1. **scroll**：当页面被滚动时触发。

除了以上常见的 DOM 事件，还有很多其他的事件，如 touchstart、touchmove、touchend 等移动端触摸事件，以及一些 HTML5 新增的事件，如 drag、drop、canvas、audio、video 等事件。

#### 怎么绑定事件？

在 JavaScript 中，我们可以通过添加事件监听器来绑定事件。事件监听器可以通过以下方式添加：

通过 HTML 属性添加事件监听器：

```
<button onclick="handleClick()">Click me</button>
```

通过 DOM 对象的 addEventListener() 方法添加事件监听器：

```
const button = document.querySelector('button');
button.addEventListener('click', handleClick);
```

在这里，handleClick 是一个事件处理函数，它将在按钮被点击时被调用。

通过 jQuery 的 on() 方法添加事件监听器：

```
const button = $('button');
button.on('click', handleClick);
```

在这里，handleClick 是一个事件处理函数，它将在按钮被点击时被调用。

需要注意的是，事件处理函数的命名应该清晰明了，且不能与全局变量名冲突。

#### 怎么解绑事件？

解绑事件是指从元素上移除一个已经绑定的事件处理函数，使该函数不再响应事件。可以通过以下几种方式解绑事件：

通过 removeEventListener() 方法解绑事件。该方法接受三个参数：事件类型、要解绑的函数、是否在捕获阶段执行。示例代码如下：

```
// 绑定事件
element.addEventListener('click', myFunction);

// 解绑事件
element.removeEventListener('click', myFunction);
```

通过将事件处理函数设为 null 来解绑事件。示例代码如下：

```
// 绑定事件
element.onclick = myFunction;

// 解绑事件
element.onclick = null;
```

需要注意的是，通过这种方式解绑事件只适用于通过属性绑定的事件处理函数，而对于通过 addEventListener() 方法绑定的事件处理函数，需要使用 removeEventListener() 方法来解绑。

通过事件委托来解绑事件。事件委托是指将事件处理函数绑定到父元素上，由父元素代理处理子元素的事件。这种方式可以避免频繁地绑定和解绑事件处理函数，提高性能。示例代码如下：

```
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

JS 代码：

```
const list = document.getElementById('myList');

// 绑定事件
list.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    console.log('Clicked item: ' + e.target.textContent);
  }
});

// 解绑事件
list.removeEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    console.log('Clicked item: ' + e.target.textContent);
  }
});
```

需要注意的是，如果要解绑事件，传给 removeEventListener() 方法的函数必须是和绑定时使用的同一个函数。

#### event 对象有哪些属性？

在 JavaScript 中，event 对象表示当前发生事件的状态。它是由浏览器自动创建的，并传递给事件处理程序。

常用的 event 对象属性有：

1. **type**：事件类型，例如 "click"、"keydown" 等等。
1. **target**：事件发生的元素。
1. **currentTarget**：事件绑定的元素。
1. **bubbles**：指示事件是否会向上传播到祖先元素。
1. **cancelable**：指示事件是否可以被取消。
1. **preventDefault()**：取消事件的默认行为。
1. **stopPropagation()**：停止事件的传播。

还有其他一些属性，如 clientX、clientY、offsetX、offsetY 等等，这些属性依赖于具体的事件类型。

#### event.target 有哪些属性？

在 JavaScript 事件处理程序中，event.target 属性表示触发事件的 DOM 元素。event.target 对象拥有很多属性，下面是其中一些常用的属性：

1. **nodeName**：返回节点的名称，以大写字母形式表示。
1. **nodeValue**：返回节点的值。
1. **nodeType**：返回节点的类型，例如元素节点为 1，文本节点为 3，注释节点为 8 等。
1. **parentNode**：返回当前节点的父节点。
1. **childNodes**：返回当前节点的所有子节点，以 NodeList 对象形式返回。
1. **firstChild**：返回当前节点的第一个子节点。
1. **lastChild**：返回当前节点的最后一个子节点。
1. **previousSibling**：返回当前节点的前一个兄弟节点。
1. **nextSibling**：返回当前节点的后一个兄弟节点。
1. **attributes**：返回当前节点的属性列表，以 NamedNodeMap 对象形式返回。

这些属性可以用来获取有关事件目标的详细信息，以便更好地处理事件。
