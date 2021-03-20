// // Run by Node.js
// const readline = require('readline');

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });
//   const space = [];
//   for await (const line of rl) {
//     if (line.split('').length < 3) space.push(line);
//     else space.push(line.split('').map((v) => v * 1));
//   }
//   rl.close();
//   const side = space.shift();
//   const possibleSpace = getPossibleSpace(space, side);

//   possibleSpace.forEach((possibleCount, idx) => {
//     if (idx === 0) console.log(`total: ${possibleCount}`);
//     else console.log(`size[${idx}]: ${possibleCount}`);
//   });
//   process.exit();
// })();

const getPossibleSpace = (space, side) => {
  const possibleSpace = [0];
  for (let i = 1; i <= side; i++) {
    const possible = getPossible(space, i);
    if (possible === 0) continue;
    possibleSpace.push(possible);
  }
  possibleSpace[0] = possibleSpace.slice(1).reduce((acc, cur) => acc + cur, 0);
  return possibleSpace;
};

const getPossible = (space, num) => {
  let total = 0;
  for (let i = 0; i < space.length; i++) {
    for (let j = 0; j < space[i].length; j++) {
      if (space[i][j] === 0) continue;
      if (checkSquare(num, space, i, j)) total++;
    }
  }
  return total;
};

const checkSquare = (num, space, row, column) => {
  if (space.length - row < num || space.length - column < num) return false;
  for (let i = row; i < row + num; i++) {
    for (let j = column; j < column + num; j++) {
      if (space[i][j] === 0) return false;
    }
  }
  return true;
};

const space = [3, [1, 1, 1], [1, 1, 1], [1, 1, 1]];

const side = space.shift();
const possibleSpace = getPossibleSpace(space, side);

possibleSpace.forEach((possibleCount, idx) => {
  if (idx === 0) console.log(`total: ${possibleCount}`);
  else console.log(`size[${idx}]: ${possibleCount}`);
});
