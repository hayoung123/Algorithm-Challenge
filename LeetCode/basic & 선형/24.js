//24. Swap Nodes in Pairs

const swapPairs = (node) => {
  const head = new ListNode();
  let currentNode = head;
  while (node && node.next) {
    currentNode.next = new ListNode(node.next.val);
    currentNode = currentNode.next;
    currentNode.next = new ListNode(node.val);
    currentNode = currentNode.next;
    node = node.next.next;
  }
  if (node) currentNode.next = new ListNode(node.val);
  return head.next;
};

const swapPairs = (node) => {
  if (node && node.next) {
    const tmp = node.next;
    node.next = swapPairs(tmp.next);
    tmp.next = node;
    return tmp;
  }
  return node;
};
const swapPairs = (node) => {
  if (node === null || node.next === null) return node;
  let temp = node.next;
  node.next = temp.next;
  temp.next = node;
  node.next = swapPairs(node.next);
  return temp;
};
