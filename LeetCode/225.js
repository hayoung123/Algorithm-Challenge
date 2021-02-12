//225. Implement Stack using Queues
/*
Queue를 이용해 Stack을 구현하는 문제이다.
push, pop, top, empty를 구현한다.

push할 때 push하고 방금 push한 값이 맨 앞으로 오게 설정해준다.
=> push한 값이 가장 앞에 오게 된다. (0번 인덱스)
=> Queue의 shift()하면 스택처럼 가장 먼저 들어온 애가 앞에 가있기 때문에 나오게 된다.

즉, push 할 때만 정렬을 해주면 나머지는 수월해진다. 

pop() : 정렬이 돼있기 때문에 shift() 하면된다. 
top() : 정렬을 해주었기 때문데 0번 인덱스다. 
empty(): 배열의 길이를 확인해보면 된다.
*/

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
  this.tmp = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift());
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
  this.tmp = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift());
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
