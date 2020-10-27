# Queue

## My Code

```javascript
class Queue {
  constructor() {
    this.arr = [];
  }
  add(...arg) {
    this.arr = arg.concat(this.arr);
  }
  remove() {
    return this.arr.pop();
  }
}
```

## Solution

내 코드 : add에서 받는 argument를 spread syntax를 이용해 arg를 array로 만들고 앞에 concat으로 붙였다.

Solution 코드 : unshift라는 Queue의 First In 역할을 해주는 메소드를 사용해서 구현했다.

</br>

---

## Solution 1st

### code

```javascript
class Queue {
  constructor() {
    this.arr = [];
  }
  add(arg) {
    this.arr.unshift(arg);
  }
  remove() {
    return this.arr.pop();
  }
}
```
