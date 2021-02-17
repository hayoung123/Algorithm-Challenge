//three-sum
/*
1. 브루트 포스로 계산하기

3중 for문까지는 이해가된다.
if (i > 0 && nums[i] === nums[i - 1]) continue;
if (j > i + 1 && nums[j] === nums[j - 1]) continue;
if (k > j + 1 && nums[k] === nums[k - 1]) continue;

문제의 이 3조건을 이해해 보자. 

뒤에 직전 요소와 같으면 넘어가는 조건은 이해가 될것이다.
정렬을 해주고 저 조건을 넣는다면 중복값들을 skip한다는 것을 알 수 있다.

하지만 직전 값 비교 조건만 있을 시에는 i,j,k 3값 모두 다른 경우만 발생한다.

그렇기 때문에 맨 처음 값인 0,i+1,j+1은 포함해 주는 것이다.
*/

const threeSum = (nums) => {
  let answer = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          console.log(i, j, k);
          answer.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return answer;
};

/*
2포인터로 하기
i로 순회하면서 남은 2개를 투포인터로 해결한다.
sum = nums[i] + nums[lt] + nums[rt]; 
sum을 0 과 비교하면서 진행한다 lt,rt를 조절하기 위해 nums배열을 정렬한 뒤에 해야한다.

sum>0 => rt--
sum<0 => lt++

또 위의 브루트포스 처럼 중복을 없이기 위해 lt,rt에 각 조건을 주어서 조절해준다.
*/
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let lt = i + 1;
    let rt = nums.length - 1;
    while (lt < rt) {
      const sum = nums[i] + nums[lt] + nums[rt];
      if (sum > 0) {
        rt--;
      } else if (sum < 0) {
        lt++;
      } else {
        answer.push([nums[i], nums[lt], nums[rt]]);
        lt++;
        rt--;
      }
      while (lt > i + 1 && nums[lt] === nums[lt - 1]) lt++;
      while (rt < nums.length - 1 && nums[rt] === nums[rt + 1]) rt--;
    }
  }
  return answer;
};

console.log(threeSum2([-2, 0, 1, 1, 2]));
