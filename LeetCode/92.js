//92. Reverse Linked List 2
/*

----------------------------------
시작tmp:  null
바뀐tmp:  [2,3,4,5]
시작start:  [1,2,3,4,5]
바뀐start:  [1,3,4,5]
시작end:  [2,3,4,5]
바뀐end:  [2,4,5]
시작start:  [1,3,4,5]
바뀐start:  [1,3,2,4,5]
----------------------------------
시작tmp:  [2,4,5]
바뀐tmp:  [3,2,4,5]
시작start:  [1,3,2,4,5]
바뀐start:  [1,4,5]
시작end:  [2,4,5]
바뀐end:  [2,5]
시작start:  [1,4,5]
바뀐start:  [1,4,3,2,5]


내 궁금증. 왜 tmp를 업데이트 해주지도 않는데 start 뒤에 tmp를 붙여서 하지??

근데 잘생각해보자. tmp에 들어있는 2 (즉 코드상 end)가 업데이트 됨에 따라서 tmp도 업데이트가 된다.

아니 이걸 어떻게 생각합니까...

그래서 tmp도 결국 하나가 줄어들게 되고... 결국잘 해결된다는 소문이.... 하.. 어렵다
*/
const reverseBetween = (node, m, n) => {
  if (!node || m === n) return node;

  const head = new ListNode();
  let start = head;
  head.next = node;

  for (let i = 1; i < m; i++) {
    start = start.next;
  }
  let end = start.next;
  let tmp = null;

  console.log('----------------------------------');
  for (let i = m; i < n; i++) {
    tmp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = tmp;
  }
  return head.next;
};
/*
  console.log('----------------------------------');
  for (let i = m; i < n; i++) {
    console.log('시작tmp: ', tmp);
    tmp = start.next;
    console.log('바뀐tmp: ', tmp);
    console.log('시작start: ', start);
    start.next = end.next;
    console.log('바뀐start: ', start);
    console.log('시작end: ', end);
    end.next = end.next.next;
    console.log('바뀐end: ', end);
    console.log('시작start: ', start);
    start.next.next = tmp;
    console.log('바뀐start: ', start);
    console.log('----------------------------------');
  }
  */
