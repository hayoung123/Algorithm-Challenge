/*
N/2와 Set의 차이를 비교해 출력

*/

function solution(nums) {
  const select = Math.floor(nums.length / 2);
  const numsSet = new Set(nums);
  if (select <= numsSet.size) return select;
  else return numsSet.size;
}
