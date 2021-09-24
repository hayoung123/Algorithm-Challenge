//dfs의 반환 값은 내 하위 subtree의 개수
var isBalanced = function (root) {
  const dfs = (node, depth) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }

    return 1 + Math.max(left, right);
  };

  return dfs(root) !== -1;
};
