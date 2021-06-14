var longestUnivaluePath = function (root) {
  let max = 0;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node.left && node.left.val === node.val) left++;
    else left = 0;
    if (node.right && node.right.val === node.val) right++;
    else right = 0;

    max = Math.max(max, left + right);
    return Math.max(left, right);
  };
  dfs(root);
  return max;
};
