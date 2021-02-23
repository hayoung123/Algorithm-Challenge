//39. Combination Sum

/*
sum에 사용할 때는 중복이 가능하나 최종 배열에는 중복이 불가능한 경우의 처리를
어떻게 해줘야 될지 몰랐다. 

그래서 `cache`와`checkOverlap`라는 컬렉션과 함수를 만들어 중복을 처리해줬다.
하지만 정렬 및 has연산이 들어가 있어서 매우 시간이 오래걸린다.
*/
const combinationSum = (candidates, target) => {
  const res = [];
  const cache = new Set();
  const go = (sum = 0, arr = []) => {
    if (sum >= target) {
      if (checkOverlap(arr) && sum === target) res.push(arr);
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      go(sum + candidates[i], [...arr, candidates[i]]);
    }
  };
  const checkOverlap = (arr) => {
    arr = arr.sort();
    const key = arr.join();
    if (cache.has(key)) return false;
    else {
      cache.add(key);
      return true;
    }
  };

  go();

  return res;
};

/*
진짜 이 생각을 왜 못했을까... 같은 idx를 사용가능하면 idx부터 반복을 하면 이전에 값을 사용하는
경우는 다 피해졌을 텐데... 
이렇게 구현하니 간단했다. 하지만 그래도 속도는 느렸다. 

그래도 지난번 combination을 풀었을 때 처럼 for문에서 바로 재뤼를 진행해서 훨씬 간결해지긴했다!
*/

const combinationSum = (candidates, target) => {
  const res = [];

  const go = (sum = 0, idx = 0, arr = []) => {
    if (sum >= target) {
      if (sum === target) res.push(arr);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      go(sum + candidates[i], i, [...arr, candidates[i]]);
    }
  };

  go();

  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log('-------------------------');
console.log(combinationSum([2, 3, 5], 8));
console.log('-------------------------');
console.log(combinationSum([2], 1));
console.log('-------------------------');
console.log(combinationSum([1], 1));
