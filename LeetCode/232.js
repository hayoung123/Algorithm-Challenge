//232. Implement Queue using Stacks

/*
내가 푼 풀이

2개의 스택을 이용했다.
push할 때만 잘 정렬해주면 된다. 
tmp에 기존의 stack을 참조시켜 놓고 stack =[] 로 초기화한다.
[]인 stack에 push(x) => [x] 로 만든다.
=> [x] 인 stack 과 기존 stack인 tmp를 concat로 붙인다. 
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [];
  this.tmp = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.tmp = this.stack;
  this.stack = [];
  this.stack.push(x);
  this.stack = this.stack.concat(this.tmp);
  this.tmp = [];
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};
