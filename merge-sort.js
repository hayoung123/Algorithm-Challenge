// function merge(left, right) {
//   const sortedArr = [];
//   while (left.length && right.length) {
//     //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
//     if (left[0] <= right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   //left,right 둘 중 하나는 요소가 남아있기 때문에 뒤에 붙여서 출력
//   //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
//   return [...sortedArr, ...left, ...right];
// }

// function mergeSort(arr) {
//   if (arr.length === 1) return arr;
//   const boundary = Math.ceil(arr.length / 2);
//   //slice로 해주기 때문에 원본 arr은 손상 없다.
//   const left = arr.slice(0, boundary);
//   const right = arr.slice(boundary);
//   return merge(mergeSort(left), mergeSort(right));
// }

// const arr = [7, 4, 3, 2, 1, 6, 5];
// const sortedArray = mergeSort(arr);
// console.log(arr);
// console.log(sortedArray);
// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let currentNum = arr[i];
//     j = i - 1;
//     while (j >= 0 && arr[j] > currentNum) {
//       //앞에 있는 값이 더 크다면 한칸 오른쪽에 넣어준뒤, currentNum을 j자리에 넣고 반복
//       arr[j + 1] = arr[j];
//       arr[j] = currentNum;
//       currentNum = arr[j];
//       j--;
//     }
//   }
//   return arr;
// };
// console.log(insertionSort([7, 6, 5, 2, 1, 6, 5]));

const question = (function init() {
  console.log('hello');
  return function () {
    console.log('과연?');
    return init;
  };
})();

question()();

function outer() {
  count = 0;
  return function inner() {
    console.log(count++);
  };
}
