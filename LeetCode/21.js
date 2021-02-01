//21. Merge Two Sorted Lists

/*
l1,l2의 현재 노드를 비교하여 쌓은 뒤
남은 l1 또는 l2를 뒤에 붙여서 출력

여기서 포인트는 head를 남겨두어서 출력할 때 head를 이용하는 것이다.
*/

const mergeTwoLists = (l1, l2) => {
  const head = new ListNode();
  let currentNode = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      currentNode.next = new Node(l1.val);
      l1 = l1.next;
    } else {
      currentNode.next = new Node(l2.val);
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  if (l1) currentNode.next = l1;
  else currentNode.next = l2;

  return head.next;
};

/*
재귀를 통해서 해결하는 법
l1에 뒤에 쌓는 형식으로 해서 최종적으로 l1을 반환한다.

l1을 기준으로 하기 때문에 l1에는 항상 현재 노드가 작은 링크드리스트가 들어와야 된다.

즉 l1이 비어있거나, l1.val>l2.val이면 
l1을 작은 value를 갖는 링크드리스트로 바꿔준다.

그리고 l1이 있다면 재귀를 돌려준다. 이곳에는 뒤에 정렬된 l1이 들어올 것이다.

결국 정렬된 l1을 반환한다.

결국 mergeTwoLists는 l1,l2가 비어있을 때 까지 재귀를 타고 들어간 뒤
뒤에서부터 하나씩 반환된 l1을 쌓아서 최종적으로 l1을 만드는 것이다.
*/
const mergeTwoLists = (l1, l2) => {
  if (!l1 || (l2 && l1.val > l2.val)) {
    [l1, l2] = [l2, l1];
  }
  if (l1) {
    l1.next = mergeTwoLists(l1.next, l2);
  }
  return l1;
};
