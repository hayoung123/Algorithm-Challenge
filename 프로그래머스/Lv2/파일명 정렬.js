function solution(files) {
  files.sort((a, b) => {
    const first = tokenize(a);
    const second = tokenize(b);
    return fileSort(first, second);
  });
  return files;
}
function tokenize(file) {
  let startNumIdx;
  let endNumIdx;
  for (let i = 0; i < file.length; i++) {
    if (!startNumIdx && isNumber(file[i])) {
      startNumIdx = i;
    }
    if (startNumIdx && !isNumber(file[i + 1])) {
      endNumIdx = i;
      break;
    }
  }
  const head = file.slice(0, startNumIdx);
  const num = file.slice(startNumIdx, endNumIdx + 1);
  return [head.toLowerCase(), num * 1];
}
function isNumber(char) {
  return !isNaN(parseInt(char));
}

function fileSort(first, second) {
  let [firstHead, firstNum] = first;
  let [secondHead, secondNum] = second;
  if (firstHead < secondHead) {
    return -1;
  } else if (firstHead > secondHead) {
    return 1;
  } else return firstNum - secondNum;
}
