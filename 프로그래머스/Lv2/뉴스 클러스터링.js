function solution(str1, str2) {
  let strFirstArr = [];
  let strSecondArr = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i + 1] && checkString(str1[i]) && checkString(str1[i + 1])) {
      //대소문자가 같기 때문에 모두 소문자로 넣어준다.
      strFirstArr.push(str1[i].toLowerCase() + str1[i + 1].toLowerCase());
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i + 1] && checkString(str2[i]) && checkString(str2[i + 1])) {
      //대소문자가 같기 때문에 모두 소문자로 넣어준다.
      strSecondArr.push(str2[i].toLowerCase() + str2[i + 1].toLowerCase());
    }
  }
  let interactionSize = 0;
  let unionSize = 0;
  let firstObj = {};
  let secondObj = {};

  //교집합 구하기 위해 객체로 만들기
  strFirstArr.forEach((v) => {
    if (firstObj[v]) firstObj[v]++;
    else firstObj[v] = 1;
  });
  strSecondArr.forEach((v) => {
    if (secondObj[v]) secondObj[v]++;
    else secondObj[v] = 1;
  });
  // 중복되는걸 교집합으로 더해준다.
  for (let key in firstObj) {
    if (secondObj[key]) {
      interactionSize += Math.min(firstObj[key], secondObj[key]);
    }
  }

  //교집합을 이용해 합집합을 구해준다.
  unionSize = strFirstArr.length + strSecondArr.length - interactionSize;

  if (!strFirstArr.length && !strSecondArr.length) return 1 * 65536;
  else return Math.floor((interactionSize / unionSize) * 65536);
}

function checkString(char) {
  const charKey = char.toLowerCase().charCodeAt();
  return charKey >= 97 && charKey <= 122;
}
console.log(solution('FRANCE', 'french'));
console.log(solution('FRANCE', ''));
// console.log(checkString('j'));
