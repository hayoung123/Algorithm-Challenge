function solution(s) {
  var arrayList = [];
  let strArr = s.split("");
  strArr = strArr.slice(1, strArr.length - 1);
  let tmpArr = [];
  let tmpStr = "";
  for (let char of strArr) {
    if (char === "{") {
      continue;
    } else if (char === "}") {
      tmpArr.push(tmpStr * 1);
      tmpStr = "";
      arrayList.push(tmpArr);
      tmpArr = [];
    } else if (char === "," && tmpStr) {
      tmpArr.push(tmpStr * 1);
      tmpStr = "";
    } else if (!isNaN(parseInt(char))) {
      tmpStr += char;
    }
  }
  arrayList.sort((a, b) => a.length - b.length);
  const answer = [];
  for (let x of arrayList) {
    x = x.filter((v) => !answer.includes(v));
    answer.push(x[0]);
  }
  return answer;
}
