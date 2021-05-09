// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];
  for await (const line of rl) {
    console.log('Hello Goorm! Your input is', line);
  }
  rl.close();
  const keywordCount = input.shift();
  const keywords = input.slice(0, keywordCount);
  const checks = input.slice(keywordCount);
  for (let i = 0; i < checks.length; i++) {
    matchKeyword(checks[i]);
  }
  process.exit();
})();

const matchKeyword = (keywords, checkWord) => {
  let count = 0;
  for (let i = 0; i < keywords.length; i++) {
    if (keywords[i].match(/checkWord/)) count++;
  }
  console.log(count);
};
