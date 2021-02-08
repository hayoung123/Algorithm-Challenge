// 316. Remove Duplicate Letters
/*
스택 맨뒤값이 현재 값보다 뒷순서 && 스택 맨 뒤값이 현재 값 뒤에 있다
=> pop()
을 반복한다.
*/

var removeDuplicateLetters = function (s) {
  const stack = [];
  let sArr = s.split('');
  for (let i = 0; i < sArr.length; i++) {
    const restArr = sArr.slice(i + 1);
    const value = sArr[i];
    if (stack.includes(value)) continue;
    while (checkStackLastVal(stack, restArr, value)) {
      stack.pop();
    }
    stack.push(value);
  }
  return stack.join('');
};

const checkStackLastVal = (stack, restArr, val) => {
  const stackLastVal = stack[stack.length - 1];
  if (
    stack.length && //스택에 값이 있고
    restArr.includes(stackLastVal) && //현재 val뒤에 stackLastVal이 더있고
    stackLastVal.localeCompare(val) > 0 // stackLastVal이 사전순위상 뒤에있는 놈이라면 true
  ) {
    return true;
  } else {
    return false;
  }
};

const k = removeDuplicateLetters('bcabc');
console.log(k);
