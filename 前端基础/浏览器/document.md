<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-14 19:20:09
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:20:18
 * @Description: document（2题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\浏览器\document.md
-->

#### document 是什么？

在浏览器中，document 是代表当前 HTML 文档的根节点对象，它是 Document 对象的实例。它是 HTML 页面中所有元素的父节点，可以通过 document 对象来访问和操作页面中的所有元素，包括 HTML 元素、文本节点、注释节点等。

通过 document 对象可以实现对文档的访问和操作，例如：

1. **获取页面中的元素**，如 document.getElementById()、document.getElementsByTagName() 等。
1. **操作页面中的元素**，如修改元素的文本、属性、样式等，如 element.innerHTML、element.setAttribute()、element.style.color 等。
1. **创建新的元素或节点**，如 document.createElement()、document.createTextNode() 等。
1. **添加或移除元素或节点**，如 element.appendChild()、element.removeChild() 等。
1. **修改文档的标题、URL 等属性**，如 document.title、document.URL 等。

#### document 有哪些属性和方法？

属性：

1. document.doctype：它是一个对象，包含了当前文档类型 （Document Type Declaration，简写 DTD）信息。
2. document.documentElement：返回当前文档的根节点，对于 HTML 网页，该属性返回&lt;html&gt;节点。
3. document.defaultView：在浏览器中返回 window 对象
4. document.head：返回当前文档的&lt;head&gt;节点
5. document.body：属性返回当前文档的&lt;body&gt;
6. document.activeElement：返回当前文档中获得焦点的那个元素
7. document.documentURI：返回一个字符串，表示当前文档的网址。所有文档都具备的
8. document.URL：返回一个字符串，表示当前文档的网址。HTML 文档独有的。
9. document.domain：返回当前文档的域名。
10. document.lastModified：返回当前文档最后修改的时间戳，格式为字符串。
11. document.title：返回当前文档的标题，该属性是可写的。
12. document.characterSet：返回渲染当前文档的字符集，
13. document.referrer：返回一个字符串，表示当前文档的访问来源，
14. document.cookie：操作浏览器 Cookie
15. document.readyState：返回当前文档的状态，共有三种可能的值。
    - loading：加载 HTML 代码阶段（尚未完成解析）
    - interactive：加载外部资源阶段时
    - complete：加载完成时
16. document.designMode：控制当前文档是否可编辑
17. document.compatMode：返回浏览器处理文档的模式，
    可能的值为 BackCompat（向后兼容模式）和 CSS1Compat（严格模式）。
18. document.implementation：返回一个对象，用来甄别当前环境部署了哪些 DOM 相关接口。
19. document.location：返回 location 对象，提供了当前文档的 URL 信息。
    document.location 属性与 window.location 属性等价。
20. document.scripts：返回当前文档的所有脚本
21. document.styleSheets：返回一个类似数组的对象，代表当前网页的所有样式表。
22. document.links：返回当前文档所有设定了 href 属性的 a 及 area 元素。
23. document.forms：返回页面中所有表单元素 form。
24. document.images：返回页面所有图片元素
25. document.embeds：返回网页中所有嵌入对象

方法：

1. document.write()：用于向当前文档写入内容。只要当前文档还没有用 close 方法关闭，它所写入的内容就会追加在已有内容的后面。
2. document.writeln()：与 write 方法完全一致，除了会在输出内容的尾部添加换行符。
   注意，document.write 会当作 HTML 代码解析，不会转义。
   除了某些特殊情况，应该尽量避免使用 document.write 这个方法。
3. document.getElementsByTagName()：返回值是一个类似数组的 HTMLCollection 对象。返回所有指定 HTML 标签的元素，元素的变化实时反映在返回结果中。
4. document.getElementsByClassName()：返回值是一个类似数组的 HTMLCollection 对象。返回包括了所有 class 名字符合指定条件的元素，元素的变化实时反映在返回结果中。
5. document.getElementsByName()：返回一个类似数组的的对象（NodeList 对象的实例） 用于选择拥有 name 属性的 HTML 元素
6. getElementById()：返回匹配指定 id 属性的元素节点。
   这个方法只能在 document 对象上使用，不能在其他元素节点上使用。
7. document.querySelector()：接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回 null。
8. document.querySelectorAll()：返回一个 NodeList 对象，包含所有匹配给定选择器的节点。 不会实时反映元素节点的变化。但是，7 和 8 都无法选中伪元素和伪类。
9. document.createElement()：生成 HTML 元素节点
10. document.createTextNode()：用来生成文本节点，参数为所要生成的文本节点的内容。 createTextNode 方法对大于号和小于号进行转义，不对单引号和双引号转义
11. document.createAttribute()：生成一个新的属性对象节点，并返回它。参数是属性的名称。
12. document.createDocumentFragment()：生成一个 DocumentFragment 对象。 DocumentFragment 对象是一个存在于内存的 DOM 片段，但是不属于当前文档，常常用来生成较复杂的 DOM 结构，然后插入当前文档。因为 DocumentFragment 不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的 DOM 有更好的性能表现。
13. document.createEvent()：生成一个事件对象，参数是事件类型
14. document.addEventListener()：添加事件监听函数
15. document.removeEventListener()：移除事件监听函数
16. document.dispatchEvent()：触发事件
17. document.hasFocus()：返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。
18. document.createNodeIterator()：返回一个 DOM 的子节点遍历器。遍历子节点。第一个参数为遍历器的根节点，第二个参数为所要遍历的节点类型--文本节点（NodeFilter.SHOW_TEXT），
    - 元素节点-NodeFilter.SHOW_ELEMENT， 所有节点-NodeFilter.SHOW_ALL
    - nextNode 方法先返回遍历器的内部指针所在的节点，然后会将指针移向下一个节点。所有成员遍历完成后，返回 null。previousNode 方法则是先将指针移向上一个节点，然后返回该节点。
19. document.createTreeWalker()：返回一个 DOM 的子树遍历器。它遍历整个子树。第一个参数，是所要遍历的根节点，第二个参数指定所要遍历的节点类型。
20. document.adoptNode()：将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点。
21. document.importNode()：从外部文档拷贝指定节点，插入当前文档。
    它的第一个参数是外部节点，第二个参数是一个布尔值，
    表示对外部节点是深拷贝还是浅拷贝，默认是浅拷贝（false）
22. document.getSelection()：这个方法指向 window.getSelection()
23. document.open()：用于新建一个文档，供 write 方法写入内容。
24. document.close()：用于关闭 open 方法所新建的文档。一旦关闭，write 方法就无法写入内容了。
