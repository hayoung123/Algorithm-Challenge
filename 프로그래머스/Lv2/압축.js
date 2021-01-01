function solution(msg) {
  let answer = [];
  msg = msg.toUpperCase().split('');
  const keyObj = initKey();
  let keyLastValue = keyObj['Z'];
  // let keyLastValue = keyObj[Object.keys(keyObj)[Object.keys(keyObj).length-1]]
  for (let i = 0; i < msg.length; ) {
    let sliceNum = 1;
    let strValue;
    while (true) {
      const nowStr = msg.slice(i, i + sliceNum).join('');
      if (Object.keys(keyObj).includes(nowStr) && i + sliceNum <= msg.length) {
        strValue = keyObj[nowStr];
        sliceNum++;
      } else {
        answer.push(strValue);
        keyLastValue++;
        keyObj[nowStr] = keyLastValue;
        i += sliceNum - 1;
        break;
      }
    }
  }

  return answer;
}

function initKey() {
  const keyObj = {};
  for (let i = 1; i <= 26; i++) {
    keyObj[String.fromCharCode(i + 64)] = i;
  }
  return keyObj;
}
console.log(solution('KAKAO'));
