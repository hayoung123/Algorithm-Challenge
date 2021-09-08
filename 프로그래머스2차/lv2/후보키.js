function solution(relation) {
  const len = relation.length;
  const columnCount = relation[0].length;
  const emptyArr = new Array(columnCount).fill().map((_, i) => i);
  const keyList = [];

  function permute(arr, count) {
    if (count === 1) return arr.map((v) => [v]);
    let result = [];

    arr.forEach((v, idx) => {
      const fix = v;
      const rest = arr.slice(idx + 1);

      const permuted = permute(rest, count - 1);
      const combined = permuted.map((v) => [fix, ...v]);
      result = [...result, ...combined];
    });
    return result;
  }

  for (let num = 1; num <= columnCount; num++) {
    const permuted = permute(emptyArr, num);

    for (const key of permuted) {
      const tmp = new Set();

      if (!checkOverlap(keyList, key)) continue;

      relation.forEach((item) => {
        const checkKey = key.reduce((acc, cur) => acc + item[cur], '');
        tmp.add(checkKey);
      });
      if (tmp.size === len) keyList.push(key);
    }
  }
  return keyList.length;
}

function checkOverlap(keyList, key) {
  for (const v of keyList) {
    const checkSet = new Set([...v, ...key]);
    if (checkSet.size === key.length) return false;
  }
  return true;
}

let k = solution([
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
]);

console.log(k);
