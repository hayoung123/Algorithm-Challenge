/*
해결방법

1. 모든 노드를 돌면서 각 value를 수집한다.
2. value를 정렬한다.
3. NodeTreeArr: 정렬된 value를 TreeNode형태로 매핑한다. 
4. NodeTreeArr의 마지막 인덱스 -1 에서부터 0까지 돌면서 right에 뒤에 있는 값을 넣는다. 

뭔가 매우 비효율적인 코드? 뭔가 바보 같은 코드 같다. 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const nodeValue = [];
  const dfs = (node) => {
    if (!node) return;
    nodeValue.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  nodeValue.sort((a, b) => a - b);
  const nodeTreeArr = nodeValue.map((val) => new TreeNode(val, null, null));
  for (let i = nodeTreeArr.length - 2; i >= 0; i--) {
    nodeTreeArr[i].right = nodeTreeArr[i + 1];
  }
  return nodeTreeArr[0];
};

/*
leetcode 정답을 보고 수정했다. 
마지막인덱스 -1부터 반대로 하는것을 수정했다.
ex) const k = new TreeNode(0) 을 만들고 그 뒤에 쭉 붙이 뒤, return k.right 해주면 간단하게 해결

또한 sort를 따로 해줄 필요 없었다. 
문제에 주어진 tree를 보면 dfs의 중위순회로 번호가 매겨져 있다. 
그러므로 중위순회처럼 push 해주면 따로 sort할 필요가 없다.
*/

var increasingBST = function (root) {
  const nodeValue = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    nodeValue.push(node.val);
    dfs(node.right);
  };
  dfs(root);

  const treeNode = new TreeNode(0);
  let currentNode = treeNode;

  for (let x of nodeValue) {
    currentNode.right = new TreeNode(x, null, null);
    currentNode = currentNode.right;
  }

  return treeNode.right;
};

const dfs = (node) => {
  if (!node) return;
  else {
    dfs(node.left);
    nodeValue.push(node.val);
    dfs(node.right);
  }
};
