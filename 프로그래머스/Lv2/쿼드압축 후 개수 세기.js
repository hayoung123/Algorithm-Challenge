function solution(arr, answer = [0, 0]) {
  if (arr.length === 1) {
    //네모 한칸일 경우
    answer[arr[0]] += 1;
  } else if (check(arr) >= 0) {
    //check 됐을경우
    answer[check(arr)] += 1; //check가 0,1을 리턴하기 때문에 맞는 인덱스에 1더해준다.
  } else {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        //4칸 나눠서 순회해야되기 때문에 parseArr에서 길이로 4등분 처리해준다.
        solution(parseArr(arr, i, j), answer);
      }
    }
  }
  return answer;
}
//배열이 압축이 되는지 체크
//배열의 전체합과 칸의 수 비교를 통해서 판단했다.
function check(arr) {
  let cnt = 0;
  for (const x of arr) {
    cnt += x.reduce((acc, cur) => acc + cur, 0);
  }
  //1로 압축
  if (cnt === arr.length ** 2) return 1;
  //0으로 압축
  else if (cnt === 0) return 0;
  else return -1; //아닐경우
}
//범위에 맞는 배열 parsing하기
//배열의 길이와 i,j(위의 for문에서의 i,j이다.)를 이용해서 배열 파싱
function parseArr(arr, i, j) {
  const len = arr.length / 2;
  arr = arr.slice(i * len, i * len + len);
  arr = arr.map((v) => v.slice(j * len, j * len + len));
  return arr;
}
