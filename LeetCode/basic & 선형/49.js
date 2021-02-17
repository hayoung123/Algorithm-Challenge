var groupAnagrams = function (strs) {
  const answer = {};
  strs.forEach((str) => {
    const key = str.split('').sort().join('');
    if (answer[key]) answer[key].push(str);
    else answer[key] = [str];
  });
  return answer;
};
