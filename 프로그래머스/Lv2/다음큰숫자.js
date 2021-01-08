function solution(n) {
  let binN = n.toString(2).split('').reverse();
  binN.push('0');
  for (let i = 0; i < binN.length; i++) {
    if (binN[i] === '1' && binN[i + 1] === '0') {
      const binA = binN.slice(i + 2);
      let binB = binN.slice(0, i + 2);
      binB.sort((a, b) => b * 1 - a * 1);
      binB.shift();
      binB.push('1');
      binN = binB.concat(binA);

      break;
    }
  }
  binN = binN.reverse();
  const answer =
    parseInt(binN.join(''), 2) !== 0 ? parseInt(binN.join(''), 2) : 0;
  return answer;
}

console.log(solution(1) === 2);
console.log(solution(2) === 4);
console.log(solution(3) === 5);
console.log(solution(4) === 8);
console.log(solution(5) === 6);
console.log(solution(6) === 9);
console.log(solution(7) === 11);
