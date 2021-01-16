function solution(n) {
  const d = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 1000000007;
  }
  return d[n];
}
