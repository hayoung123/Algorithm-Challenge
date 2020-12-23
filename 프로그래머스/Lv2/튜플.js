function solution(s) {
  var arrayList = [];
  let strArr = s.split("");
  strArr = strArr.slice(1, strArr.length - 1);
  let tmpStr = "";
  for (let char of strArr) {
    if (char === "{") {
      arrayList.push([]);
    } else if (char === "}" || (char === "," && tmpStr)) {
      arrayList[arrayList.length - 1].push(tmpStr * 1); //숫자로 만들어주기 위해
      tmpStr = "";
    } else if (!isNaN(parseInt(char))) {
      //숫자인지 판별
      tmpStr += char;
    }
  }
  arrayList.sort((a, b) => a.length - b.length);
  const answer = [];
  for (let x of arrayList) {
    x = x.filter((v) => !answer.includes(v));
    answer.push(x[0]); //answer과 비교하면 x의 요소는 한개만 남을 것이기 때문
  }
  return answer;
}
