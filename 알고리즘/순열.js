// function combination(arr, selectNum) {
//   let result = [];
//   if (selectNum === 1) return arr.map((v) => [v]);
//   arr.forEach((num, idx, arr) => {
//     const fixNum = num;
//     const restArr = arr.slice(idx + 1);
//     const combinationArr = combination(restArr, selectNum - 1);
//     const combineFix = combinationArr.map((v) => [fixNum, ...v]);
//     result.push(...combineFix);
//   });
//   return result;
// }

// const k = combination([1, 2, 3, 4, 5], 3);

// console.log(k);

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    // const restArr = arr.slice(idx + 1);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

const k = permutation([1, 2, 2, 2, 5], 3);
console.log(k);
