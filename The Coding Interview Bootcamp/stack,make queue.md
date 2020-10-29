# Stack

LIFO (Last In First Out)

알고리즘에 자주 사용되는 stack이다. 재귀함수도 stack과 같은 원리로 실행된다.

```javascript
class Stack {
  constructor() {
    this.stack = [];
  }
  push(arg) {
    this.stack.push(arg);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
```

# Queue from Stack

2개의 stack 를 이용해서 Queue add,remove,peek 메소드 구현하기.

- first에서 remove, peek할 때 마다 second에 다 넘겨주고 다시 first에 넘겨오는 방식으로 구현
- constructor에 2개의 Stack을 이용해 Queue설정
- add(): first에 push return은 second에서만 이루어지기 때문에 first에는 push 해주면 된다.
- remove(): second로 옮겨온뒤 변수에 pop 저장. 바로 return하면 안되는 이유가 다시 first로 옮겨주어야 그뒤의 메소드들을 잘 수행할 수 있다.
- peek(): remove와 같은 방법으로 진행

### code

```javascript
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}
```
