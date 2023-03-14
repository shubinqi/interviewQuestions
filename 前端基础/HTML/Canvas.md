<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-06 22:05:19
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:18:02
 * @Description: Canvas（6题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\HTML\Canvas.md
-->

#### Canvas 是什么？有什么作用？

Canvas 是 HTML5 中新增的元素之一，它是一个画布，可以通过 JavaScript 在画布上绘制图形、动画、游戏等。Canvas 可以让开发人员使用 JavaScript 代码来创建和操作图形，而不需要使用其他插件或技术。

Canvas 的主要作用如下：

1. **动态图形绘制**：Canvas 可以用来绘制动态的图形，例如图表、统计图等。开发人员可以使用 JavaScript 实现动态的图形绘制，并实时更新数据。
1. **游戏开发**：Canvas 可以用来开发基于 Web 的游戏，例如 2D 平面游戏、卡片游戏等。开发人员可以使用 JavaScript 实现游戏逻辑，同时使用 Canvas 绘制游戏场景、角色等元素。
1. **图片处理**：Canvas 可以用来处理图片，例如剪切、缩放、旋转等。开发人员可以使用 JavaScript 代码来操作图片，而无需使用其他工具或软件。
1. **用户交互**：Canvas 可以用来处理用户交互，例如鼠标事件、触摸事件等。开发人员可以使用 JavaScript 监听用户交互事件，并响应相应的操作。

总的来说，Canvas 是一个功能强大的元素，可以用于绘制图形、开发游戏、处理图片等多种场景。它可以让 Web 应用程序更加丰富、交互性更强，提供更好的用户体验。

#### Canvas 和 SVG 的区别是什么？

Canvas 和 SVG 都是用于在 Web 上创建图形和动画效果的技术，它们之间的主要区别如下：

1. **技术原理不同**：Canvas 是基于位图的技术，它通过 JavaScript 操作像素来绘制图形。而 SVG 是基于矢量的技术，它使用 XML 标记语言描述图形，可以通过 CSS 样式进行样式控制。
1. **绘图方式不同**：Canvas 绘制图形是通过 JavaScript 操作像素来实现的，它的绘图方式类似于 Photoshop 中的绘图。而 SVG 绘制图形是通过描述图形的 XML 标记语言实现的，它的绘图方式类似于使用矢量软件（如 Adobe Illustrator）绘制图形。
1. **图形的处理方式不同**：Canvas 绘制的图形是位图，它的处理方式是像素级的处理。而 SVG 绘制的图形是矢量图形，它可以通过 CSS 样式进行样式控制，也可以通过 JavaScript 进行交互和控制。
1. **缩放处理方式不同**：Canvas 绘制的图形是基于像素的，它的缩放处理方式是放大或缩小像素。而 SVG 绘制的图形是基于矢量的，它的缩放处理方式是放大或缩小矢量路径，不会失真。
1. **性能表现不同**：由于 Canvas 绘制的图形是基于像素的，因此它可以处理更复杂的图形和动画效果，并且通常比 SVG 更具有实时性和响应性。而 SVG 绘制的图形更适合简单的矢量图形和可视化图表之类的。

#### Canvas 有哪些属性和方法？

Canvas 是 HTML5 中的一个标签，用于通过 JavaScript 绘制 2D 和 3D 图形。Canvas 元素本身没有很多属性，但是可以通过 JavaScript 中的 Canvas API 来操作它。

Canvas 元素的一些常见属性包括：

1. **width**：Canvas 的宽度
1. **height**：Canvas 的高度
1. **style**：Canvas 的样式属性
1. **fillStyle**：填充颜色。
1. **strokeStyle**：边框颜色。
1. **lineWidth**：边框宽度。
1. **font**：文本字体。
1. **textAlign**：文本对齐方式。
1. **textBaseline**：文本基线。

常见 Canvas API：

1. **getContext()**：获取 Canvas 上下文对象，用于后续的绘制操作，可以指定 2D 或 3D 等模式。
1. **fillRect()**：绘制矩形并填充颜色。
1. **strokeRect()**：绘制矩形边框。
1. **clearRect()**：清除矩形区域。
1. **fillText()**：绘制文本并填充颜色。
1. **strokeText()**：绘制文本边框。
1. **arc()**：绘制圆形或弧形。
1. **lineTo()**：绘制线段。
1. **moveTo()**：将画笔移动到指定位置。
1. **beginPath()**：开始绘制路径。
1. **closePath()**：关闭当前路径。
1. **fill()**：填充当前路径。
1. **stroke()**：绘制当前路径边框。
1. **drawImage()**：绘制图片。
1. **save()**：保存当前绘图状态。
1. **restore()**：恢复上一个保存的绘图状态。
1. **translate()**：平移坐标系。
1. **rotate()**：旋转坐标系。
1. **scale()**：缩放坐标系。

在 Canvas API 中，常用的一些属性包括：

1. **fillStyle**：设置填充颜色或渐变对象
1. **strokeStyle**：设置边框颜色或渐变对象
1. **lineWidth**：设置边框宽度
1. **lineCap**：设置边框线帽样式
1. **lineJoin**：设置边框线交汇处样式
1. **font**：设置字体样式
1. **textAlign**：设置文本对齐方式
1. **globalAlpha**：设置绘制透明度
1. **globalCompositeOperation**：设置合成操作

#### 写一个 Canvas 示例？

以下是一个简单的 Canvas 示例，它会在 Canvas 中绘制一个红色的矩形和一个绿色的圆形：

```
<canvas id="myCanvas" width="200" height="200"></canvas>

<script>
  // 获取 Canvas 上下文对象
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // 绘制红色矩形
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 50, 50);

  // 绘制绿色圆形
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.arc(100, 100, 30, 0, 2*Math.PI);
  ctx.fill();
</script>
```

在这个示例中，首先获取了 Canvas 元素的上下文对象，然后通过上下文对象的方法来绘制矩形和圆形。在绘制之前，需要先设置绘制的样式属性，例如 fillStyle 用于设置填充颜色。最后调用 fill() 方法来填充颜色并绘制出来。

#### Canvas 有哪些应用场景？

Canvas 作为一个基于 HTML5 技术的绘图 API，可以用于实现各种绘图应用，如下：

1. **游戏开发**：Canvas 可以用于绘制游戏中的角色、场景、特效等图形元素。
1. **数据可视化**：Canvas 可以用于绘制各种图表，如折线图、柱状图、饼图等，将数据转化为可视化的图形，更加直观地展示数据信息。
1. **图像处理**：Canvas 可以对图片进行裁剪、旋转、缩放、滤镜等处理，实现图像的特效效果。
1. **广告制作**：Canvas 可以用于创建动态广告，制作展示效果更好的动态广告。
1. **3D 绘图**：Canvas 通过 WebGL 技术可以实现 3D 绘图，可以用于创建 3D 场景、游戏等。

总之，Canvas 可以用于实现各种需要绘图的应用场景，具有较高的灵活性和扩展性。
