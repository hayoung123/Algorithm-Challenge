function solution(n, times) {
  var answer = 0;
  const turns = times.map((v) => ({ time: v, currTime: v }));
  n -= times.length;
  while (n > 0) {
    turns.sort((a, b) => a.time + a.currTime - (b.time + b.currTime));
    while (n > 0 && turns[0].currTime <= 0) {
      turns[0].currTime = turns[0].time;
      turns.sort((a, b) => a.time + a.currTime - (b.time + b.currTime));
      n--;
    }
    if (n === 0) {
      answer += Math.max(...turns.map((v) => v.currTime));
      break;
    }
    let minusNum = 0;
    for (const { time, currTime } of turns) {
      if (currTime === 0) continue;
      minusNum = currTime;
      break;
    }
    turns.forEach((v) => {
      if (v.currTime - minusNum <= 0) v.currTime = 0;
      else v.currTime = v.currTime - minusNum;
    });
    answer += minusNum;
  }
  return answer;
}

console.log(solution(10, [1, 5]));
