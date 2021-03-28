// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];
  for await (const line of rl) {
    input.push(line);
  }
  rl.close();
  const answer = { count: 0, start: 0 };
  let [songs, myTime] = input.shift().split(' ');
  myTime = timeToSec(myTime);
  const times = input.map((v) => timeToSec(v));

  times.forEach((time, idx, arr) => {
    const nowCount = getMaxCount(myTime, times, idx);
    if (answer.count < nowCount) {
      answer.start = idx + 1;
      answer.count = nowCount;
    }
  });
  console.log(`${answer.count} ${answer.start}`);
  process.exit();
})();

const timeToSec = (time) => {
  let [hour, min, sec] = time.split(':').map((v) => parseInt(v));
  if (!sec) {
    sec = min;
    min = hour;
    hour = 0;
  }
  return hour * 3600 + min * 60 + sec;
};

const getMaxCount = (myTime, times, start) => {
  let count = 0;
  for (let i = start; i < times.length; i++) {
    if (myTime <= 0) return count;
    myTime -= times[i];
    count++;
  }
  return count;
};
