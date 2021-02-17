//234. Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
재귀로 타고 들어가면서 모든 노드의 value를 배열에 저장

배열과 배열 reverse를 비교해서 검사

Runtime: 88 ms, faster than 57.72% of JavaScript online submissions
 */
var isPalindrome = function (head) {
  const stack = [];
  const dfs = (node) => {
    if (!node) return;
    else {
      stack.push(node.val);
      dfs(node.next);
    }
  };
  dfs(head);

  return stack.join('') === stack.reverse().join('');
};

/*
bsf재귀보다 while문으로 보다 간결하게 작성했는데 속도가 더 느리게 나왔다.
원래 재귀보다  while문이 더 빠른 걸로 알고 있었는데 왜 그런지는 모르겠다.

Runtime: 92 ms, faster than 37.49% of JavaScript online submissions

위의 재귀를 다시 검사해보니 더 느리게 나왔다. 시도마다 다르게 나온듯하다.
통상적으로는 while문이 더 효율적인 듯하다.
*/
var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join('') === arr.reverse().join('');
};

/*
while 문으로 해결해도 속도가 느리다 reverse를 사용해서 그럴것이라고 생각하고
투포인터로 직접 배교해보겠다.

생각보다 비슷하다. 두번 시도했는데 위의 두 시도와 별차이 없었다.

투포인터로 했을 때 크게 차이가 안나는 거보면 Deque 구조를 이용해도 비슷하지 않을까?? 라는 생각을 해본다.
reverse가 그만큼 효율적일 수 도있고 문제의 테스트 값이 그정도로 큰값은 설정이 안돼있을 수도 있다.
*/

var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let lt = 0;
  let rt = arr.length - 1;

  while (lt < rt) {
    if (arr[lt] !== arr[rt]) return false;
    else {
      lt++;
      rt--;
    }
  }
  return true;
};
