// function solution(gems) {
//   let answer;
//   let distance = 214700000;
//   let gemArr = [...new Set(gems)];
//   let gemMap = new Map();
//   // 보석별 인덱스 배열
//   for (let i = 0; i < gems.length; i++) {
//     if (!gemMap.has(gems[i])) {
//       gemMap.set(gems[i], i);
//     }
//   }
// }

// //prettier-ignore
// // const k =[["ZZZ", "YYY", "NNNN", "YYY", "BBB"]]
// const k = [
//   [
//     'DIA',
//     'RUBY',
//     'RUBY',
//     'DIA',
//     'DIA',
//     'EMERALD',
//     'SAPPHIRE',
//     'DIA',
//     'EMERALD',
//     'SAPPHIRE',
//     'EMERALD',
//     'SAPPHIRE',
//     'RUBY',
//     'RUBY',
//     'DIA',
//     'EMERALD',
//     'SAPPHIRE'
//   ],
//   ['AA', 'AB', 'AC', 'AA', 'AC'],
//   ['XYZ', 'XYZ', 'XYZ'],
//   ['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']
// ];

// for (let x of k) {
//   console.log(solution(x));
//   console.log('------------------------------');
// }

let answer = [];

const dfs = (nums, num, arr = []) => {
  if (num === 3) answer.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, arr);
      arr.pop();
    }
  }
};
dfs([1, 2, 3, 4], 0);
console.log(answer);
