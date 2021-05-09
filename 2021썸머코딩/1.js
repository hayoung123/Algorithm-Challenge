function solution(code, day, data) {
  let parseData = (data = data.map((v) => v.split(' ').map((val) => val.split('=')[1])));

  const answer = parseData
    .filter(([price, id, date]) => code === id && date.slice(0, -2) === day)
    .sort((a, b) => a[2] - b[2])
    .map((v) => v[0] * 1);
  return answer;
}
