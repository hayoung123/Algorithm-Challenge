function solution(m, musicinfos) {
  let musicInfos = parser(musicinfos);
  musicInfos.sort((a, b) => b.code.length - a.code.length);
  for (let musicInfo of musicInfos) {
    if (checkCode(musicInfo.code, m)) {
      return musicInfo.name;
    }
  }
  return `(None)`;
}

function parser(musicinfos) {
  const newMusicinfos = [];
  musicinfos.forEach((musicinfo) => {
    const [startTime, endTime, name, code] = musicinfo.split(",");
    const time = getTime(startTime, endTime);
    const fullCode = getFullCode(time, code);
    newMusicinfos.push({ name, code: fullCode });
  });
  return newMusicinfos;
}

function getTime(start, end) {
  start = start.split(":").map((v) => v * 1);
  end = end.split(":").map((v) => v * 1);
  const hours = end[0] - start[0];
  const minutes = end[1] - start[1];
  return hours * 60 + minutes;
}

function getFullCode(time, code) {
  code = tokenizeCode(code);
  let newCode = [];
  if (code.length === time) newCode = code;
  else if (time < code.length) newCode = code.slice(0, time);
  else {
    for (let i = 0; i < time; i++) {
      newCode.push(code[i % code.length]);
    }
  }
  return newCode;
}
function tokenizeCode(code) {
  code = code.split("");
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "#") {
      code[i - 1] += "#";
      code.splice(i, 1);
      i--;
    }
  }
  return code;
}

function checkCode(fullCode, m) {
  const codeLen = tokenizeCode(m).length;
  for (let i = 0; i <= fullCode.length - codeLen; i++) {
    if (fullCode.slice(i, i + codeLen).join("") === m) return true;
  }
  return false;
}

console.log(solution("A#B", ["12:00,12:03,a,BA#BB#"]));
