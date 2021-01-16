// function solution(lines) {
//   var answer = [];

//   lines.forEach((line, idx, arr) => {
//     const [date, time, process] = line.split(' ');
//     const restArr = arr.slice(idx + 1);
//     let [s, markEndTime] = parseTime(time, process);
//     let count = 1;
//     restArr.forEach((v) => {
//       const [date, time, process] = v.split(' ');
//       const [start, end] = parseTime(time, process);
//       if (
//         (markEndTime >= start && markEndTime <= end) ||
//         (markEndTime + 1 > start && markEndTime + 1 < end) ||
//         (start >= markEndTime && end < markEndTime + 1)
//       )
//         count++;
//     });
//     answer.push(count);
//   });

//   return Math.max(...answer);
// }
function solution(lines) {
  var answer = {};

  lines.forEach((line, idx, arr) => {
    const [date, time, process] = line.split(' ');
    let [start, end] = parseTime(time, process);
    let count = 1;
    while (start <= end) {
      start = start.toFixed(3);
      if (answer[start]) answer[start]++;
      else answer[start] = 1;
      start += 0.001;
    }
  });
  console.log(answer);
  return 0;
}

function parseTime(time, process) {
  let [h, m, s] = time.split(':');
  const end = h * 3600 + m * 60 + s * 1;
  const processTime = process.slice(0, process.length - 1) * 1 - 0.001;
  const start = end - processTime;
  return [start, end];
}

// const test = [
//   '2016-09-15 20:59:57.421 0.351s',
//   '2016-09-15 20:59:58.233 1.181s',
//   '2016-09-15 20:59:58.299 0.8s',
//   '2016-09-15 20:59:58.688 1.041s',
//   '2016-09-15 20:59:59.591 1.412s',
//   '2016-09-15 21:00:00.464 1.466s',
//   '2016-09-15 21:00:00.741 1.581s',
//   '2016-09-15 21:00:00.748 2.31s',
//   '2016-09-15 21:00:00.966 0.381s',
//   '2016-09-15 21:00:02.066 2.62s'
// ];
const test = ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'];
// console.log(parseTime('20:59:57.421', '0.351s'));
console.log(solution(test));
