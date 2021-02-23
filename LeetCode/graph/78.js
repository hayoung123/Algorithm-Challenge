//78. Subsets

const subsets = (nums) => {
  const res = [];

  const go = (start = 0, arr = []) => {
    res.push(arr);
    // if (arr.length === nums) return;

    for (let i = start; i < nums.length; i++) {
      go(i + 1, [...arr, nums[i]]);
    }
  };
  go();

  return res;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
