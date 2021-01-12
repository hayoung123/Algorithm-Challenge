//그냥 하면 되는 문제
function solution(s) {
  var answer = s.split(' ');
  for (let i = 0; i < answer.length; i++) {
    let k = answer[i].split('');
    for (let j = 0; j < k.length; j++) {
      if (j === 0) k[j] = k[j].toUpperCase();
      else k[j] = k[j].toLowerCase();
    }
    answer[i] = k.join('');
  }
  return answer.join(' ');
}

function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}
