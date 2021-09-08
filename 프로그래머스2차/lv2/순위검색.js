const parseInfo = (info) => {
  const SAPERATE = ',';

  const infoArr = info.map((v) => v.split(' '));
  const infoMap = new Map();

  infoArr.forEach((v) => {
    const score = v.pop();
    const key = v.join(SAPERATE);

    if (infoMap.has(key)) infoMap.get(key).push(score);
    else infoMap.set(key, [score]);
  });

  infoMap.forEach((v) => v.sort((a, b) => +a - +b));
  return infoMap;
};

const parseQuery = (query) =>
  query.map((item) => {
    const parsed = item.split(' ').filter((v) => v !== 'and' && v !== '-');
    const score = parsed.pop();
    return { key: parsed, score };
  });

const checkContain = (infoKey, queryKey) => {
  for (const key of queryKey) {
    if (!infoKey.includes(key)) return false;
  }
  return true;
};

const getHighScoreCount = (arr, score) => {
  let start = 0;
  let end = arr.length;
  let mid;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (+score <= +arr[mid]) end = mid;
    else start = mid + 1;
  }

  return arr.length - start;
};

function solution(info, query) {
  info = parseInfo(info);
  query = parseQuery(query);

  const queryCount = new Array(query.length).fill(0);

  query.forEach(({ key: queryKey, score: queryScore }, queryIdx) => {
    info.forEach((infoScore, infoKey) => {
      if (!checkContain(infoKey, queryKey)) return;
      queryCount[queryIdx] += getHighScoreCount(infoScore, queryScore);
    });
  });

  return queryCount;
}

const k = solution(
  [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
  ],
  [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
  ]
);

console.log(k);
