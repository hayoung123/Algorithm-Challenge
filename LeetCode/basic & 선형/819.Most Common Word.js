var mostCommonWord = function (paragraph, banned) {
  //   paragraph = paragraph
  //     .replace(/[^\w]/g, ' ')
  //     .split(' ')
  //     .filter((word) => word !== '')
  //     .map((word) => word.toLowerCase());
  const words = paragraph.toLowerCase().split(/\W+/);
  console.log(words);
  const wordObj = {};
  words.forEach((word) => {
    if (!banned.includes(word)) {
      if (wordObj[word]) wordObj[word]++;
      else wordObj[word] = 1;
    }
  });
  const entry = Object.entries(wordObj);
  entry.sort((a, b) => b[1] - a[1]);
  console.log(entry);
  return entry[0][0];
};
console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit'
  ])
);
