// var reorderLogFiles = function (logs) {
//   const letterLogs = [];
//   const digitLogs = [];
//   logs.forEach((log) => {
//     const newLog = getLog(log);
//     if (isStr(newLog)) letterLogs.push(log);
//     else digitLogs.push(log);
//   });
//   letterLogs.sort((a, b) => {
//     const loga = getLog(a).join(" ");
//     const logb = getLog(b).join(" ");
//     if (loga < logb) return -1;
//     else if (logb > loga) return 1;
//     else return a < b ? -1 : 1;
//   });

//   return letterLogs.concat(digitLogs);
// };

// const getLog = (str) => {
//   const [identifier, ...log] = str.split(" ");
//   return log;
// };

// const isStr = (str) => {
//   return isNaN(parseInt(str));
// };
// const k = [
//   "a1 9 2 3 1",
//   "g1 act car",
//   "zo4 4 7",
//   "ab1 off key dog",
//   "a8 act zoo",
//   "a2 act car",
// ];
// // const k = [
// //   "dig1 8 1 5 1",
// //   "let1 art can",
// //   "dig2 3 6",
// //   "let2 own kit dig",
// //   "let3 art zero",
// // ];
// const kk = reorderLogFiles(k);
// console.log(kk);
const nameList = ["name kyle", "name kim", "name park"];
const secondWord = (str) => str.split(" ")[1];

const compare = (str1, str2) => {
  //두번째 단어로만 비교해서 n에 넣는다.
  const n = secondWord(str1).localeCompare(secondWord(str2));
  if (n !== 0) return n;
  //같지 않는경우에는 리턴
  //두 문자가 같은 경우에는 원래 str1,str2를 비교한다.
  else str1.localCompare(str2);
};

nameList.sort(compare);
console.log(nameList);
