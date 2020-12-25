function solution(relation) {
  let answer = 0;
  //Attribute의 인덱스 배열
  const indexArr = Array.from({ length: relation[0].length }, (_, idx) => idx);

  //Attribute의 인덱스배열의 모든 부분집합을 구한다.
  let caseIndexArr = allCase(indexArr);

  while (caseIndexArr.length) {
    const nowCase = caseIndexArr[0];
    //nowCase에 있는 index의 Attribute로만 배열을 만든다.
    const checkRelation = relation.map((v) =>
      v.filter((_, idx) => nowCase.includes(idx))
    );

    //후보키 체크
    if (checkOverlap(checkRelation)) {
      answer++;
      caseIndexArr = caseIndexArr.filter((idxArr) => {
        //지금 nowCase의 인덱스를 모두 포함하고있는 caseIndexArr은 제외
        for (let idx of nowCase) {
          if (!idxArr.includes(idx)) return true;
        }
        return false;
      });
    } else {
      //nowCase제거
      caseIndexArr.shift();
    }
  }

  return answer;
}

function checkOverlap(arr) {
  const setArr = new Set();
  for (let x of arr) {
    if (setArr.has(x.join(''))) return false;
    else setArr.add(x.join(''));
  }
  return true;
}
//모든 부분집합 (멱집합)
function allCase(arr) {
  let check = new Array(arr.length).fill(0);
  let indexArr = [];
  const dfs = (depth) => {
    if (depth === check.length) {
      indexArr.push(arr.filter((v, idx) => check[idx]));
    } else {
      check[depth] = 1;
      dfs(depth + 1);
      check[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  indexArr.sort((a, b) => a.length - b.length);
  indexArr = indexArr.filter((v) => v.length);
  return indexArr;
}
