/*
1. 알파벳이 움직이는 횟수를 count해서 answer에 더해준다.
2. 양옆으로 움직이는 케이스를 정해준다.
    2-1. name을 돌면서 A가 연달아서 나오는 횟수와 시작 index를 aList배열에 객체로 저장한다.
    2-2. A가 연달아서 가장 많이 나온 순서로 정렬한다.
    2-3. A가 가장 많이 연달아서 나온 개수 vs 그 앞에 문자의 개수를 비교
        - 연달아 나온 A 수가 더 많거나 같으면 back을 해야된다.
        (전체길이-A길이-1)+(A앞에나온 문자의 개수-1) 의 식으로 구할 수 있다.
        - 앞에 숫자가 더 많은 경우 그냥 진행한다. 
        (전체길이 -1)
    2-4 answer에 움직이는 케이스를 더해준다.
*/
function solution(name) {
  let answer = 0;
  let aList = [];
  let turn = 0;
  for (const char of name) {
    answer += changeCharCount(char);
  }
  if (name[0] === 'A') aList.push({ idx: 0, cnt: 1 });
  for (let i = 1; i < name.length; i++) {
    if (name[i - 1] === 'A' && name[i] === 'A') {
      aList[aList.length - 1].cnt++;
    } else if (name[i - 1] !== 'A' && name[i] === 'A') {
      aList.push({ idx: i, cnt: 1 });
    }
  }
  aList.sort((a, b) => b.cnt - a.cnt);
  //앞에 있는 개수보다 A개수가 더 많을때
  if (aList.length && aList[0].idx <= aList[0].cnt) {
    turn = name.length - aList[0].cnt - 1 + (aList[0].idx - 1);
  } else {
    turn = name.length - 1;
  }
  return answer + turn;
}

function changeCharCount(char) {
  let charCode = char.charCodeAt();
  let start = 'A'.charCodeAt();
  const end = 'Z'.charCodeAt();
  return Math.min(end - charCode + 1, charCode - start);
}
