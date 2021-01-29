//238. Product of Array Except Self

/*
처음 풀이는 아래와 같이 현재 index를 제외하고 filter를 하고 reduce해서 시도했다.
이건 내가봐도 효율이 구리다.

몇번 도는 건지 모르겠다.
 */
const productExceptSelf = (nums) => {
  return nums.map((v, idx, arr) => {
    const restArr = arr.filter((v, i) => i !== idx);
    return restArr.reduce((acc, cur) => acc * cur);
  });
};
/*
현재값을 제외하고 왼쪽부터 곱해진 값, 오른쪽 부터 곱해진 값을 따로 구해서 서로 곱해주면 된다.
왼쪽부터 할 때는 0번 인덱스는 자신은 제외해야 되기 때문에 1로 두었고 
오른쪽도 시작을 1로 두고 reverse()해주었다.

나는 처음에 구현은 하지 않고 생각만 했을 때 for문 2번이면 손해같다는 생각이 들었는데 아니었다.
아무리 for문이 많이 있어도 O(N) 이기 때문에 for문을 중첩할바에 따로 적는게 효율적이다.

이렇게 간단하지만 아이디어가 요구되는 문제를 많이 풀어야지 나중에 실전에서도 적용할 수 있다.
실전같은 문제를 푸는 것도 중요하지만 지금은 연습단계이니 만큼 이런 작은 구조를 어떻게하면 효율적으로 다룰 수 있는지에 대해서
문제를 푸는 것도 좋은 훈련이라고 생각된다.
 */
const productExceptSelf = (nums) => {
  let leftMulti = 1;
  const left = [1];
  for (let i = 0; i < nums.length - 1; i++) {
    leftMulti *= nums[i];
    left.push(leftMulti);
  }

  let rightMulti = 1;
  let right = [1];
  for (let i = nums.length - 1; i > 0; i--) {
    rightMulti *= nums[i];
    right.push(rightMulti);
  }
  right = right.reverse();

  const answer = left.map((v, idx) => v * right[idx]);
  return answer;
};
