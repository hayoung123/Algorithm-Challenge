/*
1차 시도는 각 보석마다 map처럼 인덱스를 매핑해서 해결하려고 시도해봤지만 결국 실패했다.

1차는 아니지만 답만은 맞춘 것같은
1차 풀이 

배열을 다돌면서 가장짧은 것을 출력하게 하는것 하지만 시간초과
2중 for문을 어떻게 단축시켜야할지 고민해야할 것 같다.
*/

function solution(gems) {
  let answer = [];
  let distance = 214700000;
  let gemArr = [...new Set(gems)];
  for (let i = 0; i < gems.length; i++) {
    for (let j = i; j < gems.length; j++) {
      let tmpGems = [...new Set(gems.slice(i, j + 1))];
      if (tmpGems.length === gemArr.length) {
        if (distance > j - i) {
          answer = [[i + 1, j + 1]];
          distance = j - i;
        } else if (distance === j - 1) {
          answer.push([i + 1, j + 1]);
        }
      }
    }
  }
  return answer[0];
}

/*
시간을 줄이기 위한 시도 1
[...new Set()] 으로 중복을 제거해주는 과정이 오래 걸린다 생각해 gemArr에 있는 요소들이
들어있는지 check하는 함수를 따로 만들었다. 

그 결과 해결되지는 않았지만 시간초과났던 4개의 문제가 해결됐다. 
중복제거해주는 것이 시간 소요가 오래걸리나 보다.

slice도 뭔가 오래 걸릴 것같아 보이긴하고 가장 큰 문제는 for문 2번을 어떻게 효율적으로 줄이나 생각해봐야곘다.
*/
function solution(gems) {
  let answer = [];
  let distance = 214700000;
  let gemArr = [...new Set(gems)];
  for (let i = 0; i < gems.length; i++) {
    for (let j = i; j < gems.length; j++) {
      if (checkValue(gemArr, gems.slice(i, j + 1))) {
        if (distance > j - i) {
          answer = [[i + 1, j + 1]];
          distance = j - i;
        } else if (distance === j - 1) {
          answer.push([i + 1, j + 1]);
        }
      }
    }
  }
  return answer[0];
}
function checkValue(needArr, checkedArr) {
  for (const x of needArr) {
    if (!checkedArr.includes(x)) return false;
  }
  return true;
}
