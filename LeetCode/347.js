//347. Top K Frequent Elements

/*
nums를 순회하면서 각 숫자의 객수를 numCount객체에 key-value로 저장한다. 

저장한 numCount를 entries로 배열로 변환한 뒤 개수를 오름차순으로 정렬한다. 

k 수 만큼 answer배열에 넣어준다. 
*/

const topKFrequent = (nums, k) => {
  const answer = [];
  const numCount = {};

  nums.forEach((num) => {
    if (numCount[num]) numCount[num]++;
    else numCount[num] = 1;
  });

  const numCountEntries = Object.entries(numCount).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    answer.push(numCountEntries[i][0]);
  }

  return answer;
};
