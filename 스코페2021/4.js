// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];
  for await (const line of rl) {
    input.push(line);
  }
  rl.close();
  const point = input.shift().split(' ');
  const [row, column] = input
    .shift()
    .split(' ')
    .map((v) => v * 1);

  const contents = input.slice(0, row).map((v) => v.split(''));
  const genre = input.slice(row).map((v) => v.split(''));
  const parsedGenre = parseGenre(genre);

  const classifiedContents = classifyContents(contents, row, column);
  const firstPriority = classifiedContents['Y'];
  const secondPriority = classifiedContents['O'];

  sortContents(firstPriority, parsedGenre, point);
  sortContents(secondPriority, parsedGenre, point);

  const recommendContents = [...firstPriority, ...secondPriority];

  recommendContents.forEach(({ row, column }) => {
    const thisGenre = genre[row][column];
    const thisPoint = point[parsedGenre[row][column]];
    console.log(`${thisGenre} ${thisPoint} ${row} ${column}`);
  });

  process.exit();
})();

const sortContents = (contents, genre, point) => {
  contents.sort((a, b) => {
    const aGenre = genre[a.row][a.column];
    const bGenre = genre[b.row][b.column];
    return point[bGenre] - point[aGenre];
  });
};

const classifyContents = (contents, row, column) => {
  classified = {};
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (classified[contents[i][j]]) classified[contents[i][j]].push({ row: i, column: j });
      else classified[contents[i][j]] = [{ row: i, column: j }];
    }
  }
  return classified;
};

const parseGenre = (genre) => {
  const firstAscii = 'A'.charCodeAt();
  const parsedGenere = genre.map((line) => line.map((v) => v.charCodeAt() - firstAscii));
  return parsedGenere;
};
