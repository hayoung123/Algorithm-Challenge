# Linked Link

## 설명

linked Node에 관한 메소드를 만드는 챕터이다.

```javascript
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    // const node = new Node(data, this.head);
    // this.head = node;
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() {
    let previous = this.head;
    if (!previous) return;
    let node = previous.next;
    if (!node) {
      this.head = null;
      return;
    }
    while (node) {
      if (!node.next) {
        previous.next = null;
        return;
      } else {
        previous = node;
        node = node.next;
      }
    }
  }
}
```
