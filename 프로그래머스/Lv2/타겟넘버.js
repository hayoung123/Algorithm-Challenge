/*
dfs로 해결.
1. 각 층에서 더했을경우
2, 뺐을경우를 구하면된다.
*/
function solution(numbers, target) {
  function dfs(i, sum) {
    if (i === numbers.length) {
      if (sum === target) answer++;
    } else {
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum - numbers[i]);
    }
  }
  let answer = 0;
  dfs(0, 0);
  return answer;
}
