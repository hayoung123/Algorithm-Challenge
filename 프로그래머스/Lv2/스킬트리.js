function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((tree) => {
    if (check(skill, tree)) answer++;
  });
  return answer;
}

function check(skill, tree) {
  const skillArr = [...skill];
  for (let char of tree) {
    if (char === skillArr[0]) {
      skillArr.shift();
    } else if (skillArr.includes(char)) {
      return false;
    }
  }
  return true;
}
