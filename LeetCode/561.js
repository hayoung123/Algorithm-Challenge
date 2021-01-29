//Array Partition 1
/*
2개씩 짝을 지었을 때 나온 작은 값들의 총합을 구하는 문제

최대한 큰수는 큰수와 짝을 이루어서 손해를 보지 않아야 되기 때문에
정렬을 한 뒤 2개씩 자르면 된다.

아래 풀이는 오름차순으로 정렬을 한 뒤 인덱스를 0부터 +2 해주면서 값을 구해줬다.
*/

const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < nums.length; i += 2) {
    answer += nums[i];
  }
  return answer;
};
