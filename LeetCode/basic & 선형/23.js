//23. Merge k Sorted Lists

/*
생각하기 쉬운 방법
모든 value를 배열에 담아서 배열을 정렬해서 다시 linked-list로 만드는 방법이다. 
*/
var mergeKLists = function (lists) {
  const arr = [];
  const head = new ListNode();
  let currentNode = head;
  for (let list of lists) {
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  }
  arr.sort((a, b) => a - b);

  arr.forEach((v) => {
    currentNode.next = new ListNode(v);
    currentNode = currentNode.next;
  });

  return head.next;
};

/*
책에 내용은 heap이라는 것을 아직 잘 몰라서 이해가 되지 않았다. 
leetcode에 나온 답변 예시를 한번 구현할 것이다.

mergeTwoList => 2개의 링크드 리스트를 오름차 순으로 만드는 함수
mergeKLists
=> linked-list들이 있는 lists를 앞에서부터 꺼내서 mergeTwoList하고 뒤에 넣어준다. 
lists의 길이가 1이 되면 종료하고 출력한다. 
*/

const mergeTwoList = (a, b) => {
  const head = new ListNode();
  let currentNode = head;
  while (a && b) {
    if (a.val < b.val) {
      currentNode.next = a;
      a = a.next;
    } else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next;
  }

  if (a) currentNode.next = a;
  else currentNode.next = b;

  return head.next;
};

const mergeKLists = (lists) => {
  if (!lists.length) return null;
  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const mergedList = mergeTwoList(a, b);
    lists.push(mergedList);
  }
  return lists[0];
};

/*
- mergeTwoList 
위의 풀이와 같이 2개의 링크드리스트를 오름차순으로 합치는 문제이다. 
재귀형식으로 이루어진다. left,right의 val을 비교해 작은 쪽의 next에 mergeTwoList()하는 형식이다. 
left,right 둘중 하나가 null이 될 때까지 진행하기 때문에 재귀의 종료 조건이다. 

- helper
링크드리스트를 mergeTwoList함수를 이용해서 병합정렬 하는 함수이다. 
절반을 자르고 left,right로 나눠서 병합정렬을 진행한다. 

*/
function mergeTwoList(left, right) {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}
//prettier-ignore
function helper(lists, start, end) {
  if (start === end) { //lists의 길이가 1일 때
    return lists[start];
  } else if (start < end) {
    const mid = parseInt((start + end) / 2); //parseInt는 내림이 된다. 
    const left = helper(lists, start, mid);
    const right = helper(lists, mid + 1, end);
    return merge(left, right);
  } else {
    return null;
  }
}

var mergeKLists = function (lists) {
  return helper(lists, 0, lists.length - 1);
};

/*
느낀점

leetcode의 추천된 풀이를 보면 많이 놀랍다.
아직도 재귀형태가 나오면 편하게 이해하지는 못하는 것같다. 
병합정렬을 예전에 봤던적이 있어서 그나마 이해가 수월했다고 생각된다. 
내가 공부했던 정렬을 알고리즘 풀 때 저렇게 활용할 수 있는 능력을 기르고 싶다는 생각이든다. 

*/
