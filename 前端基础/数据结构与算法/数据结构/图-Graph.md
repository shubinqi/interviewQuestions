<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:33:50
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:20:09
 * @Description: 图-Graph
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\图-Graph.md
-->

#### JS 图

在 JavaScript 中，可以使用邻接表来表示图。图是由节点和边构成的一种数据结构，在计算机科学中广泛应用于各种算法中。邻接表是一种表示图的方式，它将每个节点与其相邻的节点列表联系起来。在 JavaScript 中，可以使用一个对象来表示邻接表。

在邻接表中，每个节点都表示为邻接列表中的一个键（key），并关联到一个值（value）数组，该数组包含与节点相邻的节点：

```
{
  "节点 1": ["节点 2", "节点 3", ...],
  "节点 2": ["节点 5", "节点 6", ...],
  ...
}
```

接下来我们将通过一个示例代码来说明如何在 JavaScript 中实现邻接表：

```
// 创建图
function Graph() {
  this.adList = {};
}

// 添加节点
Graph.prototype.addNode = function(node) {
  if (!this.adList[node]) {
    this.adList[node] = [];
  }
};

// 添加边
Graph.prototype.addEdge = function(node1, node2) {
  this.adList[node1].push(node2);
  this.adList[node2].push(node1);
};

// 遍历图
Graph.prototype.traverse = function(node, callback, visited = {}) {
  if (!visited[node]) {
    visited[node] = true;
    callback(node);
    this.adList[node].forEach((neighbor) => {
      this.traverse(neighbor, callback, visited);
    });
  }
};
```

上述代码中我们首先定义了 Graph 类，用于表示图。在 Graph 类中，我们定义了 addNode 方法和 addEdge 方法用于添加节点和添加边。addNode 方法检查指定的节点是否已经存在于邻接表中，如果不存在则将其添加（为了方便，我们可以将节点的名称作为其在邻接表中的键）。addEdge 方法则在邻接表中添加两个节点之间的连接。

在 Graph 类中，我们还定义了 traverse 方法，用于遍历图中的节点。traverse 方法接收一个回调函数作为参数，用于处理遍历过程中的节点值。traverse 方法使用深度优先搜索（DFS）的方式遍历图中的节点。

下面是使用上述代码创建图对象并添加节点和边的示例：

```
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "E");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

graph.traverse("A", (node) => {
  console.log(node);
});
```

这段示例代码创建了一个图对象，并添加了五个节点和五条边。最后通过 traverse 方法遍历了该图，并按照访问顺序输出了节点的名称：

```
A
B
E
C
D
```

这说明该图是按照深度优先搜索的方式遍历的。

以上就是 JavaScript 中实现邻接表数据结构的简单示例，有了这个基础，可以使用邻接表来处理各种图算法。
