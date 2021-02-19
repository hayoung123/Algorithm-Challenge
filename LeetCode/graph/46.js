//46. Permutations

/*
순열은 거의 외우다 싶이 했기 때문에 크게 문제는 없었던 문제.
*/
// const permute = (nums) => {
//   return permutation(nums, nums.length);
// };
// const permutation = (arr, num) => {
//   const res = [];
//   if (num === 1) return arr.map((v) => [v]);

//   arr.forEach((v, idx, originArr) => {
//     const fixNum = v;
//     const restArr = originArr.filter((v, index) => idx !== index);

//     const permutationArr = permutation(restArr, num - 1);
//     const semiRes = permutationArr.map((v) => [fixNum, ...v]);
//     res.push(...semiRes);
//   });
//   return res;
// };

const permute = (nums) => {
  const res = [];
  const go = (rest, cur = []) => {
    if (cur.length === nums.length) {
      res.push(cur);
      return;
    }

    rest.forEach((v, idx, arr) => {
      const fix = v;
      const restArr = arr.filter((_, index) => idx !== index);
      go(restArr, [...cur, fix]);
    });
  };
  go(nums);

  return res;
};
console.log(permute([1, 2, 3]));
