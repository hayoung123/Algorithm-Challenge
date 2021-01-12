/*
행렬의 곱셈에 대해 다시 공부하게만든 문제
1. 결국 arr1의 row를 하나씩 순회하면서 진한다.
2. arr2의 column을 순회
3. arr2의 row를 순회 
`tmp += arr1[i][row] * arr2[row][col]`를 한 값을 더해주어서 
arr2의 세로 한줄이 끝나면 값을 넣고 
arr2의 각줄이 끝나서 하나의 배열이 완성되면 answer에 넣어준다.
반복
*/
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const tmpArr = [];
    for (let col = 0; col < arr2[0].length; col++) {
      let tmp = 0;
      for (let row = 0; row < arr2.length; row++) {
        tmp += arr1[i][row] * arr2[row][col];
      }
      tmpArr.push(tmp);
    }
    answer.push(tmpArr);
  }
  return answer;
}
