//순위 검색

/*
1차시도 : 모든 query문과 모든 info를 비교해서 N^2으로 시도했다. 정확도:100% 효율성:0/4 

2차시도 : info들을 각케이스 별로 객체에 key값으로 나누었다. key:케이스, value:점수배열 -> 정렬했다.
        그리고 query문에서는 각 상황에 맞는 객체에서만 탐색을 진행하게 했고.
        score보다 큰 score가 시작되는 부분을 `findIndex`메소드를 이용해서 찾고 개수를 세어줬다. 
        정확도: 100%, 효율성:2/4
*/

function solution(info, query) {
  const answer = new Array(query.length).fill(0);
  const infoData = getInfoData(info);
  query = query.map((v) => v.replace(/and /g, '')).map((v) => v.split(' '));
  query.forEach((check, idx) => {
    const checkPoint = check.pop() * 1;
    for (const infoKey in infoData) {
      if (isInclude(check, infoKey)) {
        answer[idx] += getHighUser(infoData[infoKey], checkPoint);
      }
    }
  });
  return answer;
}

const isInclude = (check, infoKey) => {
  infoKey = infoKey.split(' ');
  for (const x of check) {
    if (x === '-') continue;
    if (!infoKey.includes(x)) return false;
  }
  return true;
};

const getHighUser = (scoreArr, score) => {
  const startHighIndex = lowerBound(scoreArr, score);
  return scoreArr.length - startHighIndex;
};

const lowerBound = (arr, target) => {
  let row = 0;
  let high = arr.length;
  let mid;

  while (row < high) {
    mid = Math.floor((row + high) / 2);
    if (target <= arr[mid]) high = mid;
    else row = row = mid + 1;
  }
  return row;
};

const getInfoData = (info) => {
  const infoData = {};
  for (const user of info) {
    const userType = user.split(' ');
    const score = userType.pop() * 1;
    const infoKey = userType.join(' ');
    if (infoData[infoKey]) infoData[infoKey].push(score);
    else infoData[infoKey] = [score];
  }
  for (const infoKey in infoData) {
    infoData[infoKey].sort((a, b) => a - b);
  }
  return infoData;
};

solution(
  [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
    'python backend senior chicken 150',
    'python backend senior chicken 250',
    'python backend senior chicken 350',
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
