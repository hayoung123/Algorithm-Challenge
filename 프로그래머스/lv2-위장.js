//첫 조합 시도
// reBuild() 같은 옷끼리 묶는다.(객체를 이용) => 그 옷들의 개수를 2차원배열로 매핑
// combination() 조합을 이용해 모든 조합을 구한다.
// sumElem() 조합을 이용해 구한 값을 더해서 result에 더하기
//출력

// 조합으로 하나하나 구할경우 양이 많아지면 엄청난 재귀호출로인해 callstack이 터져버린다...
//그렇기 때문에 다른 방법으로 구현해야한다.
//하지만 이문제로 조합을 많이 공부했기 때문에 좋은 시도였다고 생각한다.

function solution(clothes) {
  let res = 0;
  const clothesCnt = reBuild(clothes);
  for (let i = 1; i <= clothesCnt.length; i++) {
    const combinationArray = combination(clothesCnt, i);
    res += sumElem(combinationArray);
  }
  return res;
}
function sumElem(arr) {
  let sum = 0;
  for (let x of arr) {
    let tmp = 1;
    for (let y of x) {
      tmp *= y;
    }
    sum += tmp;
  }
  return sum;
}

combination;
function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, index, originalArr) => {
    const fixed = v;
    const restArr = originalArr.slice(index + 1);
    const combinationList = combination(restArr, selectNum - 1);
    const combineFix = combinationList.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function reBuild(clothes) {
  let obj = {};
  let clothesArray = [];
  for (let x of clothes) {
    if (obj[x[1]]) obj[x[1]].push(x[0]);
    else {
      obj[x[1]] = [];
      obj[x[1]].push(x[0]);
    }
  }
  for (let key in obj) {
    clothesArray.push(obj[key].length);
  }
  return clothesArray;
}

//풀이를 알고난 뒤 시도
// 다른사람의 풀이를 보고 처음으로 해결한 답안이다.
//안입을 경우인 0을 더해주고 마지막에 아무것도 안입는 경우를 -1 해준다.
//조합을 이용해 풀 때 이용했던 rebuild로 각 개수를 구했다.

// function solution(clothes) {
//   let result = 1;
//   const clothesCnt = reBuild(clothes);
//   for (let x of clothesCnt) {
//     result *= x + 1;
//   }
//   result--;
//   return result;
// }

// function reBuild(clothes) {
//   let obj = {};
//   let clothesArray = [];
//   for (let x of clothes) {
//     if (obj[x[1]]) obj[x[1]].push(x[0]);
//     else {
//       obj[x[1]] = [];
//       obj[x[1]].push(x[0]);
//     }
//   }
//   for (let key in obj) {
//     clothesArray.push(obj[key].length);
//   }
//   return clothesArray;
// }

//개수만 구하면 되기 때문에 삼항연산자로 훨씬 깔끔하게 됐고,
//Object.values메소드를 이용해 개수만 배열로 잘 매핑할 수 있었다.
//구한 개수 배열로 공식을 이용해 해결
function solution(clothes) {
  let result = 1;
  let obj = {};
  for (let x of clothes) {
    obj[x[1]] = obj[x[1]] ? obj[x[1]] + 1 : 1;
  }
  const countList = Object.values(obj);
  countList.forEach((v) => (result *= v + 1));
  return result - 1;
}
// 너무 깔끔한 답안
//reduce 를 이용해 객체에 값(개수)을 넣고, Object.value 메소드를 이용해 array로 만든다.
//그후 reduce로 곱해주고 1을 뺀다.
//어떻게 하면 이렇게 reduce를 잘활용할까 대단하다.
//많이 쓰려고 노력해야겠다.
function solution(clothes) {
  const valueList = Object.values(
    clothes.reduce((obj, curr) => {
      obj[curr[1]] = obj[curr[1]] ? obj[curr[1]] + 1 : 1;
      return obj;
    }, {})
  );
  return valueList.reduce((prev, curr) => prev * (curr + 1), 1) - 1;
}
