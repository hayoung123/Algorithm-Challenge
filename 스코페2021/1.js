// const readline = require('readline');

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });
//   const timeList = [];
//   for await (const line of rl) {
//     timeList.push(line);
//     rl.close();
//   }
//   timeList.shift();
//   const recommendTime = getrecommendTime(timeList);
//   console.log(recommendTime);
//   process.exit();
// })();

const timeList = ['12:00 ~ 13:00', '14:00 ~ 18:00', '19:00 ~ 20:00'];
const getrecommendTime = (timeList) => {
  timeList = timeList.map((time) => time.split('~').map((v) => v.trim()));

  const startTimeList = timeList.map((times) => times[0]).map((time) => toMinute(time));
  const endTimeList = timeList.map((times) => times[1]).map((time) => toMinute(time));

  const maxStartTime = Math.max(...startTimeList);
  const minEndTime = Math.min(...endTimeList);
  if (minEndTime < maxStartTime) return -1;
  return `${toTime(maxStartTime)} ~ ${toTime(minEndTime)}`;
};

const toMinute = (time) => {
  const [hour, minute] = time.split(':').map((v) => v * 1);
  return hour * 60 + minute;
};

const toTime = (minute) => {
  let hour = Math.floor(minute / 60);
  let minutes = minute - hour * 60;
  if (hour < 10) hour = '0' + hour;
  if (minutes < 10) minutes = '0' + minutes;
  return `${hour}:${minutes}`;
};

console.log(getrecommendTime(timeList));
