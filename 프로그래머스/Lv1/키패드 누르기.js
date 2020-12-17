/*
leftBtn 또는 rightBtn에 있으면 L,R을 넣어주면 된다.
문제는 2,5,8,0라인에 있는것들이다.
왼손, 오른손 각각의 거리를 구해서 (leftDis,rightDis) 설정해주면된다.

getDistance
handIndex: 현재 손이 버튼의 어느 index에 있는지 구한다.
btnIndex: 입력해야할 버튼위 index를 구한다.

handIndex가 leftBtn,rightBtn에 있으면 midBtn으로 이동할 때 1칸이 필요하니 +1해서 반환한다.
handIndex와 btnIndex의 차이로 거리를 구한다.
*/

function solution(numbers, hand) {
  var answer = '';
  const leftBtn = [1, 4, 7, '*'];
  const rightBtn = [3, 6, 9, '#'];
  let leftFinger = '*';
  let rightFinger = '#';
  for (let num of numbers) {
    if (leftBtn.includes(num)) {
      answer += 'L';
      leftFinger = num;
    } else if (rightBtn.includes(num)) {
      answer += 'R';
      rightFinger = num;
    } else {
      const leftDis = getDistance(leftFinger, num);
      const rightDis = getDistance(rightFinger, num);
      if (leftDis < rightDis) {
        answer += 'L';
        leftFinger = num;
      } else if (leftDis > rightDis) {
        answer += 'R';
        rightFinger = num;
      } else {
        if (hand === 'left') {
          answer += 'L';
          leftFinger = num;
        } else {
          answer += 'R';
          rightFinger = num;
        }
      }
    }
  }
  return answer;
}

function getDistance(handBtn, btn) {
  const leftBtn = [1, 4, 7, '*'];
  const rightBtn = [3, 6, 9, '#'];
  const midBtn = [2, 5, 8, 0];
  const btnIndex = midBtn.indexOf(btn);
  let handIndex;
  if (leftBtn.includes(handBtn)) {
    handIndex = leftBtn.indexOf(handBtn);
    return Math.abs(handIndex - btnIndex) + 1;
  } else if (rightBtn.includes(handBtn)) {
    handIndex = rightBtn.indexOf(handBtn);
    return Math.abs(handIndex - btnIndex) + 1;
  } else {
    handIndex = midBtn.indexOf(handBtn);
    return Math.abs(handIndex - btnIndex);
  }
}
