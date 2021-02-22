//77. Combinations

/*
선택하는 요소의 개수인 k를 --하면서 재귀를 진행하고 k===0일 때의 배열을 push 해준다.

tmp라는 배열에 push했다 pop하면서 숫자 하나씩 처리해주는 과정이다.
ex)n=4 k=2 일 때 [1,2],[1,3],[1,4] 를 다하고 [2,~]를 진행할 때 start도 그에 맞춰서
커져야 되기 때문에 start++를 해줬다.
*/
const combine = (n, k) => {
  const res = [];

  const go = (k, start = 1, tmp = []) => {
    if (k === 0) {
      res.push(tmp.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      tmp.push(i);
      go(k - 1, start + 1, tmp);
      start++;
      tmp.pop();
    }
  };

  go(k);

  return res;
};

/*
leetcode의 추천 높은 답안을 볼 때 마다 항상 놀라고 많이 부족함을 느낀다. 

어차피 최종길이가 k가 될 때 출력하는 것이니 굳이 push,pop을 하는 것 보다 
for문 내에서 spread syntax를 이용해 배열을 정의하면서 바로 재귀를 진행하는 것이 매우
효과적이라고 생각한다. 

또한 spread syntax를 사용했기 때문에 res에 push 할 때 slice를 사용할 필요도 없어졌다.
spread syntax를 잘 활용하니 시간도 절약됐다.
*/
const combine = (n, k) => {
  const res = [];

  const go = (current, start) => {
    if (current.length === k) {
      res.push(current);
      return;
    }
    for (let i = start; i <= n; i++) {
      go([...current, i], i + 1);
    }
  };

  go([], 1);

  return res;
};

console.log(combine(4, 2));
