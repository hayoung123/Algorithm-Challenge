function solution(t, r) {
  var answer = [];
  let obj = {};
  t = t.map((v, idx) => ({ id: idx, order: v }));
  r = r.forEach((v, idx) => (obj[idx] = v));
  console.log(obj);
  t.sort((a, b) => a.order - b.order);
  for (let i = 0; i < t.length; i++) {
    let tmp = t.filter((v) => v.order === t[0].order);
    console.log(tmp);
    tmp.sort((a, b) => obj[a.id] - obj[b.id]);
    console.log(tmp);
    const len = tmp.length;
    const first = tmp.shift();
    console.log('first', first);
    tmp = tmp.map((v) => {
      v.order++;
      return v;
    });
    t = [...tmp, ...t.slice(len)];
    answer.push(first.id);
    i--;
    console.log('----------------');
  }
  return answer;
}

console.log(solution([0, 1, 3, 0], [0, 1, 2, 3]));
