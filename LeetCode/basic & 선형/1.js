//two sum

/*
- 첫 번째 수를 뺀 결과 키 조회

nums_map 객체에 key:값, value:인덱스로 저장
target-nums[i] 가 nums배열에 있으면 바로 현재 인덱스 i 와 nums_map객체의 value를 반환
*/

const twoSum = (nums, target) => {
  const nums_map = {};
  nums.forEach((v, idx) => (nums_map[v] = idx));

  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i]) && i !== nums_map[target - nums[i]]) {
      return [i, nums_map[target - nums[i]]];
    }
  }
};
/*
위의 코드를 Map으로 바꿔서 성능을 조금 개선했다.
또한 컬렉션에 먼저 셋팅해놓기 보다는 검색하면서 셋팅하게 만들었다. 
근데 예상보다 브루트 포스보다 큰 성능 향상은 없었다.
*/
const twoSum = (nums, target) => {
  const nums_map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums_map.has(target - nums[i])) {
      return [i, nums_map.get(target - nums[i])];
    }
    nums_map.set(nums[i], i);
  }
};
