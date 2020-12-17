/*
1. 숫자오 부호를 tokenize해 나눠준다.
2. signArr: 부호만 있는 배열을 통해 모든 경우의 수를 순열로 구해준다. 
3. signArr을 이용해 각 부호에 우선순위에 따라서 계산한다.
*/

function solution(expression) {
  const signFn = {
    //각 부호에 따른 함수
    '*': (num1, num2) => num1 * num2,
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2
  };
  let [arr, signArr] = tokenize(expression); //tokenize한 배열, 부호만 있는배열
  signArr = [...new Set(signArr)]; //부호 중복제거
  signArr = permutation(signArr, signArr.length); //부호의 모든 경우의수를 순열로 구함.
  let totNum = []; //각 경우의 계산결과의 합

  for (let sign of signArr) {
    const tmpArr = [...arr];
    for (let nowSign of sign) {
      for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i] === nowSign) {
          const calculated = signFn[tmpArr[i]](tmpArr[i - 1], tmpArr[i + 1]);
          tmpArr[i - 1] = calculated;
          tmpArr.splice(i, 2);
          i = i - 1;
        }
      }
    }
    totNum.push(tmpArr[0]);
  }
  totNum = totNum.map((v) => Math.abs(v));
  return Math.max.apply(null, totNum);
}
function tokenize(str) {
  let arr = [];
  let signArr = [];
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      arr.push(str.slice(start, i) * 1);
      arr.push(str[i]);
      signArr.push(str[i]);
      start = i + 1;
    }
  }
  arr.push(str.slice(start) * 1);
  return [arr, signArr];
}
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuteArr = permutation(restArr, selectNum - 1);
    const combine = permuteArr.map((v) => [fixer, ...v]);
    result.push(...combine);
  });
  return result;
}
