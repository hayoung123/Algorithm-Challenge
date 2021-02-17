/*
`isStr` 주어진 문자열이 문자열=>true, 아닐시 =>false 
`getLog` 앞의 identifier을 제외한 log를 얻는 함수
`compare` 두번째 단어부터인 로그를 먼저 비교하고 같다면 앞에 identifier를 비교하는 비교함수

1. getLog가 숫자,문자에 따라 다른 배열에 적재한다.
2. log문자열 배열을 위에 compare함수를 이용해 정렬한다.
3. log문자열 배열과 숫자 배열을 합친다.
*/
var reorderLogFiles = function (logs) {
  const letterLogs = [];
  const digitLogs = [];

  const isStr = (str) => isNaN(parseInt(str));

  const getLog = (str) => {
    const [identifier, ...log] = str.split(' ');
    return log.join(' ');
  };

  const compare = (str1, str2) => {
    //두번째 단어로만 비교해서 n에 넣는다.
    const n = getLog(str1).localeCompare(getLog(str2));
    if (n !== 0) return n;
    //같지 않는경우에는 리턴
    //두 문자가 같은 경우에는 원래 str1,str2를 비교한다.
    else return str1.localCompare(str2);
  };

  logs.forEach((log) => {
    const newLog = getLog(log);
    if (isStr(newLog)) letterLogs.push(log);
    else digitLogs.push(log);
  });

  letterLogs.sort(compare);

  return letterLogs.concat(digitLogs);
};
