/*
left,right모두 있을 때 swap하면 된다.
*/
var invertTree = function (root) {
  const dfs = (node) => {
    if (!node || (!node.left && !node.right)) return;
    dfs(node.left);
    dfs(node.right);
    swap(node);
  };
  dfs(root);

  return root;
};

const swap = (node) => {
  [node.left, node.right] = [node.right, node.left];
};
