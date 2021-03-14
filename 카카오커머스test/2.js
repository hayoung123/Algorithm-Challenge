function solution(m, v) {
  var answer = [];
  for (let block of v) {
    if (!answer.length) {
      answer.push(block);
      continue;
    }
    for (let i = answer.length - 1; i >= 0; i--) {
      if (m - answer[i] < block) {
        if (i === answer.length - 1) answer.push(block);
        else answer[i + 1] = answer[i + 1] + block;
        break;
      } else if (i === 0) answer[i] = answer[i] + block;
      else continue;
    }
  }
  return answer.length;
}

const k = [];

console.log(solution(4, k));
