//dfs풀이 시간초과
function solution(land) {
  let answer = new Set();

  const dfs = (arr, sum = 0) => {
    if (!arr.length) {
      return answer.add(sum);
    } else {
      for (let i = 0; i < arr[0].length; i++) {
        sum += arr[0][i];
        const restArr = arr.slice(1).map((v) => [...v]);
        if (restArr.length) restArr[0][i] = 0;
        if (arr[0][i] === 0) continue;
        else dfs(restArr, sum);
        sum -= arr[0][i];
      }
    }
  };
  dfs(land);

  return Math.max(...answer);
}

//dp로 맞게 푼건지는 모르겠지만 dp배우고 푼 풀이
function solution(land) {
  let answer = land.shift();
  for (let i = 0; i < land.length; i++) {
    tmpAnswer = [];
    for (let j = 0; j < 4; j++) {
      const tmp = answer.filter((v, idx) => idx !== j);
      tmpAnswer.push(Math.max(...tmp) + land[i][j]);
    }
    answer = tmpAnswer;
  }
  return Math.max(...answer);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1]
  ])
);
