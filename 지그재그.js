function solution(n, horizontal) {
  let result = Array.from(Array(n), () => new Array(n).fill(0));
  let seconds = 0;
  let col = 0;
  let row = 0;
  let cnt = 1;
  let total = n * n;

  while (!result[n - 1][n - 1]) {
    if (col === n - 1 && !result[n - 1][n - 1]) {
      seconds += 1;
      result[++row][col] = seconds;
      horizontal = false;
    }
    if (row === n - 1 && !result[n - 1][n - 1]) {
      seconds += 1;
      result[row][++col] = seconds;
      horizontal = true;
    }
    if (row === 0 && !result[n - 1][n - 1]) {
      seconds += 1;
      result[row][++col] = seconds;
      horizontal = false;
    }
    if (col === 0 && !result[n - 1][n - 1]) {
      seconds += 1;
      result[++row][col] = seconds;
      horizontal = true;
    }
    if (horizontal && col !== n - 1 && row !== 0 && !result[n - 1][n - 1]) {
      seconds += 2;
      result[--row][++col] = seconds;
    }
    if (!horizontal && row !== n - 1 && col !== 0 && !result[n - 1][n - 1]) {
      seconds += 2;
      result[++row][--col] = seconds;
    }
  }

  return result;
}
