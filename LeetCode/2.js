//2. Add Two Numbers

/*
코드스쿼드에서 배운 carry,sum으로 해결했다.
*/
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const head = new ListNode();
  let currentNode = head;
  while (l1 || l2) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else carry = 0;

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
  }

  if (carry) {
    currentNode.next = new ListNode(carry);
  }
  return head.next;
};
