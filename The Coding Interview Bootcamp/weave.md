# Using Queue

## Combine two array

## Feedback

while문의 특성을 잘 이해하지 못하고 peek() 메소드의 의미를 잘 파악하지 못했다.

while(a||b) 는 a 와 b 둘다 undefined 될 때 break

즉, a,b 둘중 하나라도 undefined가 아닌 이상 while문은 실행 된다는 뜻!

---

## Solution

queue class 의 peek()메소드는 쉽기 때문에 index만 정리한다.

### code

```javascript
const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}
```

peek() 메소드의 용도만 잘 파악했어도 쉽게 해결할 수 있는 문제였다.
