//206. Reverse Linked List

/*
newNode / value: 현재노드의 value next: currentNode
위의 newNode를 새로만들면서 currentNode를 업데이트 해준다.
*/
var reverseList = function (node) {
  let currentNode = null;
  while (node) {
    const newNode = new ListNode(node.val, currentNode);
    currentNode = newNode;
    node = node.next;
  }
  return currentNode;
};

/*
아래와 같은 방법이 있다. 나는 이해가 쉽지 않았다. 
그렇기 때문에 예시를 두고 어떻게 진행되는지 알아보겠다.
ex)
head: 1-2-3-4

while 시작
1)
next = 2-3-4
head.next = null //현 head: 1-null
pre = 1-null
head = 2-3-4
2)
next = 3-4
head.next = 1-null //현 head: 2-1-null
pre = 2-1-null
head=3-4
3)
next = 4
head.next = 2-1-null //현 head: 3-2-1-null
pre = 3-2-1-null
head = 4
4)
next = null
head.next = 3-2-1-null //현 head = 4-3-2-1-null
pre = 4-3-2-1-null
head=null

stop

pre에 null부터 시작해서 차곡차곡 쌓이게 됐다.

즉, head.next를 날리고 그 자리에 pre를 넣는다.
pre에 현재 head value까지 역으로 쌓은 head를 저장한다.
head에 날린 head.next를 저장한다.

> 즉 역순으로 쌓아온 pre를 head.next에 저장하고 pre=head로 한칸 더 긴 역순을 만드는 과정이다.

위의 3줄을 반복하는 것인데 마냥 머리에 잘 들어오지는 않는것 같다.
링크드리스트를 계속 다뤄서 익숙해져야 할 것 같다.
*/
var reverseList = function (head) {
  let pre = null;
  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
