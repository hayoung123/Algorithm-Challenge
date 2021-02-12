//622. Design Circular Queue

/*
일단 내 생각에 JS는 배열의 크기가 유동적이기 때문에 그냥 풀면 큐처럼 바로 
구현할 수 있다고 생각한다. 

하지만 문제에서 요구하는 대로 front와 rear에 투 포인터를 주고 구현했다.

- enQeueu()
queue[rear]이 null이면 들어갈 자리가 있는 것이기 때문에 value를 넣어주고 
rear=(rear+1)%limit 해준다.

- deQueue()
queue[front]가 null이 아니면 지울것이 있기 때문에 null로 변경해주고
front=(front+1)%limit 해준다.

- front()
queue[front]가 null이 아니면 반환

- rear()
*책과 똑같이 구현하고 싶었지만 python은 arr[-1]이 가장 뒷 요소를 가르키지만
JS는 그렇지 않기 때문에 rear()구현이 조금더 길어지게 된다. 

rear===0일 때 queue[limit]이 null이 아니면 queue[limit] 반환
rear!==0일 때 queue[rear-1]이 null이 아니면 quque[rear-1] 반환
둘다 아닐 경우 -1

rear-1해주는 이유 : enQueue에서 rear에 값을 넣고 rear+1을 해주기 때문에 마지막 값인 queue[rear]을
반환할 때는 rear-1 해줘야한다. rear이 한바퀴 돌아 0일 때는 -1인덱스가 없기 때문에 따로 처리해주는 것이다. 

- isEmpty()
front===rear && queue[front or rear]가 null이면 모든 요소가 null이다.

- isFull()
front===rear && queue[front or rear]가 null이 아니면 모든 요소가 null이 아닌 것이다. 

---

leetcode에 JS풀이 중 currentSize를 unQueue, deQueue마다 업데이트 해줘서 구현한 방법이 있었다. 
currentSize를 이용해 비교하니까 훨씬 깔끔한 풀이가 나왔다.
또한 그 풀이에서는 어차피 순환큐이기 때문에 rear+1해주고 값을 넣는데 그렇게 하기 때문에
rear() 할 때 rear===0 비교, rear-1 같은 번거로운 일을 하지 않고 `return !currentSize ? -1 : queue[rear]`로 처리해줄 수 있었다. 

훨씬 편한 방법이라고 생각된다. 하지만 책이 정석과 같은 풀이 같이 때문에 책처럼 시도해봤다. 
*/

var MyCircularQueue = function (k) {
  this.limit = k;
  this.queue = Array(k).fill(null);
  this.front = 0;
  this.rear = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue[this.rear] === null) {
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.limit;
    return true;
  } else {
    return false;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue[this.front] === null) {
    return false;
  } else {
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.limit;
    return true;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.queue[this.front] !== null ? this.queue[this.front] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.rear === 0 && this.queue[this.limit - 1]) {
    return this.queue[this.limit - 1];
  } else if (this.queue[this.rear - 1] !== null) {
    return this.queue[this.rear - 1]; //rear는 값을 설정하고 +1을 해주기 때문에 -1을 해준 값이 진짜 rear이다.
  } else {
    return -1;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.front === this.rear && this.queue[this.front] === null;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.front === this.rear && this.queue[this.front] !== null;
};
