//효율성 부족 딱봐도 반복문 3개면 실패할만했다.
/*
1. board[0][0] 부터 돌면서 체크한다.
2. 그 점부터 정사각형이 만들어 질 수 있는지 체크하면서 answer을 업데이트 한다.
3. 한변의 길이를 1씩 증가시키며 검사하다 false가 나오면 끝마치고 다음 좌표로 넘어간다.

- check함수는 1로 이루어진 정사각형인지 판단해주는 함수

처음 문제를 보고 간단한 문제라고 생각 돼 brute force로 해결하려 시도했지만..
계속해서 조건을 추가해줘도 효율성의 벽을 넘을 수 없었다.

계속 고민하다가 결국 인터넷에 검색을 통해 해결 방법을 배웠다.
*/

function solution(board) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    if (Math.sqrt(answer) > board.length - i) break;
    for (let j = 0; j < board[i].length; j++) {
      if (Math.sqrt(answer) > board[i].length - j) break;
      if (board[i][j] === 0) continue;
      let num = 0;
      let area = 0;
      while (j + num < board[i].length && i + num < board.length) {
        if (check(board, i, j, num)) {
          area = (num + 1) ** 2;
        } else {
          break;
        }
        num++;
      }
      answer = answer < area ? area : answer;
    }
  }
  return answer;
}
function check(board, col, row, num) {
  for (let i = col; i <= col + num; i++) {
    for (let j = row; j <= row + num; j++) {
      if (board[i][j] !== 1) return false;
    }
  }
  return true;
}

/*
dp로 해결했다. 인터넷을 보고 해결법을 배웠다

1. 맨 첫 column, row는 크기를 만드는 기준으로 사용하기 때문에 1번 인덱스 부터 시작한다.
2. board 좌표에는 현재 점에서 왼쪽위로 만들 수 있는 가장 큰 정사각형의 한변을 저장한다.
3. 현재 좌표의 위칸, 왼쪽칸, 왼쪽위칸 총 3개를 비교해 가장 작은 수의 +1을 저장한다.
  - 이유 : 각 좌표에 자신의 정사각형 변의 길이가 저장 돼 있기 때문에 3개 좌표 중 작은 것 하나가 껴있으면
           작은 좌표 주변에 다른 큰 좌표의 길이만큼 범위 안에 0 이 있다는 뜻이다.
4. 반복해서 결과는 넓이기 때문에 제곱해준다. 

*/
function solution(board) {
  let answer = 0;
  const row = board.length;
  const column = board[0].length;

  if (row <= 1 || column <= 1) return 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        const minNum = Math.min(up, left, cross);
        board[i][j] = minNum + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}
