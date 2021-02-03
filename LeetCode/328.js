//328. Odd Even Linked List

/*
정답은 맞지만 linkedList를 잘다루는 해결법이 아니다.
linkedList를 잘 다루려면 next,next.next를 이용해서 데이터를 조작할 수 있어야 된다.
문제에 의미도 그렇지 않을까..? 라는 생각이 든다.

즉, 다시풀자.
*/
const oddEvenList = (node) => {
  const oddHead = new ListNode();
  const evenHead = new ListNode();
  let currentOdd = oddHead;
  let currentEven = evenHead;
  let cnt = 1;
  while (node) {
    if (cnt % 2 === 0) {
      currentEven.next = new ListNode(node.val);
      currentEven = currentEven.next;
    } else {
      currentOdd.next = new ListNode(node.val);
      currentOdd = currentOdd.next;
    }
    node = node.next;
    cnt++;
  }
  currentOdd.next = evenHead.next;
  return oddHead.next;
};

/*
새로 ListNode 객체를 생성해 붙이는 것보다 복잡해보여도 실제 상황에서는
이렇게 밖에 못쓰이기 때문에 이렇게 연습해야겠다.

이해를 도우는 예시 1-2-3-4-5
---------------------
even,even.next:  [2,3,4,5] [3,4,5]
odd.next.next:  [3,4,5]
even.next.next:  [4,5]
---------------------
even,even.next:  [4,5] [5]
odd.next.next:  [5]
even.next.next:  null
---------------------
*/

const oddEvenList = (node) => {
  if (!node) return node;
  let odd = node;
  let even = node.next;
  const evenHead = node.next;
  while (even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;

  return node;
};
