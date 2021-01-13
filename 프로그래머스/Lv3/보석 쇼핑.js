/*
채점 결과
정확성: 33.3
효율성: 44.4
합계: 77.8 / 100.0
*/
function solution(gems) {
  let answer = [0, 100001];

  let gemLen = new Set(gems).size;
  let gemMap = new Map();

  for (let i = 0; i < gems.length; i++) {
    gemMap.set(gems[i], i + 1);

    if (gemMap.size === gemLen) {
      const tmpIdx = getIdx(gemMap);
      const answerLen = answer[1] - answer[0];
      const mapLen = tmpIdx[1] - tmpIdx[0];
      if (answerLen > mapLen) {
        answer = tmpIdx;
      }
    }
  }

  return answer;
}

function getIdx(map) {
  let values = map.values();
  let idxArr = [];
  for (let x of values) {
    idxArr.push(x);
  }

  return [Math.min(...idxArr), Math.max(...idxArr)];
}

/*
위의 Map을 object로 바꿔서 시도했다.
채점 결과
정확성: 33.3
효율성: 4.4
합계: 37.8 / 100.0

Map이 더 낫나보다..
*/
function solution(gems) {
  let answer = [0, 100001];

  let gemLen = new Set(gems).size;
  let gemObj = new Map();

  for (let i = 0; i < gems.length; i++) {
    gemObj[gems[i]] = i + 1;

    if (Object.keys(gemObj).length === gemLen) {
      const tmpIdx = getIdx(Object.values(gemObj));
      const answerLen = answer[1] - answer[0];
      const mapLen = tmpIdx[1] - tmpIdx[0];
      if (answerLen > mapLen) {
        answer = tmpIdx;
      }
    }
  }

  return answer;
}

function getIdx(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/*
채점 결과
정확성: 33.3
효율성: 62.2
합계: 95.6 / 100.0
다른 풀이의 시간은 조금 줄었다.
*/

function solution(gems) {
  let answer = [0, 100001];

  let gemLen = new Set(gems).size;
  let gemMap = new Map();
  let min = 0;

  for (let i = 0; i < gems.length; i++) {
    gemMap.set(gems[i], i + 1); //새로운 값이 됐다.
    if (gems[min - 1] === gemMap.get(gems[i])) {
      min = getMin(gemMap);
    }

    if (gemMap.size === gemLen) {
      const tmpIdx = [min, i + 1];
      const answerLen = answer[1] - answer[0];
      const mapLen = tmpIdx[1] - tmpIdx[0];

      if (answerLen > mapLen) answer = tmpIdx;
    }
  }
  return answer;
}

function getMin(map) {
  let values = map.values();
  let min = 100001;
  for (let x of values) {
    if (x < min) min = x;
  }
  return min;
}

/*
드디어 정답이다
어떻게하면 Map에 제일 작은 수를 바로 가져올 수 있을 까 생각하다가 구현해냈다.
Map은 순서를 유지시켜주는 특성으로 삭제를 하고 추가를 했다.
=> 즉 맨앞 value값이 가장 작은 값이 된다.
*/
function solution(gems) {
  let answer = [0, 100001];

  let gemLen = new Set(gems).size;
  let gemMap = new Map();

  for (let i = 0; i < gems.length; i++) {
    gemMap.delete(gems[i]);
    gemMap.set(gems[i], i + 1); //새로운 값이 됐다.

    if (gemMap.size === gemLen) {
      const tmpIdx = [gemMap.values().next().value, i + 1];
      const answerLen = answer[1] - answer[0];
      const mapLen = tmpIdx[1] - tmpIdx[0];
      if (answerLen > mapLen) {
        answer = tmpIdx;
      }
    }
  }
  return answer;
}
