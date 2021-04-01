const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
기본적인 이진탐색

중복이 없는 정렬된 배열에서 활용할 수 있다. 

중앙 값을 비교후 low 또는 high를 재설정 해줘야 한다.
이때 mid값까지 확인을 한 것이기 때문에 low = mid + 1 또는 hight = mid -1 로 mid 역시 제외하면서 재설정 해줄 수 있다. 

*/

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else if (arr[mid] > target) high = mid - 1;
  }
  return -1; //target이 arr에 없을 시
};

/*
하지만 중복이 있는 배열에서는 위와 같은 기본적인 이진탐색으로는 정확하게 원하는 값을 얻을 수 없다. 

이를 위해서인지 lower bound, upper bound가 있다. 

lowerBound(arr,target): arr에서 target이상인 가장 빠른 index값 
ex) const arr = [1,2,2,2,3,4,5,6,7] 
lowerBound(arr,2) === 1 

upperBound(arr,target): arr에서 target초과인 가장 빠른 index값
ex) const arr = [1,2,2,2,3,4,5,6,7] 
upperBound(arr,2) === 4

즉, lowerBound와 upperBound를 이용하면 중복이 있는 배열에서도 원하는 target의 인덱스(들)을 구할 수 있다. 

주의사항
- lowerBound, upperBound는 원하는 결과가 없는 경우 배열의 크기를 반환한다. 

### lower bound

- 중앙값 < target    => low = mid + 1
- 중앙값 === target  => high = mid (target이상인 값의 최초 index를 찾기 때문에 mid를 포함해서 high를 재설정)
- 중앙값 > target    => high = mid (high = mid-1 했을 경우 mid-1은 target보다 작을 수 있기 때문에 mid를 포함해서 high 재설정)

### upper bound

- 중앙값 < target    => low = mid + 1
- 중앙값 === target  => low = mid + 1 (target보다 큰 값을 찾아야 되기 때문에 mid+1로 재설정)
- 중앙값 > target    => high = mid    (high = mid-1 했을 경우 mid-1은 target보다 작을 수 있기 때문에 mid를 포함해서 high 재설정)


*/

// 코드 이해를 쉽게 하기 위해 중복을 줄이는 것보다는 조건을 하나하나 설정해주었다.
const lowerBound = (arr, target) => {
  let row = 0;
  let high = arr.length;
  let mid;

  while (row < high) {
    mid = Math.floor((row + high) / 2);
    if (arr[mid] < target) low = mid + 1;
    else if (arr === target) high = mid;
    else if (arr[mid] > target) high = mid;
  }
  return row;
};

const upperBound = (arr, target) => {
  let row = 0;
  let high = arr.length;
  let mid;

  while (row < high) {
    mid = Math.floor((row + high) / 2);
    if (arr[mid] < target) low = mid + 1;
    else if (arr === target) low = mid + 1;
    else if (arr[mid] > target) high = mid;
  }
  return row;
};

/*
## 출처 

- https://hee96-story.tistory.com/80
*/
console.log(lowerBound(arr, 5));
