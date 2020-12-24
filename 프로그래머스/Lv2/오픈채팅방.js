function solution(record) {
  const answer = [];
  const user = {};
  const stateArr = [];
  record.forEach((data) => {
    const [state, id, nickName] = data.split(' ');
    //새로들어오거나 or Change할 때 닉네임 변경
    if (state !== 'Leave') user[id] = nickName;
    //Enter or Leave 때만 출력해주니 stateArr에 넣어준다.
    if (state !== 'Change') {
      stateArr.push([state, id]);
    }
  });
  stateArr.forEach((data) => {
    const [state, id] = data;
    if (state === 'Enter') {
      answer.push(`${user[id]}님이 들어왔습니다.`);
    } else {
      answer.push(`${user[id]}님이 나갔습니다.`);
    }
  });
  return answer;
}
