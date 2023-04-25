<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:32:32
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:10:13
 * @Description: 队列-Queue
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\队列-Queue.md
-->

#### JS 队列

JS（JavaScript）队列是一种数据结构，具有先进先出（FIFO）的特点，即元素按照添加的先后顺序出队。JS 中的队列常用于异步编程中的任务队列，事件队列等场景。常用的队列操作有以下几个：

1. enqueue(): 将元素添加到队尾；
1. dequeue(): 从队头移除元素；
1. peek(): 获取队头元素；
1. size(): 获取队列长度；
1. isEmpty(): 判断队列是否为空。

JS 队列可以通过 Array 对象来实现，如下所示：

```
// 创建一个空队列
let queue = [];

// 入队
queue.push(1);
queue.push(2);
queue.push(3);

// 出队
let front = queue.shift(); // front = 1
```

需要注意的是，JS 数组同时也是一个栈，可以使用 push 和 pop 方法实现栈的操作。但推荐根据实际需求选择使用栈或队列来实现对应的数据结构。
