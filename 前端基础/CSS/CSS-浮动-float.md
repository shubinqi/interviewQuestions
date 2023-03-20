<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-14 19:30:32
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-20 19:39:06
 * @Description: CSS 浮动 float
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS-浮动-float.md
-->

### 一、什么是浮动（float）

#### 解释下浮动（float）和清除浮动（clear）？

**浮动**（float）是一种 CSS 布局技术，可以让元素脱离文档流，并让其它元素环绕在其周围。常见的应用场景包括图像和文字排版。浮动可以通过 CSS 的 float 属性来实现，可以将元素向左或向右浮动，或者取消浮动。

当一个元素浮动后，它会从文档流中脱离出来，因此它下面的元素会上移并紧贴着它的左或右边。如果浮动的元素高度不足以占满其父元素的高度，那么其父元素的高度将被忽略，从而导致布局混乱。这时候就需要清除浮动。

清除浮动（clear）是一种技术，用于解决浮动元素引起的布局问题。当一个元素需要清除浮动时，它将会自动脱离浮动状态，并使其后面的元素回到正常的布局位置。清除浮动可以通过 CSS 的 clear 属性来实现，可以将其设置为 left、right、both 或 none。其中，left 和 right 用于清除左浮动和右浮动，both 用于同时清除左右浮动，none 表示不清除浮动。

通常，我们会在包含浮动元素的父元素上添加一个空的 div，并设置 clear 属性，来清除浮动。这种做法被称为“清除浮动的祖先元素”（clearing float parent）。

需要注意的是，浮动和清除浮动都会影响元素的布局和层叠顺序，因此需要谨慎使用，并了解它们的影响。

#### 为什么要清除浮动？

由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响，为了解决这些问题，此时就需要在该元素中清除浮动。

准确地说，并不是清除浮动，而是**清除浮动后造成的影响**

### 二、清除浮动有哪几种方式

#### 第一种：额外标签法（clear: both）

是 W3C 推荐的做法：通过在浮动元素末尾添加一个空的标签例如 <div style="clear: both"></div>，或则其他标签 br 等亦可。

```
<br style="clear: both">
```

1.  优点：通俗易懂，书写方便
1.  缺点：添加许多无意义的标签，结构化较差。我只能说，W3C 你推荐的方法我不接受，你不值得拥有。

#### 第二种：父级添加 overflow 属性方法（overflow: hidden | auto）

可以给父级添加： overflow 为 hidden | auto | scroll  都可以实现。

```
overflow: hidden
```

1.  优点：代码简洁
1.  缺点：内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。

#### 第三种：使用 after 伪元素清除浮动（.clearfix:after）

```
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}       
.clearfix {
  *zoom: 1;
} /* IE6、7 专有 */
```

1.  优点：符合闭合浮动思想   结构语义化正确
1.  缺点：由于 IE6-7 不支持 :after，使用 zoom:1 触发 hasLayout。

注意：content:"."   里面尽量跟一个小点，或者其他，尽量不要为空，否则再 firefox 7.0 前的版本会有生成空格。

#### 第四种：使用 before 和 after 双伪元素清除浮动（.clearfix:before, .clearfix:after）

```
.clearfix:before, .clearfix:after {     
  content:"";    
  display:table;  /* 这句话可以触发 BFC BFC 可以清除浮动 */    
}    
.clearfix:after {    
  clear:both;    
}    
.clearfix {    
  *zoom:1;    
}
```

1.  优点：代码更简洁
1.  缺点：由于 IE6-7 不支持 :after，使用 zoom:1 触发 hasLayout。

#### 第五种：父盒子设置高度（height: 600px;）

1.  优点：一行代码解决
1.  缺点：需要知道盒子高度，且高度固定，使用范围极其有限。

#### 第六种：父元素也浮动（float: left）

1.  优点：也是一行代码解决
1.  缺点：但是父元素的父元素也会产生高度塌陷，这波属于是 KO 自己了。

#### 第七种：父元素直接设置 display: table（display: table）

1.  优点：可以触发 BFC 块格式化上下文，限制其内部元素 float 的不影响到 BFC 外面。和第四种类似
1.  缺点：使用表格元素属性解决浮动的同时，继承了表格元素的弊端。
