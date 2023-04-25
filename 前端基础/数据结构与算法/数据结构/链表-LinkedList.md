<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-19 14:32:47
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-25 23:23:51
 * @Description: 链表-LinkedList
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\数据结构与算法\数据结构\链表-LinkedList.md
-->

#### JS 链表

在 JavaScript 中，链表（linked list）是一种基本数据结构，它由一组节点组成，每个节点包含两个元素：一个是存储的值，另一个是指向下一个节点的指针（或者称为链接）。

链表的一个主要优势在于它可以动态地增长或缩小，因为每个节点只是存储了其值和指向下一个节点的指针，所以我们可以不用事先确定链表的大小，直接根据需求添加/删除节点就好了。

下面是一个简单的链表实现示例：

```
// 链表节点类
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 链表类
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 在链表末尾添加元素
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // 空链表
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 非空链表，将新节点接到末尾
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // 在链表指定位置插入元素
  insert(position, value) {
    if (position >= 0 && position <= this.length) {
      const newNode = new Node(value);

      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let previous = null;
        let index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = newNode;
        newNode.next = current;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  // 从链表中删除指定位置的元素
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;

      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          // 特殊情况：只有一个元素
          this.tail = null;
        }
      } else {
        let previous = null;
        let index = 0;

        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = current.next;
        if (position === this.length - 1) {
          // 特殊情况：删除最后一个元素
          this.tail = previous;
        }
      }
      this.length--;
      return current.value;
    }
    return null;
  }

  // 将链表所有元素转为字符串
  toString() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ");
  }
}
```

这个示例中，我们使用 ES6 的类语法定义了 Node 和 LinkedList 两个类。其中，Node 代表链表中的节点，其中包括存储的值和指向下一个节点的指针；LinkedList 则是链表本身。

链表的实现中，我们定义了 head 代表链表的头节点，tail 代表链表的尾节点，同时 length 表示链表中元素的个数。

其中的主要方法有：

1. **append**：在链表末尾添加一个节点，因为链表的 tail 维护了整个节点的指针，所以添加操作时只需要在 tail 后新增一个节点，然后将 tail 指向新增的节点 ��
1. **insert**：在链表的指定位置插入一个节点，需要遍历链表找到指定位置的节点，然后完成插入操作。
1. **removeAt**：从链表中删除指定位置的节点，需要遍历链表找到指定位置的节点，然后更新前后节点的指针关系。
1. **toString**：将链表转化为字符串形式，便于展示。

下面是一些使用示例：

```
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insert(1, 4);

console.log(linkedList.toString()); // 1 -> 4 -> 2 -> 3

linkedList.removeAt(1);
console.log(linkedList.toString()); // 1 -> 2 -> 3
```

以上就是 JavaScript 中链表的简单实现示例，链表的这种动态的数据结构，常常用于队列、栈等复杂数据结构的底层实现。
