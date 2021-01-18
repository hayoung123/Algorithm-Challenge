function solution(n, t, m, timetable) {
  timetable = timetable
    .map((v) => parse(v))
    .filter((v) => v !== parse('23:59'));
  timetable.sort((a, b) => a - b);

  let start = 540;
  let maxPeople = n * m;
  const lastTime = 540 + t * (n - 1);

  let tmp = 0;
  while (n > 0) {
    let tmpM = m;
    while (tmpM > 0 && timetable.length !== 0) {
      if (timetable[0] <= start && maxPeople) {
        tmp = timetable.shift();
      }
      maxPeople--;
      tmpM--;
    }
    n--;
    start += t;
  }
  if ((timetable.length === 0 && maxPeople > 0) || !tmp)
    return toTime(lastTime);

  return toTime(tmp - 1);
}

function parse(time) {
  const [h, m] = time.split(':');
  return h * 60 + m * 1;
}

function toTime(minute) {
  let hour = Math.floor(minute / 60);
  hour = hour < 10 ? '0' + hour : hour;
  let minutes = minute % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hour}:${minutes}`;
}

console.log(solution(1, 1, 2, ['23:11']));
