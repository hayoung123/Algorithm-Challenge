// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const route = [];
  for await (const line of rl) {
    route.push(line);
  }
  rl.close();

  const totalCase = route
    .pop()
    .split('0')
    .map((route) => getCase(route))
    .reduce((acc, cur) => acc * cur);

  console.log(totalCase);
  process.exit();
})();

const getCase = (route) => {
  const routeLength = route.length;
  const d = [0, 1, 1];
  for (let i = 3; i <= routeLength; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  return d[routeLength];
};
