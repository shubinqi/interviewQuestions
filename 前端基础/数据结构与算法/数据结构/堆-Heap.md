<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:33:40
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:12:23
 * @Description: 堆-Heap
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\堆-Heap.md
-->

#### JS 堆

JavaScript 中的堆是一种常见的数据结构，用于动态地存储和操作数据。堆的结构是由树状结构构成的，每个节点都有一个值。堆分为大顶堆和小顶堆，大顶堆中每个节点的值都比其子节点的值大，小顶堆中每个节点的值都比其子节点的值小。

在 JavaScript 中，我们通常使用数组来表示堆，其中 0 号索引不存储实际值，真正的根节点从索引为 1 的地方开始存储。来看一下堆的主要操作：

1. 插入元素：将元素插入到数组末尾，然后进行堆操作（上滤或下滤）以维护堆的结构；
1. 删除堆顶元素：将堆顶元素与数组末尾元素交换，然后删除末尾元素，再进行堆操作（上滤或下滤）以维护堆的结构；
1. 构建堆：将一个无序数组构建成堆的结构，可以通过自下而上的下滤或自上而下的上滤来实现；
1. 堆排序：先构建堆，然后每次删除堆顶元素，将其放入新的数组中，重复此操作，直到堆为空。

堆的操作中，最耗时的是构建堆和堆排序，这两个操作都需要对每个节点进行堆操作，堆操作的时间复杂度为 log(n)，所以它们的时间复杂度都是 O(nlog(n))。

下面是一个示例代码，用来实现一个小顶堆：

```
class MinHeap {
  constructor() {
    // 用数组来存储堆
    this.heap = [];
  }

  // 获取父节点的索引
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 获取左子节点的索引
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // 获取右子节点的索引
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // 交换元素
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  // 上滤，维护堆结构，保证父节点小于子节点
  shiftUp(index) {
    // 获得父节点的索引
    const parentIndex = this.getParentIndex(index);
    // 如果当前节点比父节点小，就交换它们
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      // 递归上滤，直到堆结构满足条件为止
      this.shiftUp(parentIndex);
    }
  }

  // 下滤，维护堆结构，保证子节点大于父节点
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);
    // 获取当前节点与左右子节点中的最小值的索引
    let minIndex = index;
    if (leftIndex < this.size && this.heap[leftIndex] < this.heap[minIndex]) {
      minIndex = leftIndex;
    }
    if (rightIndex < this.size && this.heap[rightIndex] < this.heap[minIndex]) {
      minIndex = rightIndex;
    }
    // 如果当前节点不是最小值，则与最小值交换
    if (minIndex !== index) {
      this.swap(minIndex, index);
      // 递归下滤，直到堆结构满足条件为止
      this.shiftDown(minIndex);
    }
  }

  // 插入元素
  insert(value) {
    // 把新元素放在数组的最后一个位置上
    this.heap.push(value);
    // 上滤操作，让新元素上浮到合适的位置
    this.shiftUp(this.size - 1);
  }

  // 获取堆顶元素
  peek() {
    return this.size > 0 ? this.heap[0] : null;
  }

  // 删除堆顶元素
  remove() {
    // 如果堆为空就返回 null
    if (this.size === 0) return null;
    // 如果堆只有一个元素，直接返回该元素
    if (this.size === 1) return this.heap.shift();
    // 否则，获取堆顶元素并将最后一个元素放在堆顶
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    // 下滤操作，让堆顶元素下沉到合适的位置
    this.shiftDown(0);
    return root;
  }

  // 获取堆的大小
  get size() {
    return this.heap.length;
  }
}
```

这样我们就可以通过上述代码实现一个最简单的小顶堆。
