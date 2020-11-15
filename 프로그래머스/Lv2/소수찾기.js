/*
처음 작성한 답안

오랫동안 해결하지 못한 문제였지만, 순열과 조합을 이해하고 작성할 수 있게 된 후에는
쉽게 구할 수 는 있었다.

순열로 모든경우 -> 1차 중복 필터 -> 소수판별 -> result에 넣기
-> result 최종 중복 필터 -> 개수 리턴 

근데 중복을 제거하기 위해 처음부터 Set을 사용했으면 조금더 간결했을 법하다.

*/
// function solution(numbers) {
//   let result = [];
//   numbers = numbers.split("");
//   for (let i = 1; i <= numbers.length; i++) {
//     let numberList = combination(numbers, i);
//     numberList = numberList.map((v) => v.join("") * "1");
//     numberList = deleteOverlap(numberList);
//     numberList = numberList.filter((v) => isDecimal(v));
//     numberList.forEach((v) => result.push(v));
//   }
//   return deleteOverlap(result).length;
// }

// function combination(arr, selectNum) {
//   const result = [];
//   if (selectNum === 1) return arr.map((v) => [v]);

//   arr.forEach((v, idx, arr) => {
//     const fixed = v;
//     const restArr = arr.filter((v, index) => index !== idx);
//     const combinationArr = combination(restArr, selectNum - 1);
//     const combineFixed = combinationArr.map((v) => [fixed, ...v]);
//     result.push(...combineFixed);
//   });
//   return result;
// }

// function isDecimal(x) {
//   if (x < 2) return false;
//   //i 의 범위를 x의 절반으로 하면 시간 감축가능
//   for (let i = 2; i <= Math.sqrt(x); i++) {
//     if (x % i === 0) return false;
//   }
//   return true;
// }

// function deleteOverlap(arr) {
//   return [...new Set(arr)];
// }

function solution(numbers) {
  let result = new Set();
  numbers = numbers.split("");
  for (let i = 1; i <= numbers.length; i++) {
    let numberList = combination(numbers, i);
    numberList = numberList.map((v) => v.join("") * "1");
    numberList.forEach((v) => result.add(v));
  }
  return [...result].filter((v) => isDecimal(v)).length;
}

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.filter((v, index) => index !== idx);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFixed = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFixed);
  });
  return result;
}

function isDecimal(x) {
  if (x < 2) return false;
  //i 의 범위를 x의 절반으로 하면 시간 감축가능
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

console.log(solution("110"));
