<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:33:21
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:17:46
 * @Description: 树-Tree
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\树-Tree.md
-->

#### JS 树

在 JavaScript 中，树（tree）可以通过构造函数和原型来实现。树是一种抽象的数据结构，在计算机科学中，树是由节点组成的一种层级结构。在 JavaScript 中，可以使用一个节点对象来表示树中的每个节点。

一个节点对象通常至少包括以下属性：

1. value：节点的值；
1. left：节点的左子节点；
1. right：节点的右子节点。

根据树的实现方式不同，节点对象可能还包括其他属性。

接下来我们将通过一个示例代码来说明如何在 JavaScript 中实现树：

```
// 创建节点类
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 创建树类
function Tree() {
  this.root = null;
}

// 添加节点
Tree.prototype.add = function(value) {
  const node = new Node(value);
  if (!this.root) {
    this.root = node;
  } else {
    this.addNode(node, this.root);
  }
};

// 添加节点的工具方法
Tree.prototype.addNode = function(node, parent) {
  if (node.value < parent.value) {
    if (!parent.left) {
      parent.left = node;
    } else {
      this.addNode(node, parent.left);
    }
  } else {
    if (!parent.right) {
      parent.right = node;
    } else {
      this.addNode(node, parent.right);
    }
  }
};

// 遍历树（中序遍历）
Tree.prototype.traverse = function(callback) {
  this.middleOrder(this.root, callback);
};

// 中序遍历
Tree.prototype.middleOrder = function(node, callback) {
  if (node) {
    this.middleOrder(node.left, callback);
    callback(node.value);
    this.middleOrder(node.right, callback);
  }
};
```

上述代码中我们首先定义了一个 Node 类和一个 Tree 类，分别用于表示节点和树。Node 类包含了创建一个节点所需的属性，包括节点的值（value），左子节点（left）和右子节点（right）。通过 Tree 类，我们可以创建一个树对象，该树对象包含树的根节点。

在 Tree 类中，我们定义了 add 方法，该方法用于添加节点到树中。如果根节点不存在则将新节点作为根节点，否则通过 addNode 方法将新节点添加到树中的合适位置。addNode 方法通过比较新节点的值和父节点的值来决定新节点是应该作为父节点的左子节点还是右子节点。

在 Tree 类中，我们还定义了 traverse 方法和 middleOrder 方法，用于遍历树中的节点。traverse 方法接收一个回调函数作为参数，用于处理遍历过程中的节点值。middleOrder 方法使用中序遍历的方式来遍历树中的节点，即遍历左子节点，当前节点，右子节点的顺序。

下面是使用上述代码创建树对象并添加节点的示例：

```
const tree = new Tree();

tree.add(4);
tree.add(2);
tree.add(6);
tree.add(1);
tree.add(3);
tree.add(5);
tree.add(7);

tree.traverse(value => {
  console.log(value);
});
```

这段示例代码通过 add 方法在树中添加了多个节点，并通过 traverse 方法遍历树中的节点。遍历得到的结果为：

```
1
2
3
4
5
6
7
```

这说明该树是按照节点值的大小有序排列的。

以上就是 JavaScript 中实现树数据结构的简单示例，有了这个基础，可以使用树来解决许多问题。
